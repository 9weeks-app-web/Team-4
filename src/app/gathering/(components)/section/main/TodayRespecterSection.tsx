'use client';

import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/utils/api';
import { RespectCard, RetrospectCard } from '@/types/gathering';
import { PortfolioCard } from '@/types/portfolio';
import ThumbnailGatheringCard from '../../card/ThumbnailGatheringCard';
import SmallRespecterCard from '../../card/SmallRespecterCard';
import { Children, useState } from 'react';

const TodayRespecterSection = () => {
  const [focusCard, setfocusCard] = useState(0);

  const { data } = useQuery({
    queryKey: ['todayRespecter'],
    queryFn: async () => {
      const res = await apiRequest<{
        cardList: {
          respecter: RespectCard & { projects: number };
          portfolio: PortfolioCard;
        }[];
      }>(`/gathering/respecter/today`);

      return res;
    },
  });

  return (
    <section className="w-full px-[calc((100%-1200px)/2)] my-10 ">
      <h3 className="mb-12 text-[26px] font-bold">
        오늘의 리스팩러를 만나보세요
      </h3>
      {data && <FocusRespecter data={data?.cardList[focusCard]} />}
      <div className="flex justify-between gap-[30px] w-ful min-h-[126px]">
        {Children.toArray(
          data?.cardList.map(
            (data, i) =>
              i !== focusCard && (
                <div className="w-full" onClick={() => setfocusCard(i)}>
                  <SmallRespecterCard data={data.respecter} />
                </div>
              ),
          ),
        )}
      </div>
    </section>
  );
};

export default TodayRespecterSection;

interface FocusRespecter {
  data: {
    respecter: RespectCard & { projects: number };
    portfolio: PortfolioCard;
  };
}

const FocusRespecter = ({ data }: FocusRespecter) => {
  const { respecter, portfolio } = data;

  return (
    <div className="flex gap-[30px] min-h-[492px] pb-12">
      <div className="flex flex-col items-center flex-1 min-w-[686px] px-[116px] py-[38px] border border-neutral-10 rounded-2xl shadow-[0_0_20px_0_rgba(123,137,163,0.12)]">
        <Image
          className="my-[34px] rounded-[50%]"
          src="https://dummyimage.com/100x100/74afe3/fff"
          width={72}
          height={72}
          alt="profile"
        />
        <div className="mt-1 mb-4 text-[22px] font-semibold">
          {respecter.nickname}
        </div>
        <div className="flex gap-3 font-medium">
          <span className="text-neutral-40">본캐</span>
          <span>{respecter.major}</span>
          <span className="text-neutral-40">·</span>
          <span className="text-neutral-40">부캐</span>
          <span>{respecter.minor}</span>
        </div>
        <div className="flex mt-5 pt-5 pb-[40px] gap-[9px]">
          {Children.toArray(
            respecter.badge?.map(src => (
              <Image
                className="rounded-[50%]"
                src={src}
                width={32}
                height={32}
                alt="badge"
              />
            )),
          )}
        </div>
        <div className="flex justify-between w-full text-neutral-60 font-mediume">
          <div className="flex flex-col gap-[6px] justify-center items-center min-w-[140px] min-h-[93px] px-[30px] py-5 mb-6 border border-stroke-10 bg-background-5 rounded-md">
            <Image
              src={respecter.spectrumImage}
              width={32}
              height={32}
              alt="spectrum"
            />
            <span>스팩트럼</span>
          </div>
          <div className="flex flex-col gap-[6px] justify-center items-center min-w-[140px] min-h-[93px] px-[30px] py-5 mb-6 border border-stroke-10 bg-background-5 rounded-md">
            <span className="text-lg text-neutral-100">
              {respecter.follower}
            </span>
            <span>팔로워</span>
          </div>
          <div className="flex flex-col gap-[6px] justify-center items-center min-w-[140px] min-h-[93px] px-[30px] py-5 mb-6 border border-stroke-10 bg-background-5 rounded-md">
            <span className="text-lg text-neutral-100">
              {respecter.projects}
            </span>
            <span>프로젝트 수</span>
          </div>
        </div>
      </div>
      <div className="flex-1 px-[73px] py-10 border border-neutral-10 rounded-2xl shadow-[0_0_20px_0_rgba(123,137,163,0.12)]">
        <ThumbnailGatheringCard
          data={portfolio as RetrospectCard & PortfolioCard}
          button="포트폴리오 보기"
        />
      </div>
    </div>
  );
};
