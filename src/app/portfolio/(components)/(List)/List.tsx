import Image from 'next/image';

const PortfoliosList = ({
  e,
}: {
  e: {
    job: string;
    thumbnail: string;
    title: string;
    profileImg: string;
    nickname: string;
    hit: number;
    like: number;
  };
}) => {
  return (
    <>
      {/* 썸네일 영역 */}
      <div className={`w-full h-52 relative mb-2`}>
        <Image src={e.thumbnail} className={`rounded-lg`} fill alt="썸네일" />
      </div>
      {/* 직군 라벨 및 제목 영역 */}
      <div className="mt-2 pl-2 pr-2 pt-1 pb-1 min-w-14 w-fit rounded-md font-semibold text-xs text-neutral-60 bg-neutral-5">
        {e.job}
      </div>
      <div className="ml-2 mt-2 text-lg font-semibold">{e.title}</div>
      {/* 프로필, 조회수, 좋아요 영역 */}
      <div className="flex mt-2 w-full">
        <div className="relative w-6 h-6">
          <Image
            src={e.profileImg}
            alt="프로필 이미지"
            fill
            className="rounded-full"
          />
        </div>
        <div className="ml-2 text-sm ">{e.nickname}</div>
        <div className={`ml-auto flex text-neutral-60`}>
          <div className="flex">
            <div className="mr-1">
              <Image
                src={'/portfolios/hit.svg'}
                width={24}
                height={24}
                alt="조회수"
              />
            </div>
            <div className="mr-2">{e.hit}</div>
          </div>
          <div className="flex">
            <div className="mr-1">
              <Image
                src={'/portfolios/like.svg'}
                width={24}
                height={24}
                alt="좋아요"
              />
            </div>
            <div>{e.like}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfoliosList;
