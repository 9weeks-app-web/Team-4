'use client';

import { useQuery } from '@tanstack/react-query';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { apiRequest } from '@/utils/api';
import { RetrospectCard } from '@/types/gathering';
import LargeRetrospectCard from '../../card/LargeRetrospectCard';
import Link from 'next/link';

const RetrospectSection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['RetrospectList'],
    queryFn: async () => {
      const res = await apiRequest<{ retrospectCardDummy: RetrospectCard[] }>(
        '/gathering/retrospect',
      );

      return res;
    },
  });

  return (
    <section className="w-full min-w-[1200px] px-[calc((100%-1200px)/2)]">
      <p className="pb-4 text-primary-100">프로젝트 회고</p>
      <div className="flex justify-between">
        <h3 className="w-[310px] text-[28px] font-bold break-keep">
          프로젝트를 완성한 팀원들의 회고를 들어보세요!
        </h3>
        <Link
          className="px-4 text-lg text-neutral-50 font-medium self-end"
          href="gathering/retrospect"
        >{`회고 더보기 >`}</Link>
      </div>

      <Swiper
        className="w-full mt-12"
        spaceBetween={30}
        slidesPerView={1}
        navigation
        modules={[Navigation, Pagination]}
      >
        {isLoading ? (
          <div>로딩중..</div>
        ) : (
          data?.retrospectCardDummy.map(data => (
            <SwiperSlide key={data.id} className="relative">
              <LargeRetrospectCard data={data} />
              <div className="absolute top-0 right-0 min-w-[635px] h-full p-[30px] border border-primary-30 rounded-2xl">
                회고 내용
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </section>
  );
};

export default RetrospectSection;
