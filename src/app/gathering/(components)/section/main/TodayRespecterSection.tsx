import Image from 'next/image';
import RetrospectCard from '../../card/ThumbnailGatheringCard';
import ChipSmall from '../../chip/ChipSmall';

const TodayRespecterSection = () => {
  return (
    <section className="w-full px-[calc((100%-1200px)/2)] my-10 ">
      <h3 className="mb-12 text-[26px] font-bold">
        오늘의 리스팩러를 만나보세요
      </h3>
      <FocusRespecter />
      <div className="flex justify-between gap-[30px] min-h-[126px]">
        <div className="relative w-full px-[22px] py-5 border border-stroke-10 rounded-xl">
          <Image
            className="absolute rounded-[50%]"
            src="https://dummyimage.com/100x100/74afe3/fff"
            width={72}
            height={72}
            alt="profile"
          />
          <div className="flex flex-col justify-between pl-24">
            <span className="text-lg font-semibold">김수진</span>
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
        <div className="relative w-full px-[22px] py-5 border border-stroke-10 rounded-xl">
          <Image
            className="absolute rounded-[50%]"
            src="https://dummyimage.com/100x100/74afe3/fff"
            width={72}
            height={72}
            alt="profile"
          />
          <div className="flex flex-col justify-between pl-24">
            <span className="text-lg font-semibold">김수진</span>
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
        <div className="relative w-full px-[22px] py-5 border border-stroke-10 rounded-xl">
          <Image
            className="absolute rounded-[50%]"
            src="https://dummyimage.com/100x100/74afe3/fff"
            width={72}
            height={72}
            alt="profile"
          />
          <div className="flex flex-col justify-between pl-24">
            <span className="text-lg font-semibold">김수진</span>
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
      </div>
    </section>
  );
};

export default TodayRespecterSection;

const FocusRespecter = () => {
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
        <div className="mt-1 mb-4 text-[22px] font-semibold">닉네임 8글자</div>
        <div className="flex gap-3 font-medium">
          <span className="text-neutral-40">본캐</span>
          <span>직무</span>
          <span className="text-neutral-40">·</span>
          <span className="text-neutral-40">부캐</span>
          <span>직무</span>
        </div>
        <div className="flex mt-5 pt-5 pb-[40px] gap-[9px]">
          <Image
            className="rounded-[50%]"
            src="https://dummyimage.com/100x100/74afe3/fff"
            width={32}
            height={32}
            alt="profile"
          />
          <Image
            className="rounded-[50%]"
            src="https://dummyimage.com/100x100/74afe3/fff"
            width={32}
            height={32}
            alt="profile"
          />
          <Image
            className="rounded-[50%]"
            src="https://dummyimage.com/100x100/74afe3/fff"
            width={32}
            height={32}
            alt="profile"
          />
          <Image
            className="rounded-[50%]"
            src="https://dummyimage.com/100x100/74afe3/fff"
            width={32}
            height={32}
            alt="profile"
          />
        </div>
        <div className="flex justify-between w-full text-neutral-60 font-mediume">
          <div className="flex flex-col gap-[6px] justify-center items-center min-w-[140px] min-h-[93px] px-[30px] py-5 mb-6 border border-stroke-10 bg-background-5">
            <Image
              className="rounded-[50%]"
              src="https://dummyimage.com/100x100/74afe3/fff"
              width={32}
              height={32}
              alt="profile"
            />
            <span>스팩트럼</span>
          </div>
          <div className="flex flex-col gap-[6px] justify-center items-center min-w-[140px] min-h-[93px] px-[30px] py-5 mb-6 border border-stroke-10 bg-background-5">
            <span className="text-lg text-neutral-100">999</span>
            <span>팔로워</span>
          </div>
          <div className="flex flex-col gap-[6px] justify-center items-center min-w-[140px] min-h-[93px] px-[30px] py-5 mb-6 border border-stroke-10 bg-background-5">
            <span className="text-lg text-neutral-100">999</span>
            <span>프로젝트 수</span>
          </div>
        </div>
      </div>
      <div className="flex-1 px-[73px] py-10 border border-neutral-10 rounded-2xl shadow-[0_0_20px_0_rgba(123,137,163,0.12)]">
        <RetrospectCard />
      </div>
    </div>
  );
};
