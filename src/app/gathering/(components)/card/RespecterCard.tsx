import Image from 'next/image';
import { RespectCard } from '@/types/gathering';
import ChipSmall from '../chip/ChipSmall';
import { Children } from 'react';
import Link from 'next/link';

interface RespecterCardProps {
  data: RespectCard;
  link?: string;
}

const RespecterCard = ({
  data,
  link = '/gathering/project/12',
}: RespecterCardProps) => {
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
    <Link href={link}>
      <div className="relative min-w-[380px] min-h-[340px] px-8 py-8 border border-stroke-10 bg-neutral-0 rounded-2xl hover:shadow-[0_10px_10px_0_rgba(0,89,255,0.05)] hover:border-2 hover:border-primary-100 hover:px-[31px] hover:py-[31px]">
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
    </Link>
  );
};

export default RespecterCard;
