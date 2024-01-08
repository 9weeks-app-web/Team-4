'use client';
const PortfoliosRightComponentContainer = () => {
  return (
    <div className="w-[264px] ml-[30px] mr-[60px] h-full pt-[97px] text-[16px] font-[500]">
      <div className="h-[229px]">
        <div className="h-[21px]">콘텐츠 추가</div>
        <div
          className={`border w-full border-neutral-10 rounded-xl bg-neutral-0 h-[200px] mt-[8px] flex-col flex`}
        >
          <div className={`flex w-full h-[100px]`}>
            <div className="flex-1 w-full flex justify-center items-center h-full p-[16px]">
              이미지
            </div>
            <div className="flex-1 w-full flex justify-center items-center h-full p-[16px]">
              텍스트
            </div>
          </div>
          <div className={`flex w-full h-[100px]`}>
            <div className="flex-1 w-full flex justify-center items-center h-full p-[16px]">
              동영상
            </div>
            <div className="flex-1 w-full flex justify-center items-center h-full p-[16px]">
              임베드
            </div>
          </div>
        </div>
      </div>
      <div className="px-[16px] mt-[12px] w-full h-[250px] border border-neutral-10 rounded-xl bg-neutral-0 mb-[24px]">
        <div>
          <div>콘텐츠 간격</div>
        </div>
        <div>
          <div>배경색 변경</div>
        </div>
      </div>

      <div className="mb-[8px]">편집</div>
      <div className="h-[100px] w-full flex border border-neutral-10 rounded-xl bg-neutral-0">
        <div className="flex-1 w-full flex justify-center items-center h-full p-[16px] border-r border-neutral-10">
          북마크
        </div>
        <div className="flex-1 w-full flex justify-center items-center h-full p-[16px]">
          이미지편집
        </div>
      </div>
      <div className="flex flex-col w-full">
        <button>업로드</button>
        <button>임시저장</button>
        <button>미리보기</button>
      </div>
    </div>
  );
};

export default PortfoliosRightComponentContainer;
