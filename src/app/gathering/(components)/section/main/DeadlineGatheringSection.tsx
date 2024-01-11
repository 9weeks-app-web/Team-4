'use client';

import { useSearchParams } from 'next/navigation';
import { Children, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { apiRequest } from '@/utils/api';
import { GatheringCard } from '@/types/gathering';
import LargeGatherigCard from '../../card/LargeGatheringCard';

const DeadlineGatheringSection = () => {
  const search = useSearchParams();
  const section = search.get('section');

  const { data, refetch } = useQuery({
    queryKey: ['deadlineCardList'],
    queryFn: async () => {
      const res = await apiRequest<{ cardList: GatheringCard[] }>(
        `/gathering/deadline?type=${section === 'study' ? 'study' : 'project'}`,
      );

      return res;
    },
  });

  useEffect(() => {
    refetch();
  }, [section, refetch]);

  return (
    <section className="relative w-full min-w-[1200px] pl-[calc((100%-1200px)/2)]">
      <div className="flex py-4">
        <h3 className="pr-8 text-[26px] font-bold">마감이 임박했어요!</h3>
        <div className="self-end"></div>
      </div>

      <Swiper className="mt-4" spaceBetween={30} slidesPerView={'auto'}>
        {Children.toArray(
          data?.cardList.map(data => (
            <SwiperSlide className="!w-fit">
              <LargeGatherigCard
                data={data}
                link={
                  section === 'study'
                    ? `/gathering/study/${data.id}`
                    : `/gathering/project/${data.id}`
                }
              />
            </SwiperSlide>
          )),
        )}
      </Swiper>
    </section>
  );
};

export default DeadlineGatheringSection;
