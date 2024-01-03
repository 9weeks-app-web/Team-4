'use client';

import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/utils/api';
import { GatheringCard } from '@/types/gathering';
import NormalGatherigCard from '../../card/NormalGatheringCard';

const RecommendGatheringSection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['RecommendCardList'],
    queryFn: async () => {
      const res = await apiRequest<{ recommendProjectDummy: GatheringCard[] }>(
        '/gathering/recommend',
      );

      return res;
    },
  });

  return (
    <section className="flex flex-col min-w-[1200px] px-[calc((100%-1200px)/2)] mt-[160px] py-[50px] bg-primary-80">
      <p className="text-primary-30 text-lg font-bold">신규 모임</p>
      <h3 className="w-56 py-4 text-2xl text-neutral-0 font-bold break-keep">
        많은 사람들이 스크랩한 신규 모임들이에요
      </h3>

      <div className="flex gap-[30px] w-full mt-4">
        {isLoading ? (
          <div>로딩중..</div>
        ) : (
          data?.recommendProjectDummy.map(data => (
            <NormalGatherigCard key={data.id} data={data} />
          ))
        )}
      </div>
    </section>
  );
};

export default RecommendGatheringSection;
