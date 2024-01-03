'use client';

import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/utils/api';
import { GatheringCard } from '@/types/gathering';
import LargeGatherigCard from '../../card/LargeGatheringCard';
import ButtonBasic from '../../button/ButtonBasic';

const DeadlineGatheringSection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['GatheringCardList'],
    queryFn: async () => {
      const res = await apiRequest<{ gatheringCardDummy: GatheringCard[] }>(
        '/gathering/deadline',
      );

      return res;
    },
  });

  return (
    <section className="w-full pl-[calc((100%-1200px)/2)]">
      <div className="flex py-4">
        <h3 className="pr-8 text-2xl break-keep">마감이 임박했어요!</h3>
        <div className="self-end">
          <ButtonBasic content={`로그인 후 관심사 추천받기 >`} />
        </div>
      </div>
      <div className="flex gap-[30px] mt-4 overflow-scroll">
        {isLoading ? (
          <div>로딩중..</div>
        ) : (
          data?.gatheringCardDummy.map(data => (
            <LargeGatherigCard key={data.id} data={data} />
          ))
        )}
      </div>
    </section>
  );
};

export default DeadlineGatheringSection;
