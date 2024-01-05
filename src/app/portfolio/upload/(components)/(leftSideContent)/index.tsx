'use client';
const PortfoliosLeftComponentContainer = ({
  bookmarks,
  pictures,
}: {
  bookmarks: string[];
  pictures: string[];
}) => {
  return (
    <div className="w-[380px] h-[979px] bg-neutral-0 px-[30px] pt-[25px] flex flex-col">
      <div className="text-[16px] font-[500] mb-[20px] border-neutral-10">전체상황(프리뷰)</div>
      <div></div>
    </div>
  );
};

export default PortfoliosLeftComponentContainer;
