'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { RetrospectCard } from '@/types/gathering';
import ButtonBasic from '../button/ButtonBasic';

interface RankerCardProps {
  data?: RetrospectCard;
  winner?: boolean;
}

const RankerCard = ({ data, winner = false }: RankerCardProps) => {
  return (
    <div className="min-w-[380px] min-h-[397px] p-5 bg-neutral-0 rounded-2xl shadow-[0_10px_10px_0_rgba(0,89,255,0.05)]">
      <div className="relative flex flex-col items-center gap-5">
        <Image
          className="mt-4 rounded-[50%]"
          src="https://dummyimage.com/100x100/74afe3/fff"
          width={72}
          height={72}
          alt="profile"
        />
        {winner && (
          <Image
            className="absolute top-3"
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
            김수진
          </span>
          <span className="mt-2 text-neutral-70 font-medium">직무</span>
        </div>
      </div>
      <div className="flex justify-between items-center w-full min-h-[100px] px-5 mt-5 mb-6 text-neutral-60 font-mediume rounded-xl bg-background-5">
        <div className="flex flex-col gap-[6px] justify-center items-center min-h-[93px] py-5">
          <Image
            src="/images/gathering/spectrum.svg"
            width={32}
            height={32}
            alt="profile"
          />
          <span>스팩트럼</span>
        </div>
        <div className="flex flex-col gap-[6px] justify-center items-center min-h-[93px] py-5">
          <span className="text-lg text-neutral-100">999</span>
          <span>팔로워</span>
        </div>
        <div className="flex flex-col gap-[6px] justify-center items-center min-h-[93px] py-5">
          <span className="text-lg text-neutral-100">999</span>
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
