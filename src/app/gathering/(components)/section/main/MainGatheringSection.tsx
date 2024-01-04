'use client';

import { Children, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { clsx } from 'clsx';
import { apiRequest } from '@/utils/api';
import { GatheringCard } from '@/types/gathering';
import NormalGatherigCard from '../../card/NormalGatheringCard';
import ComboBox from '../../input/ComboBox';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
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
  const { data, refetch, isLoading } = useQuery({
    queryKey: ['GatheringCardGridList'],
    queryFn: async () => {
      const res = await apiRequest<{ size: number; cardList: GatheringCard[] }>(
        `/gathering?type=${section}&page=${page}`,
      );

      return res;
    },
  });

  useEffect(() => {
    refetch();
  }, [section, page]);

  useEffect(() => {
    router.push(pathname + '?section=' + section);
  }, [section]);

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
      <div className="flex max-w-[764px] gap-4 mt-5">
        <ComboBox>
          <ComboBox.Select
            selectName="skills"
            options={[
              { value: 'default', description: '기술스택' },
              { value: 'react', description: 'React' },
              { value: 'next', description: 'Next.js' },
            ]}
          />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select
            selectName="jobs"
            options={[
              { value: 'default', description: '직군' },
              { value: 'desinger', description: '디자이너' },
              { value: 'developer', description: '개발자' },
            ]}
          />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select
            selectName="position"
            options={[
              { value: 'default', description: '포지션' },
              { value: 'desinger', description: '디자이너' },
              { value: 'frontEnd', description: '프론트엔드' },
              { value: 'backEnd', description: '백엔드' },
            ]}
          />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select
            selectName="ways"
            options={[{ value: 'default', description: '진행방식' }]}
          />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select
            selectName="capacity"
            options={[{ value: 'default', description: '모집현황' }]}
          />
        </ComboBox>
      </div>
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
        {section === 'respecter' ? (
          <>
            <RespecterCard />
            <RespecterCard />
            <RespecterCard />
            <RespecterCard />
            <RespecterCard />
          </>
        ) : isLoading ? (
          <div>로딩중..</div>
        ) : (
          Children.toArray(
            data?.cardList.map(data => <NormalGatherigCard data={data} />),
          )
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
