'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Children, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { clsx } from 'clsx';
import { apiRequest } from '@/utils/api';
import { GatheringCard, RespectCard } from '@/types/gathering';
import NormalGatherigCard from '../../card/NormalGatheringCard';
import ComboBox from '../../input/ComboBox';
import RespecterCard from '../../card/RespecterCard';

const SECTIONS = [
  {
    id: 'all',
    content: '전체',
  },
  {
    id: 'project',
    content: '프로젝트',
  },
  {
    id: 'study',
    content: '스터디',
  },
  {
    id: 'respecter',
    content: '리스팩러',
  },
];

const ORDERS = [
  {
    id: 'new',
    content: '최신순',
  },
  {
    id: 'popular',
    content: '인기순',
  },
  {
    id: 'recommend',
    content: '추천순',
  },
];

const MainGatheringSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [section, setSection] = useState('all');
  const [order, setOrder] = useState('new');
  const [page, setPage] = useState(1);
  const [data, setData] = useState<{
    size: number;
    cardList: GatheringCard[] | RespectCard[];
  }>();
  const [skill, setSkill] = useState<string | null>(null);
  const [job, setJob] = useState<string | null>(null);
  const [position, setPosition] = useState<string | null>(null);
  const [way, setWay] = useState<string | null>(null);

  const { data: gatheringCardList, refetch } = useQuery({
    queryKey: ['gatheringCardGridList'],
    queryFn: async () => {
      const res = await apiRequest<{ size: number; cardList: GatheringCard[] }>(
        `/gathering?type=${section}&page=${page}&skill=${skill}&job=${job}&position=${position}&way=${way}`,
      );

      return res;
    },
  });

  const { data: repecterCardList, refetch: refetchRespcter } = useQuery({
    queryKey: ['respectCardGridList'],
    queryFn: async () => {
      const res = await apiRequest<{ size: number; cardList: RespectCard[] }>(
        `/gathering/respecter?page=${page}`,
      );

      return res;
    },
  });

  useEffect(() => {
    if (section === 'respecter') {
      refetchRespcter();
      setData(repecterCardList);
    } else {
      refetch();
      setData(gatheringCardList);
    }
  }, [
    section,
    page,
    gatheringCardList,
    repecterCardList,
    refetchRespcter,
    refetch,
  ]);

  useEffect(() => {
    router.push(pathname + '?section=' + section);
  }, [pathname, router, section]);

  useEffect(() => {
    refetch();
  }, [skill, job, position, way, refetch]);

  return (
    <section className="flex flex-col min-w-[1200px] my-40">
      <nav>
        <ul className="flex gap-[30px] text-lg text-neutral-30">
          {SECTIONS.map(({ id, content }) => (
            <li key={id}>
              <button
                className={clsx(
                  section === id && ['text-neutral-100', 'border-b-2'],
                )}
                onClick={() => setSection(id)}
              >
                {content}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {section === 'respecter' || (
        <div
          className={`flex gap-4 mt-5 ${
            section === 'study' ? 'max-w-[583px]' : 'max-w-[764px]'
          }`}
        >
          {(section === 'all' || section === 'project') && (
            <ComboBox>
              <ComboBox.Select
                selectName="skills"
                options={['기술스택', 'JavaScript', 'Java', 'Figma', 'Xd']}
                setter={setSkill}
              />
            </ComboBox>
          )}
          <ComboBox>
            <ComboBox.Select
              selectName="jobs"
              options={['직군', '기획', '개발', '디자인']}
              setter={setJob}
            />
          </ComboBox>
          <ComboBox>
            <ComboBox.Select
              selectName="position"
              options={[
                '포지션',
                'PM',
                '서비스기획',
                '프론트엔드',
                '백엔드',
                '디자이너',
              ]}
              setter={setPosition}
            />
          </ComboBox>
          <ComboBox>
            <ComboBox.Select
              selectName="ways"
              options={['진행방식', '온/오프라인', '온라인', '오프라인']}
              setter={setWay}
            />
          </ComboBox>
        </div>
      )}
      <div className="flex justify-between mt-12 mb-3">
        <span className="">총 {data?.size}건</span>
        <span className="flex gap-6 text-neutral-30">
          {ORDERS.map(({ id, content }) => (
            <button
              key={id}
              className={clsx(order === id && ['text-neutral-100'])}
              onClick={() => setOrder(id)}
            >
              {content}
            </button>
          ))}
        </span>
      </div>
      <div className="grid grid-cols-3 grid-flow-row gap-x-[30px] gap-y-12 w-full">
        {Children.toArray(
          data?.cardList.map(data =>
            section === 'respecter' ? (
              <RespecterCard data={data as RespectCard} />
            ) : (
              <NormalGatherigCard data={data as GatheringCard} />
            ),
          ),
        )}
      </div>
      {data && (
        <div className="flex items-center self-center mt-20 text-neutral-50">
          <button className="p-[10px]" onClick={() => setPage(1)}>
            <Image
              src="/images/gathering/double_left_arrow.svg"
              width={24}
              height={24}
              alt="double left arrow"
            />
          </button>
          <button
            className="p-[10px]"
            onClick={() => setPage(prev => (prev > 1 ? prev - 1 : prev))}
          >
            <Image
              src="/images/gathering/left_arrow.svg"
              width={24}
              height={24}
              alt="left arrow"
            />
          </button>
          {Array.from(
            { length: Math.ceil(data.size / 12) },
            (_, i) => i + 1,
          ).map(num => (
            <button
              key={num}
              className={clsx(
                page === num && [
                  'text-neutral-0',
                  'bg-primary-100',
                  'rounded-[50%]',
                ],
                'w-10',
                'h-10',
              )}
              onClick={() => setPage(num)}
            >
              {num}
            </button>
          ))}
          <button
            className="p-[10px]"
            onClick={() =>
              setPage(prev =>
                prev < Math.ceil(data.size / 12) ? prev + 1 : prev,
              )
            }
          >
            <Image
              src="/images/gathering/right_arrow.svg"
              width={24}
              height={24}
              alt="right arrow"
            />
          </button>
          <button
            className="p-[10px]"
            onClick={() => setPage(Math.ceil(data.size / 12))}
          >
            <Image
              src="/images/gathering/double_right_arrow.svg"
              width={24}
              height={24}
              alt="double right arrow"
            />
          </button>
        </div>
      )}
    </section>
  );
};

export default MainGatheringSection;
