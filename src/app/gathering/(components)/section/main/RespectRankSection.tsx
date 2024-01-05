'use client';

import { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import RankerCard from '../../card/RankerCard';
import ChipSmall from '../../chip/ChipSmall';
import clsx from 'clsx';
import Image from 'next/image';
import SmallRespecterCard from '../../card/SmallRespecterCard';

const RespectRankSection = () => {
  return (
    <section className="relative flex flex-col items-center min-w-[100%] min-h-[1265px] px-[calc((100%-1200px)/2)] py-[100px] bg-gradient-to-b from-[#E5EEFF] from-0% to-[#CFE0FF] to-100%">
      <div className="text-primary-100 text-lg font-bold">리스팩 랭킹</div>
      <div className="flex items-center gap-3 pt-6 text-neutral-100 text-[26px] font-bold">
        <h3>이달의 리스팩 랭킹</h3>
        <ChipSmall content="Top 9" theme="primary" />
      </div>
      <div className="relative w-full">
        <div className="flex gap-[30px] mt-[61px]">
          {Children.toArray(
            Array.from({ length: 3 }).map((_, i) => (
              <div
                className={clsx(
                  'absolute',
                  'z-10',
                  i === 0 && ['mt-[115px]', 'left-0'],
                  i === 1 && ['left-1/2 transform -translate-x-1/2'],
                  i === 2 && ['mt-[115px]', 'right-0'],
                )}
              >
                <RankerCard winner={i === 1 && true} />
              </div>
            )),
          )}
        </div>
        <Image
          className="absolute w-full bottom-[-655px]"
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
