'use client';

import Image from 'next/image';
import { RetrospectCard } from '@/types/gathering';
import ButtonBasic from '../button/ButtonBasic';
import ChipSmall from '../chip/ChipSmall';

interface ThumbnailGatheringCardProps {
  data?: RetrospectCard;
}

const ThumbnailGatheringCard = ({
  data = {
    id: 1,
    type: 'project',
    title: '프로젝트 이름',
    content: '프로젝트 내용',
    teamName: '팀 이름',
    thumbnail: 'https://dummyimage.com/100x100/74afe3/fff',
    profileImage: 'https://dummyimage.com/100x100/74afe3/fffcom',
    like: 812,
    hits: 812,
  },
}: ThumbnailGatheringCardProps) => {
  const {
    id,
    type,
    title,
    content,
    teamName,
    thumbnail,
    profileImage,
    like,
    hits,
  } = data;

  return (
    <div className="flex flex-col">
      <Image
        className="aspect-[4/3] w-full pb-6 rounded-2xl"
        src={profileImage}
        alt="projcet image"
        width={380}
        height={285}
      />
      <ChipSmall content="교육" />
      <h3 className="my-3 font-semibold text-lg">{title}</h3>
      <div className="flex justify-between pb-11">
        <div className="flex">
          <Image
            className="mr-2 rounded-[50%]"
            src={profileImage}
            alt="team image"
            width={24}
            height={24}
          />
          <span>{teamName}</span>
        </div>
        <div className="flex items-center text-neutral-60">
          <div className="flex mr-2">
            <Image
              className="mr-1"
              src="images/gathering/view.svg"
              width={24}
              height={24}
              alt="view"
            />
            {hits}
          </div>
          <div className="flex ">
            <Image
              className="mr-1"
              src="images/gathering/like.svg"
              width={24}
              height={24}
              alt="view"
            />
            {like}
          </div>
        </div>
      </div>
      <ButtonBasic content="프로젝트 회고 보기" />
    </div>
  );
};

export default ThumbnailGatheringCard;
