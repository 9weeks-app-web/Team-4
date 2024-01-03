'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { clsx } from 'clsx';
import { apiRequest } from '@/utils/api';
import { GatheringCard } from '@/types/gathering';
import NormalGatherigCard from '../../card/NormalGatheringCard';
import ComboBox from '../../input/ComboBox';
import Image from 'next/image';

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
    id: 'repecter',
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
  const [section, setSection] = useState('all');
  const [order, setOrder] = useState('new');
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery({
    queryKey: ['GatheringCardGridList'],
    queryFn: async () => {
      const res = await apiRequest<{ gatheringCardDummy: GatheringCard[] }>(
        '/gathering/deadline',
      );

      return res;
    },
  });

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
          <ComboBox.Select selectName="skills" />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select selectName="skills" />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select selectName="skills" />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select selectName="skills" />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select selectName="skills" />
        </ComboBox>
      </div>
      <div className="flex justify-between mt-12 mb-3">
        <span className="">총 9,999건</span>
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
      <div className="grid grid-cols-3 grid-flow-row gap-x-[30px] gap-y-12">
        {isLoading ? (
          <div>로딩중..</div>
        ) : (
          data?.gatheringCardDummy.map(data => (
            <NormalGatherigCard key={data.id} data={data} />
          ))
        )}
      </div>
      <div className="flex items-center self-center mt-20 text-neutral-50">
        <button className="p-[10px]">
          <Image
            src="/images/gathering/double_left_arrow.svg"
            width={24}
            height={24}
            alt="double left arrow"
          />
        </button>
        <button className="p-[10px]">
          <Image
            src="/images/gathering/left_arrow.svg"
            width={24}
            height={24}
            alt="left arrow"
          />
        </button>
        {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
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
        <button className="p-[10px]">
          <Image
            src="/images/gathering/right_arrow.svg"
            width={24}
            height={24}
            alt="right arrow"
          />
        </button>
        <button className="p-[10px]">
          <Image
            src="/images/gathering/double_right_arrow.svg"
            width={24}
            height={24}
            alt="double right arrow"
          />
        </button>
      </div>
    </section>
  );
};

export default MainGatheringSection;
