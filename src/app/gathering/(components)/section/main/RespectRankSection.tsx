'use client';

import Image from 'next/image';
import { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import RankerCard from '../../card/RankerCard';
import ChipSmall from '../../chip/ChipSmall';
import SmallRespecterCard from '../../card/SmallRespecterCard';

const RANKER_DUMMY = [
  {
    id: 1,
    userId: 1,
    nickname: '고하은',
    profileImage: '/images/gathering/profile1.svg',
    spectrumImage: '/images/gathering/spectrum2.svg',
    major: 'UX/UI',
    following: 767,
    follower: 676,
    projects: 767,
  },
  {
    id: 2,
    userId: 2,
    nickname: '기세준',
    profileImage: '/images/gathering/profile2.svg',
    spectrumImage: '/images/gathering/spectrum.svg',
    major: '프론트엔드',
    following: 323,
    follower: 232,
    projects: 323,
  },
  {
    id: 3,
    userId: 3,
    nickname: '김수진',
    profileImage: '/images/gathering/profile3.svg',
    spectrumImage: '/images/gathering/spectrum2.svg',
    major: 'UX/UI',
    following: 565,
    follower: 656,
    projects: 565,
  },
  {
    id: 1,
    userId: 1,
    nickname: '박창협',
    profileImage: '/images/gathering/profile1.svg',
    spectrumImage: '/images/gathering/spectrum4.svg',
    major: '백엔드',
    following: 767,
    follower: 676,
    projects: 767,
  },
  {
    id: 2,
    userId: 2,
    nickname: '박태영',
    profileImage: '/images/gathering/profile2.svg',
    spectrumImage: '/images/gathering/spectrum.svg',
    major: '프론트엔드',
    minor: 'UX/UI',
    following: 323,
    follower: 232,
    projects: 323,
  },
  {
    id: 2,
    userId: 2,
    nickname: '서유빈',
    profileImage: '/images/gathering/profile2.svg',
    spectrumImage: '/images/gathering/spectrum.svg',
    major: '프론트엔드',
    following: 323,
    follower: 232,
    projects: 323,
  },
  {
    id: 3,
    userId: 3,
    nickname: '안선영',
    profileImage: '/images/gathering/profile3.svg',
    spectrumImage: '/images/gathering/spectrum2.svg',
    major: 'UX/UI',
    following: 565,
    follower: 656,
    projects: 565,
  },
  {
    id: 3,
    userId: 3,
    nickname: '안지은',
    profileImage: '/images/gathering/profile3.svg',
    spectrumImage: '/images/gathering/spectrum2.svg',
    major: 'UX/UI',
    following: 565,
    follower: 656,
    projects: 565,
  },
  {
    id: 3,
    userId: 3,
    nickname: '이다빈',
    profileImage: '/images/gathering/profile3.svg',
    spectrumImage: '/images/gathering/spectrum2.svg',
    major: 'UX/UI',
    following: 565,
    follower: 656,
    projects: 565,
  },
  {
    id: 4,
    userId: 4,
    nickname: '정진',
    profileImage: '/images/gathering/profile4.svg',
    spectrumImage: '/images/gathering/spectrum4.svg',
    major: '백엔드',
    minor: '프론트엔드',
    following: 898,
    follower: 989,
    projects: 898,
  },
  {
    id: 2,
    userId: 2,
    nickname: '조현재',
    profileImage: '/images/gathering/profile2.svg',
    spectrumImage: '/images/gathering/spectrum.svg',
    major: '프론트엔드',
    following: 323,
    follower: 232,
    projects: 323,
  },
];

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
            RANKER_DUMMY.slice(0, 3).map((ranker, i) => (
              <div
                className={clsx(
                  'absolute',
                  'z-10',
                  i === 0 && ['mt-[115px]', 'left-0'],
                  i === 1 && ['left-1/2 transform -translate-x-1/2'],
                  i === 2 && ['mt-[115px]', 'right-0'],
                )}
              >
                <RankerCard data={ranker} winner={i === 1 && true} />
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
        <Swiper className="mt-40" spaceBetween={30} slidesPerView={4}>
          {Children.toArray(
            RANKER_DUMMY.slice(3).map((ranker, i) => (
              <SwiperSlide>
                <SmallRespecterCard data={ranker} />
              </SwiperSlide>
            )),
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default RespectRankSection;
