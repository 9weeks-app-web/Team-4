import Image from 'next/image';
import { RespectCard } from '@/types/gathering';
import ChipSmall from '../chip/ChipSmall';

interface SmallRespecterCardProps {
  data?: RespectCard;
}

const SmallRespecterCard = ({
  data = {
    id: 1,
    userId: 123,
    nickname: '사용자닉네임',
    profileImage: 'https://dummyimage.com/100x100/74afe3/fff',
    spectrumImage: '/images/gathering/spectrum.svg',
    portfolioImages: [
      'https://dummyimage.com/100x100/74afe3/fff',
      'https://dummyimage.com/100x100/74afe3/fff',
      'https://dummyimage.com/100x100/74afe3/fff',
    ],
    major: 'UX/UI',
    minor: '웹디자인',
    badge: [
      '/images/gathering/spectrum.svg',
      '/images/gathering/spectrum.svg',
      '/images/gathering/spectrum.svg',
      '/images/gathering/spectrum.svg',
    ],
    following: 999,
    follower: 999,
  },
}: SmallRespecterCardProps) => {
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
    following,
    follower,
  } = data;

  return (
    <div className="relative w-full px-[22px] py-5 border border-stroke-10 bg-neutral-0 rounded-xl">
      <div className="absolute">
        <Image
          className="rounded-[50%]"
          src={profileImage}
          width={72}
          height={72}
          alt="profile"
        />
        <Image
          className="absolute right-[-3px] bottom-[5px]"
          src="/images/gathering/plus.svg"
          width={28}
          height={28}
          alt="profile"
        />
      </div>

      <div className="flex flex-col justify-between pl-24">
        <div className="flex gap-2">
          <span className="text-lg font-semibold">{nickname}</span>
          <Image src={spectrumImage} width={19.5} height={24} alt="profile" />
        </div>
        <div className="relative flex gap-[6px] mt-1 text-sm">
          <span className="text-neutral-40">팔로워</span>
          <span>{follower}</span>
          <span className="text-neutral-40">·</span>
          <span className="text-neutral-40">팔로잉</span>
          <span>{following}</span>
          <Image
            className="absolute right-0"
            src="/images/gathering/right_arrow.svg"
            width={24}
            height={24}
            alt="arrow"
          />
        </div>
        <div className="flex gap-2 mt-2">
          <span className="text-neutral-40">본캐</span>
          <span>{major}</span>
          <span>
            <ChipSmall content="고수" theme="warning" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SmallRespecterCard;
