'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ThumbnailGatheringCard from '../../(components)/card/ThumbnailGatheringCard';

const RetrospectBannerSection = () => {
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
        <div className="flex justify-between mb-[30px]">
          <h3 className="text-[26px] text-neutral-80 font-bold break-keep">
            <span className="text-primary-100">김스팩</span>님의 관심사와 비슷한
            프로젝트 회고를 가져왔어요
          </h3>
          <div>1/4</div>
        </div>
        <Swiper
          className="w-full"
          spaceBetween={30}
          slidesPerView={3}
          navigation
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>
            <ThumbnailGatheringCard />
          </SwiperSlide>
          <SwiperSlide>
            <ThumbnailGatheringCard />
          </SwiperSlide>
          <SwiperSlide>
            <ThumbnailGatheringCard />
          </SwiperSlide>
          <SwiperSlide>
            <ThumbnailGatheringCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default RetrospectBannerSection;
