import Image from 'next/image';
import { RespectCard } from '@/types/gathering';
import ChipSmall from '../chip/ChipSmall';
import { Children } from 'react';

interface RespecterCardProps {
  data: RespectCard;
}

const RespecterCard = ({ data }: RespecterCardProps) => {
  const {
    id,
    userId,
    nickname,
    major,
    minor,
    profileImage,
    spectrumImage,
    portfolioImages,
    badge,
  } = data;

  return (
    <div className="relative min-w-[380px] min-h-[340px] px-8 py-8 border border-stroke-10 bg-neutral-0 rounded-2xl shadow-[0_10px_10px_0_rgba(0,89,255,0.05)]">
      <div className="flex gap-5">
        <Image
          className="rounded-[50%]"
          src={profileImage}
          width={72}
          height={72}
          alt="profile"
        />
        <div className="flex flex-col justify-evenly">
          <span className="text-lg font-semibold">{nickname}</span>
          <div className="flex gap-[6px] mt-1 text-sm">
            <span className="text-neutral-40">팔로워</span>
            <span>999</span>
            <span className="text-neutral-40">·</span>
            <span className="text-neutral-40">팔로잉</span>
            <span>999</span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-10">
        <span className="text-neutral-40">본캐</span>
        <span>{major}</span>
        <span>
          <ChipSmall content="고수" theme="warning" />
        </span>
      </div>
      <div className="flex gap-3 mt-3">
        <span className="text-neutral-40">본캐</span>
        <span>{minor}</span>
        <span>
          <ChipSmall content="고수" theme="warning" />
        </span>
      </div>
      <div className="flex gap-1 mt-8 max-h-[77px]">
        {Children.toArray(
          portfolioImages?.map(src => (
            <Image
              className="rounded-md"
              src={src}
              width={102}
              height={77}
              alt="profile"
            />
          )),
        )}
      </div>
    </div>
  );
};

export default RespecterCard;
