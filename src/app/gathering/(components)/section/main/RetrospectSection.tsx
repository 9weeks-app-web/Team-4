'use client';

import Image from 'next/image';
import { Children, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import { apiRequest } from '@/utils/api';
import { Retrospect, RetrospectCard } from '@/types/gathering';
import { PortfolioCard } from '@/types/portfolio';
import ButtonSimple from '../../button/ButtonSimple';
import ThumbnailGatheringCard from '../../card/ThumbnailGatheringCard';

const RetrospectSection = () => {
  const { data } = useQuery({
    queryKey: ['retrospectList'],
    queryFn: async () => {
      const res = await apiRequest<{ cardList: RetrospectCard[] }>(
        '/gathering/retrospect',
      );

      return res;
    },
  });

  return (
    <section className="w-full min-w-[1200px] px-[calc((100%-1200px)/2)] mt-10 mb-[160px]">
      <p className="pb-4 text-primary-100">프로젝트 회고</p>
      <div className="flex justify-between">
        <h3 className="w-[310px] text-[28px] font-bold break-keep">
          프로젝트를 완성한 팀원들의 회고를 들어보세요!
        </h3>
        <div className="self-end">
          <ButtonSimple content="회고 더보기" link="/gathering/retrospect/" />
        </div>
      </div>
      <Swiper
        className="w-full mt-12"
        spaceBetween={30}
        slidesPerView={1}
        navigation
        modules={[Navigation, Pagination]}
      >
        {Children.toArray(
          data?.cardList.map(data => (
            <SwiperSlide className="relative">
              <div className="max-w-[534px] px-[70px] py-[35px] border-4 border-primary-50 rounded-2xl">
                <ThumbnailGatheringCard
                  data={data as RetrospectCard & PortfolioCard}
                  button="프로젝트 회고 보기"
                  link={`/gathering/retrospect/${data.id}/`}
                />
              </div>
              <RetrospectPreview retrospectId={data.id} />
            </SwiperSlide>
          )),
        )}
      </Swiper>
    </section>
  );
};

export default RetrospectSection;

interface RetrospectPreviewProps {
  retrospectId: number;
}

const RetrospectPreview = ({ retrospectId }: RetrospectPreviewProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['retrospect', retrospectId],
    queryFn: async () => {
      const res = await apiRequest<{ retrospect: Retrospect }>(
        `/gathering/retrospect/${retrospectId}`,
      );

      return res;
    },
  });
  const [focusMemberId, setFocusMemberId] = useState<number>();
  const focusMember = data?.retrospect.members.find(
    ({ userId }) => userId === focusMemberId,
  );

  useEffect(() => {
    setFocusMemberId(data?.retrospect.members[0].userId);
  }, [data]);

  return (
    <article className="absolute top-0 right-0 min-w-[635px] h-full p-[30px] border border-primary-30 rounded-2xl">
      <div className="py-2 text-lg text-neutral-60 font-bold">회고</div>
      <div className="flex gap-4 mt-[30px] pb-4 text-sm text-neutral-80">
        {isLoading ||
          Children.toArray(
            data?.retrospect.members.map(({ userId, userProfile, name }) => (
              <div
                className="flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => setFocusMemberId(userId)}
              >
                <Image
                  className={clsx(
                    'aspect-square rounded-[50%] border-2 border-neutral-20 hover:scale-110 transition-all',
                    focusMemberId === userId && 'border-primary-100',
                  )}
                  src={userProfile}
                  width={72}
                  height={72}
                  alt="profile"
                />
                <span>{name}</span>
              </div>
            )),
          )}
      </div>
      <div className="min-h-[300px] my-[30px] pt-[30px] bg-background-blue rounded-xl">
        <div className="flex items-center gap-[10px] ml-10">
          <Image
            className="rounded-[50%]"
            src={focusMember?.userProfile || '/images/gathering/profile.svg'}
            width={72}
            height={72}
            alt="profile"
          />
          <div className="font-medium">
            <div className="flex items-center gap-1">
              <div className="text-neutral-80 text-xl ">
                {focusMember?.name}
              </div>
              {focusMember?.spectrumImage && (
                <Image
                  src={focusMember?.spectrumImage}
                  width={20}
                  height={23}
                  alt="spectrum"
                />
              )}
            </div>
            <div className="text-neutral-40">
              {focusMember?.isLeader && '팀장 · '}
              {focusMember?.position}
            </div>
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
            {focusMember?.retrospect}
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
