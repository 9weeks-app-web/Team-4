'use client';

import { useQuery } from '@tanstack/react-query';
import ThumbnailGatheringCard from '../../card/ThumbnailGatheringCard';
import { apiRequest } from '@/utils/api';
import { RetrospectCard } from '@/types/gathering';
import { usePathname } from 'next/navigation';
import { Children } from 'react';
import { PortfolioCard } from '@/types/portfolio';

const TYPE_MAPPER = {
  project: '프로젝트',
  study: '스터디',
  retrospect: '회고',
} as { [index: string]: string };

const RecommendGathering = () => {
  const type = usePathname().split('/').at(-2);

  const { data } = useQuery({
    queryKey: ['retrospectList'],
    queryFn: async () => {
      const res = await apiRequest<{ cardList: RetrospectCard[] }>(
        '/gathering/retrospect',
      );

      return res;
    },
  });

  return (
    <section className="flex flex-col w-full px-[calc((100%-1200px)/2)] my-[200px] py-[76px] font-bold bg-primary-5">
      <p className="mb-5 text-neutral-30">{type && TYPE_MAPPER[type]} 추천</p>
      <h3 className="text-[28px] leading-8">지금 보고있는</h3>
      <h3 className="text-[28px] leading-8">
        {type && TYPE_MAPPER[type]}와 유사한 {type && TYPE_MAPPER[type]}들이에요
      </h3>
      <div className="flex gap-[30px] w-full mt-12">
        {Children.toArray(
          data?.cardList
            .slice(0, 3)
            .map(data => (
              <ThumbnailGatheringCard
                data={data as RetrospectCard & PortfolioCard}
                link={`/gathering/${type}/${data.id}`}
              />
            )),
        )}
      </div>
    </section>
  );
};

export default RecommendGathering;
