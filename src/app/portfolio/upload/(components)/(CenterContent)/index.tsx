'use client';

import Image from 'next/image';
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

const PortfoliosCenterComponentContainer = ({
  bookmarks,
  pictures,
  setPreviewState,
  previewState,
  elementRef,
}: {
  previewState: boolean;
  bookmarks: string[];
  pictures: string[];
  setPreviewState: Dispatch<SetStateAction<boolean>>;
  elementRef: RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      className={`${
        previewState ? `w-[1126px] ml-[60px]` : `w-[1420px] ml-[30px]`
      } flex flex-col`}
    >
      <div className="flex pt-[24px] text-[18px] font-[500]">
        <button className="h-[52px] -tracking-[.108px] rounded-full w-fit border border-neutral-10 bg-neutral-0 px-[20px] py-[12px] mr-[8px]">
          포트폴리오 업로드
        </button>
        <button className="h-[52px] rounded-full w-fit border border-neutral-10 bg-neutral-0 px-[20px] py-[12px] mr-[8px]">
          직군 설정
        </button>
        <button className="h-[52px] rounded-full w-fit border border-neutral-10 bg-neutral-0 px-[20px] py-[12px] mr-[8px]">
          포트폴리오 내용
        </button>
        <button className="h-[52px] rounded-full w-fit border border-neutral-10 bg-neutral-0 px-[20px] py-[12px] mr-[8px]">
          포트폴리오 썸네일
        </button>
      </div>
      <div
        className={`${
          previewState ? `h-[883px] ` : `h-[848px] mb-[36px]`
        } w-full mt-auto  bg-neutral-0 overflow-y-auto flex flex-col items-center text-[16px] font-[700] -tracking-[.096px]`}
        ref={elementRef}
      >
        <div>
          <div className="mt-[12px]" id="유저 리서치">
            유저 리서치
          </div>
          <Image
            src="/portfolios/1.png"
            alt="스크린샷"
            width="984"
            height="552"
            className="pb-[12px] pt-[12px]"
          />
        </div>
        <div>
          <div className="mt-[12px]" id="퍼소나">
            퍼소나
          </div>
          <Image
            src="/portfolios/2.png"
            alt="스크린샷"
            width="984"
            height="552"
            className="pb-[12px] pt-[12px]"
          />
        </div>
        <div>
          <Image
            src="/portfolios/3.png"
            alt="스크린샷"
            width="984"
            height="552"
            className="pb-[12px] pt-[12px]"
          />
        </div>

        <div>
          <div className="mt-[12px]" id="저니맵">
            저니맵
          </div>
          <Image
            src="/portfolios/4.png"
            alt="스크린샷"
            width="984"
            height="552"
            className="pb-[12px] pt-[12px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfoliosCenterComponentContainer;
