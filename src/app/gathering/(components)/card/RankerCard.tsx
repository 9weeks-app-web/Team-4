'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { RespectCard } from '@/types/gathering';
import ButtonBasic from '../button/ButtonBasic';

interface RankerCardProps {
  data?: Omit<RespectCard, 'minor' | 'portfolioImages' | 'badge'> & {
    projects: number;
  };
  winner?: boolean;
}

const RankerCard = ({
  data = {
    id: 1,
    userId: 1,
    nickname: '박창협',
    profileImage: '/images/gathering/profile1.svg',
    spectrumImage: '/images/gathering/spectrum2.svg',
    major: 'UX/UI',
    following: 767,
    follower: 676,
    projects: 676,
  },
  winner = false,
}: RankerCardProps) => {
  const { nickname, major, profileImage, spectrumImage, follower, projects } =
    data;

  return (
    <div className="min-w-[380px] min-h-[397px] p-5 bg-neutral-0 rounded-2xl shadow-[0_10px_10px_0_rgba(0,89,255,0.05)]">
      <div className="relative flex flex-col items-center gap-5">
        <Image
          className="mt-3 rounded-[50%]"
          src={profileImage}
          width={70}
          height={70}
          alt="profile"
        />
        {winner && (
          <Image
            className="absolute top-1"
            src="/images/gathering/laurel.svg"
            width={108}
            height={100}
            alt="laurel"
          />
        )}
        <div className="flex flex-col items-center">
          <span
            className={clsx({ 'mt-4': winner }, 'text-[22px]', 'font-semibold')}
          >
            {nickname}
          </span>
          <span className="mt-2 text-neutral-70 font-medium">{major}</span>
        </div>
      </div>
      <div className="flex justify-between items-center w-full min-h-[100px] px-5 mt-5 mb-6 text-neutral-60 font-mediume rounded-xl bg-background-5">
        <div className="flex flex-col gap-[6px] justify-center items-center min-h-[93px] py-5">
          <Image src={spectrumImage} width={32} height={32} alt="profile" />
          <span>스팩트럼</span>
        </div>
        <div className="flex flex-col gap-[6px] justify-center items-center min-h-[93px] py-5">
          <span className="text-lg text-neutral-100">{follower}</span>
          <span>팔로워</span>
        </div>
        <div className="flex flex-col gap-[6px] justify-center items-center min-h-[93px] py-5">
          <span className="text-lg text-neutral-100">{projects}</span>
          <span>프로젝트 수</span>
        </div>
      </div>
      <div className="w-full pb-1">
        <ButtonBasic content="+ 더보기" style={['w-full']} />
      </div>
    </div>
  );
};

export default RankerCard;
