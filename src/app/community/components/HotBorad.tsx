import Link from 'next/link';

const HotBoard = () => {
  return (
    <Link href="/community/category/1">
      <div className="flex p-4 mb-2">
        <div className="flex justify-center items-center border w-[33px] h-[33px] mr-[12px] p-4 rounded-lg">
          1
        </div>
        <div>
          <div className="mb-2 py-[6px] px-[10px] bg-neutral-5 inline-block rounded-md">
            자유주제
          </div>
          <div className="mb-2 text-lg font-bold">title</div>
          <div className="mb-2 text-sm"> content </div>
          <div className="">조회 812・댓글 12・추천해요 14</div>
        </div>
      </div>
    </Link>
  );
};

export default HotBoard;
