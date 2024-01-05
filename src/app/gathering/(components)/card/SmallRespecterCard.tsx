import Image from 'next/image';
import ChipSmall from '../chip/ChipSmall';

const SmallRespecterCard = () => {
  return (
    <div className="relative w-full px-[22px] py-5 border border-stroke-10 bg-neutral-0 rounded-xl">
      <div className="absolute">
        <Image
          className="rounded-[50%]"
          src="https://dummyimage.com/100x100/74afe3/fff"
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
          <span className="text-lg font-semibold">김수진</span>
          <Image
            src="/images/gathering/spectrum.svg"
            width={19.5}
            height={24}
            alt="profile"
          />
        </div>
        <div className="relative flex gap-[6px] mt-1 text-sm">
          <span className="text-neutral-40">팔로워</span>
          <span>999</span>
          <span className="text-neutral-40">·</span>
          <span className="text-neutral-40">팔로잉</span>
          <span>999</span>
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
          <span>직무</span>
          <span>
            <ChipSmall content="고수" theme="warning" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SmallRespecterCard;
