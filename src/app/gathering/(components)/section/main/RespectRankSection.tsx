'use client';

import { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import RespecterCard from '../../card/RespecterCard';
import ChipSmall from '../../chip/ChipSmall';
import clsx from 'clsx';
import Image from 'next/image';
import SmallRespecterCard from '../../card/SmallRespecterCard';
import { Navigation } from 'swiper/modules';

const RespectRankSection = () => {
  return (
    <section className="relative flex flex-col items-center max-w-[100%] min-h-[1265px] px-[calc((100%-1200px)/2)] py-[100px] bg-gradient-to-b from-[#E5EEFF] from-0% to-[#CFE0FF] to-100%">
      <div className="text-primary-100 text-lg font-bold">리스팩 랭킹</div>
      <div className="flex items-center gap-3 pt-6 text-neutral-100 text-[26px] font-bold">
        <h3>이달의 리스팩 랭킹</h3>
        <ChipSmall content="Top 9" theme="primary" />
      </div>
      <div className="relative">
        <div className="flex gap-[30px] w-full mt-[61px]">
          {Children.toArray(
            Array.from({ length: 3 }).map((_, i) => (
              <div className={clsx(i !== 1 && 'mt-[101px]')}>
                <RespecterCard />
              </div>
            )),
          )}
        </div>
        <Image
          className="absolute bottom-[-120px]"
          src="/images/gathering/rank.svg"
          width={1200}
          height={201}
          alt="rank"
        />
      </div>
      <div className="absolute bottom-[101px] w-full pl-[calc((100%-1200px)/2)] ">
        <Swiper
          className="mt-40"
          spaceBetween={30}
          slidesPerView={4}
          navigation
          modules={[Navigation]}
        >
          {Children.toArray(
            Array.from({ length: 6 }).map(() => (
              <SwiperSlide>
                <SmallRespecterCard />
              </SwiperSlide>
            )),
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default RespectRankSection;
