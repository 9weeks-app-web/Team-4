'use client';

import Image from 'next/image';

const PortfoliosRightComponentContainer = ({}: {}) => {
  return (
    <div className="w-[264px] ml-[30px] mr-[60px] h-full pt-[97px] text-[16px] font-[500]">
      <div className="h-[229px]">
        <div className="h-[21px]">콘텐츠 추가</div>
        <div
          className={`border w-full border-neutral-10 rounded-xl bg-neutral-0 h-[200px] mt-[8px] flex-col flex`}
        >
          <div className={`flex w-full h-[100px]`}>
            <div className="flex-1 w-full flex justify-center items-center border-r border-neutral-10 h-full p-[16px]">
              <button className="flex flex-col items-center justify-center">
                <Image
                  src={'/portfolios/image.svg'}
                  alt="이미지 업로드"
                  width={24}
                  height={24}
                />
                <div className="mt-[8px]">이미지</div>
              </button>
            </div>
            <div className="flex-1 w-full border-b border-neutral-10 flex justify-center items-center h-full p-[16px]">
              <button className="flex flex-col items-center justify-center">
                <Image
                  src={'/portfolios/text.svg'}
                  alt="텍스트 업로드"
                  width={24}
                  height={24}
                />
                <div className="mt-[8px]">텍스트</div>
              </button>
            </div>
          </div>
          <div className={`flex w-full h-[100px]`}>
            <div className="flex-1 w-full flex border-r border-t border-neutral-10 justify-center items-center h-full p-[16px]">
              <button className="flex flex-col items-center justify-center">
                <Image
                  src={'/portfolios/movie.svg'}
                  alt="텍스트 업로드"
                  width={24}
                  height={24}
                />
                <div className="mt-[8px]">동영상</div>
              </button>
            </div>
            <div className="flex-1 w-full flex justify-center items-center h-full p-[16px]">
              <button className="flex flex-col items-center justify-center">
                <Image
                  src={'/portfolios/embed.svg'}
                  alt="임베드 업로드"
                  width={24}
                  height={24}
                />
                <div className="mt-[8px]">임베드</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-[12px] w-full h-[250px] border border-neutral-10 rounded-xl bg-neutral-0 mb-[24px]">
        <div className="h-[144px] w-full border-b p-[16px] border-stroke-10">
          <div className="mb-[16px]">콘텐츠 간격</div>
          <input
            type="range"
            className="w-full h-1 bg-gray-200 rounded-xl cursor-pointer accent-neutral-100"
          ></input>
          <input className="w-full h-[32px]" value={'0px'} readOnly></input>
        </div>
        <div className="p-[16px] ">
          <div className="mb-[16px]">배경색 변경</div>
          <button className="w-full h-[32px] border border-stroke-10 flex">
            <div className="bg-neutral-0 border-r w-[48px] h-full border-stroke-10"></div>
            <div className="h-full flex items-center px-[8px]">#FFFFFF</div>
          </button>
        </div>
      </div>

      <div className="mb-[8px]">편집</div>
      <div className="h-[100px] w-full flex border border-neutral-10 rounded-xl bg-neutral-0">
        <button className="flex-1 w-full flex flex-col justify-center items-center h-full p-[16px] border-r border-neutral-10">
          <Image
            className="mb-[8px]"
            src={'/portfolios/bookmark_upload.svg'}
            width={24}
            height={24}
            alt="북마크 이미지"
          />
          북마크
        </button>
        <button className="flex-1 w-full flex flex-col justify-center items-center h-full p-[16px]">
          <Image
            className="mb-[8px]"
            src={'/portfolios/image_edit.svg'}
            width={24}
            height={24}
            alt="북마크 이미지"
          />
          이미지편집
        </button>
      </div>
      <div className="flex flex-col w-full">
        <button className="bg-primary-80 text-neutral-0 text-[18px] font-[700] w-full h-[52px] rounded-xl mt-[28px] mb-[16px]">
          업로드
        </button>
        <button className="bg-neutral-10 text-neutral-30 text-[18px] font-[700] w-full h-[52px] rounded-xl">
          임시저장
        </button>
        <button className="flex p-[10px] mt-[18px] w-full justify-center">
          <Image
            src="/portfolios/preview_upload.svg"
            alt="미리보기"
            width={24}
            height={24}
          />
          미리보기
        </button>
      </div>
    </div>
  );
};

export default PortfoliosRightComponentContainer;
