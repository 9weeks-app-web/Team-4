'use client';

import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { apiRequest } from '@/utils/api';
import { GatheringCard } from '@/types/gathering';
import LargeGatherigCard from '../../card/LargeGatheringCard';

const DeadlineGatheringSection = () => {
  const { data } = useQuery({
    queryKey: ['GatheringCardList'],
    queryFn: async () => {
      const res = await apiRequest<{ gatheringCardDummy: GatheringCard[] }>(
        '/gathering/deadline',
      );

      return res;
    },
  });

  return (
    <section className="w-full min-w-[1200px] pl-[calc((100%-1200px)/2)]">
      <div className="flex py-4">
        <h3 className="pr-8 text-[26px] font-bold">마감이 임박했어요!</h3>
        <div className="self-end">
          {/* <ButtonBasic content={`로그인 후 관심사 추천받기 >`} /> */}
        </div>
      </div>

      <Swiper
        className="mt-4"
        spaceBetween={330}
        slidesPerView={3}
        navigation
        modules={[Navigation]}
      >
        {data?.gatheringCardDummy.map(data => (
          <SwiperSlide key={data.id}>
            <LargeGatherigCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default DeadlineGatheringSection;
