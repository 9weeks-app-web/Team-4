'use client';

import { Children } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { apiRequest } from '@/utils/api';
import { GatheringCard } from '@/types/gathering';
import NormalGatherigCard from '../../card/NormalGatheringCard';
import ButtonRound from '../../button/ButtonRound';

const RecommendGatheringSection = () => {
  const { data } = useQuery({
    queryKey: ['RecommendCardList'],
    queryFn: async () => {
      const res = await apiRequest<{ cardList: GatheringCard[] }>(
        '/gathering/recommend',
      );

      return res;
    },
  });

  return (
    <>
      <div className="flex items-center w-full h-[84px] bg-primary-5 bg-banner-sticky bg-center bg-cover">
        <div className="flex items-center justify-between w-full px-[calc((100%-1000px)/2)] text-[26px] text-neutral-70 font-bold">
          <div>
            <span>지금 실력으로 팀 프로젝트에 참여해도 될까? </span>
            <span className="text-primary-80">
              답은 스나이퍼팩토리 프로그램!
            </span>
          </div>
          <ButtonRound content="교육 강좌 보러가기" theme="primary" />
        </div>
      </div>
      <section className="w-screen py-[50px] bg-primary-80">
        <div className="flex flex-col px-[calc((100%-1200px)/2)]">
          <p className="text-primary-30 text-lg font-bold">신규 모임</p>
          <h3 className="w-56 py-4 text-2xl text-neutral-0 font-bold break-keep">
            많은 사람들이 스크랩한 신규 모임들이에요
          </h3>
          <Swiper
            className="mt-4 w-full"
            spaceBetween={30}
            slidesPerView={3}
            navigation
            modules={[Navigation]}
          >
            {Children.toArray(
              data?.cardList.map(data => (
                <SwiperSlide>
                  <NormalGatherigCard data={data} />
                </SwiperSlide>
              )),
            )}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default RecommendGatheringSection;
