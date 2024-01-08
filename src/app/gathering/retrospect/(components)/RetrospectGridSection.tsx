'use client';

import Image from 'next/image';
import { Children, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { apiRequest } from '@/utils/api';
import { GatheringCard, RetrospectCard } from '@/types/gathering';
import ComboBox from '../../(components)/input/ComboBox';
import NormalGatherigCard from '../../(components)/card/NormalGatheringCard';
import ThumbnailGatheringCard from '../../(components)/card/ThumbnailGatheringCard';

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

const RetrospectGridSection = () => {
  const [order, setOrder] = useState('new');
  const [page, setPage] = useState(1);

  const { data, refetch } = useQuery({
    queryKey: ['retrospectCardGridList'],
    queryFn: async () => {
      const res = await apiRequest<{
        size: number;
        cardList: RetrospectCard[];
      }>(`/gathering/retrospect?page=${page}`);

      return res;
    },
  });

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  return (
    <section className="flex flex-col w-[1200px] my-28">
      <h3 className="text-[26px] font-bold">
        완성된 프로젝트 회고를 만나보세요
      </h3>
      <div className="flex max-w-[296px] gap-4 mt-5">
        <ComboBox>
          <ComboBox.Select
            selectName="ways"
            options={[{ value: 'default', description: '직군' }]}
          />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select
            selectName="capacity"
            options={[{ value: 'default', description: '포지션' }]}
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
        {Children.toArray(
          data?.cardList.map(data => <ThumbnailGatheringCard data={data} />),
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

export default RetrospectGridSection;
