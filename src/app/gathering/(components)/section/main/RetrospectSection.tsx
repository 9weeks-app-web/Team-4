'use client';

import { Children, useEffect, useId, useMemo, useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import { apiRequest } from '@/utils/api';
import { Retrospect, RetrospectCard } from '@/types/gathering';
import LargeRetrospectCard from '../../card/LargeRetrospectCard';
import ButtonSimple from '../../button/ButtonSimple';

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
              <RetrospectPreview retrospectId={data.id} />
            </SwiperSlide>
          ))
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
                className="flex flex-col items-center gap-2"
                onClick={() => setFocusMemberId(userId)}
              >
                <Image
                  className={clsx(
                    'rounded-[50%] border-2 border-neutral-20',
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
            src="https://dummyimage.com/100x100/74afe3/fff"
            width={72}
            height={72}
            alt="profile"
          />
          <div className="font-medium">
            <div className="text-neutral-80 text-xl ">{focusMember?.name}</div>
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
            {data?.retrospect.retrospect}
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
