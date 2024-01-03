'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { apiRequest } from '@/utils/api';
import { RetrospectCard } from '@/types/gathering';
import LargeRetrospectCard from '../../card/LargeRetrospectCard';
import ButtonSimple from '../../button/ButtonSimple';
import Image from 'next/image';

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
        <div className="self-end">
          <ButtonSimple content="회고 더보기" />
        </div>
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
              <RetrospectPreview />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </section>
  );
};

export default RetrospectSection;

const RetrospectPreview = () => {
  return (
    <article className="absolute top-0 right-0 min-w-[635px] h-full p-[30px] border border-primary-30 rounded-2xl">
      <div className="py-2 text-lg text-neutral-60 font-bold">회고</div>
      <div className="flex gap-4 mt-[30px] pb-4 text-sm text-neutral-80">
        <div className="flex flex-col items-center gap-2">
          <Image
            className="rounded-[50%] border-2 border-primary-100"
            src="https://dummyimage.com/100x100/74afe3/fff"
            width={72}
            height={72}
            alt="profile"
          />
          <span>김스팩</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            className="rounded-[50%] border border-neutral-20"
            src="https://dummyimage.com/100x100/74afe3/fff"
            width={72}
            height={72}
            alt="profile"
          />
          <span>박스팩</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            className="rounded-[50%] border border-neutral-20"
            src="https://dummyimage.com/100x100/74afe3/fff"
            width={72}
            height={72}
            alt="profile"
          />
          <span>박스팩</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            className="rounded-[50%] border border-neutral-20"
            src="https://dummyimage.com/100x100/74afe3/fff"
            width={72}
            height={72}
            alt="profile"
          />
          <span>박스팩</span>
        </div>
      </div>
      <div className="min-h-[300px] my-[30px] pt-[30px] bg-background-blue rounded-xl">
        <div className="flex items-center gap-[10px] ml-10">
          <Image
            className="rounded-[50%]"
            src="https://dummyimage.com/100x100/74afe3/fff"
            width={72}
            height={72}
            alt="profile"
          />
          <div className="font-medium">
            <div className="text-neutral-80 text-xl ">김스팩</div>
            <div className="text-neutral-40">팀장 · PM</div>
          </div>
        </div>
        <div className="flex gap-4 px-8 py-[30px]">
          <Image
            className="self-start"
            src="/images/gathering/open_quote.svg"
            width={32}
            height={27}
            alt="open double quote"
          />
          <p className="w-[413px] text-xl text-neutral-70 font-medium">
            초기 브랜딩은 모든 팀원들이 함께 참여하면서 친근감 있는 캐릭터를
            어떻게 잡을까 고민했던 것 같아요. 그 가운데 고양이 캐릭터가
            탄생했습니다. 그 가운데 고양이 캐릭터가 탄생했습니다.
          </p>
          <Image
            className="self-start"
            src="/images/gathering/close_quote.svg"
            width={32}
            height={27}
            alt="close double quote"
          />
        </div>
      </div>
    </article>
  );
};
