'use client';

import Image from 'next/image';
import { RetrospectCard } from '@/types/gathering';
import ButtonBasic from '../button/ButtonBasic';
import ChipSmall from '../chip/ChipSmall';

interface LargeRetrospectCardProps {
  data: RetrospectCard;
}

const LargeRetrospectCard = ({ data }: LargeRetrospectCardProps) => {
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
    <div className="max-w-[534px]  px-[47px] py-[35px] border-4 border-primary-50 rounded-2xl">
      <div className="flex flex-col px-[25px] pt-[22px]">
        <Image
          className="aspect-[4/3] pb-6 rounded-2xl"
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
    </div>
  );
};

export default LargeRetrospectCard;
