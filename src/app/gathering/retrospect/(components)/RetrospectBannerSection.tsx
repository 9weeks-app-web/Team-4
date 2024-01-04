'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import RetrospectCard from '../../(components)/card/ThumbnailGatheringCard';

const RetrospectBannerSection = () => {
  return (
    <section className="w-full px-[20%] pt-[40px] pb-[80px] bg-background-blue">
      <p className="pb-4 text-neutral-30">{'모임 > 회고'}</p>
      <div className="flex flex-col">
        <div className="flex justify-between mb-[30px]">
          <h3 className="text-2xl break-keep">
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
            <RetrospectCard />
          </SwiperSlide>
          <SwiperSlide>
            <RetrospectCard />
          </SwiperSlide>
          <SwiperSlide>
            <RetrospectCard />
          </SwiperSlide>
          <SwiperSlide>
            <RetrospectCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default RetrospectBannerSection;
