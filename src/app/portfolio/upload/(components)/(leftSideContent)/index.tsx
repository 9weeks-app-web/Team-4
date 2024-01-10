'use client';

import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

const PortfoliosLeftComponentContainer = ({
  bookmarks,
  pictures,
  setPreviewState,
}: {
  bookmarks: string[];
  pictures: string[];
  setPreviewState: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-[380px] h-[980px] bg-neutral-0  flex relative flex-col">
      <div className="w-full h-full overflow-y-auto overflow-hidden px-[30px] pt-[25px]">
        <div className="text-[16px] font-[500] mb-[20px] border-neutral-10">
          전체상황(프리뷰)
        </div>
        <div className="flex pb-[29px] border-b border-neutral-10 mb-[32px]">
          {bookmarks.map((e, i) => (
            <button
              key={i}
              className=" mr-[8px] border border-neutral-10 rounded-full px-[20px] py-[12px] min-w-fit h-[38px] flex justify-center items-center"
            >
              {e}
            </button>
          ))}
        </div>
        <div className="w-full h-full overflow-hidden ">
          <div>
            <div className="mt-[12px]">유저 리서치</div>
            <Image
              src="/portfolios/1.png"
              alt="스크린샷"
              width="320"
              height="180"
              className="pb-[12px] pt-[12px]"
            />
          </div>
          <div>
            <div className="mt-[12px]">퍼소나</div>
            <Image
              src="/portfolios/2.png"
              alt="스크린샷"
              width="320"
              height="180"
              className="pb-[12px] pt-[12px]"
            />
          </div>
          <div>
            <Image
              src="/portfolios/3.png"
              alt="스크린샷"
              width="320"
              height="180"
              className="pb-[12px] pt-[12px]"
            />
          </div>

          <div>
            <div className="mt-[12px]">저니맵</div>
            <Image
              src="/portfolios/4.png"
              alt="스크린샷"
              width="320"
              height="180"
              className="pb-[12px] pt-[12px]"
            />
          </div>
        </div>
        <div className="absolute -right-7 top-[45%]">
          <button
            onClick={() => setPreviewState(false)}
            className="rounded-r-xl bg-neutral-0 w-[28px] h-[72px] pr-[4px] flex justify-center items-center"
          >
            <Image
              src="/portfolios/left_arrow.svg"
              alt="닫기"
              width={10}
              height={7}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfoliosLeftComponentContainer;
