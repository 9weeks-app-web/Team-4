'use client';

import Image from 'next/image';
import { RetrospectCard } from '@/types/gathering';
import { PortfolioCard } from '@/types/portfolio';
import ButtonBasic from '../button/ButtonBasic';
import ChipSmall from '../chip/ChipSmall';

interface ThumbnailGatheringCardProps {
  data?: RetrospectCard & PortfolioCard;
  button?: string;
}

const ThumbnailGatheringCard = ({
  data = {
    id: 1,
    type: 'project',
    title: '프로젝트 이름',
    content:
      '스나이퍼팩토리의 포트폴리오 아카이빙 서비스, 스팩폴리오입니다. 프로젝트 결과물/회고 요약된 설명이 2줄 제공됩니다.',
    teamName: '팀 이름',
    thumbnail: 'https://dummyimage.com/100x100/74afe3/fff',
    profileImage: 'https://dummyimage.com/100x100/74afe3/fffcom',
    userProfile: 'https://dummyimage.com/100x100/74afe3/fffcom',
    nickname: 'https://dummyimage.com/100x100/74afe3/fffcom',
    likes: 812,
    hits: 812,
  },
  button,
}: ThumbnailGatheringCardProps) => {
  const {
    id,
    type,
    title,
    content,
    teamName,
    thumbnail,
    userProfile,
    nickname,
    profileImage,
    likes,
    hits,
  } = data;

  return (
    <div className="flex flex-col">
      <Image
        className="aspect-[4/3] w-full pb-6 rounded-2xl"
        src={profileImage || thumbnail}
        alt="thumbnail"
        width={380}
        height={285}
      />
      <ChipSmall content="교육" />
      <h3 className="my-3 font-semibold text-lg">{title}</h3>
      {content && (
        <p className="w-full  mb-3 text-neutral-40 text-sm line-clamp-2 ">
          {content}
        </p>
      )}
      <div className="flex justify-between pb-11">
        <div className="flex">
          <Image
            className="mr-2 rounded-[50%]"
            src={profileImage || userProfile}
            alt="profile"
            width={24}
            height={24}
          />
          <span>{teamName || nickname}</span>
        </div>
        <div className="flex items-center text-neutral-60">
          <div className="flex mr-2">
            <Image
              className="mr-1"
              src="/images/gathering/view.svg"
              width={24}
              height={24}
              alt="view"
            />
            {hits}
          </div>
          <div className="flex ">
            <Image
              className="mr-1"
              src="/images/gathering/like.svg"
              width={24}
              height={24}
              alt="like"
            />
            {likes}
          </div>
        </div>
      </div>
      {button && (
        <ButtonBasic
          content={button}
          link={
            nickname
              ? `/gathering/portfolio/${id}`
              : `/gathering/retrospect/${id}`
          }
        />
      )}
    </div>
  );
};

export default ThumbnailGatheringCard;
