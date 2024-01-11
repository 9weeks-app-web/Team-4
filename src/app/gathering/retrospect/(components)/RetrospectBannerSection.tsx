'use client';

import Image from 'next/image';
import { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/utils/api';
import { RetrospectCard } from '@/types/gathering';
import { PortfolioCard } from '@/types/portfolio';
import ThumbnailGatheringCard from '../../(components)/card/ThumbnailGatheringCard';

const RetrospectBannerSection = () => {
  const { data } = useQuery({
    queryKey: ['retrospectCardList'],
    queryFn: async () => {
      const res = await apiRequest<{ cardList: RetrospectCard[] }>(
        `/gathering/retrospect`,
      );

      return res;
    },
  });

  return (
    <section className="w-full px-[calc((100%-1200px)/2)] pt-[40px] pb-[80px] bg-background-blue">
      <div className="flex flex-1 pb-4 text-neutral-40">
        <span>모임</span>
        <Image
          src="/images/gathering/right_arrow.svg"
          alt="right arrow"
          width={16}
          height={16}
        />
        <span>프로젝트 회고</span>
      </div>
      <div className="flex flex-col">
        <h3 className="mb-[30px] text-[26px] text-neutral-80 font-bold break-keep">
          <span className="text-primary-100">김스팩</span>님의 관심사와 비슷한
          프로젝트 회고를 가져왔어요
        </h3>
        <Swiper
          className="w-full"
          spaceBetween={30}
          slidesPerView={3}
          navigation
          modules={[Navigation]}
        >
          {Children.toArray(
            data?.cardList.map(data => (
              <SwiperSlide>
                <ThumbnailGatheringCard
                  data={data as RetrospectCard & PortfolioCard}
                />
              </SwiperSlide>
            )),
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default RetrospectBannerSection;
