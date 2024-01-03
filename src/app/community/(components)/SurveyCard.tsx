const SurveyCard = () => {
  return (
    <div className="my-10 ">
      <div className="flex mb-5">
        <div className="flex mr-[10px] w-12 h-12  bg-neutral-20 rounded-full"></div>
        <div>
          <div className="flex items-center mb-0.5">
            <div className="mr-[6px] text-xl text-neutral-80">하으니</div>
            <div className="w-[22px] h-[22px] bg-primary-80 rounded-full"></div>
          </div>
          <div className="flex text-neutral-40">
            <div>UX/UI디자이너</div>
            <div>・약 2시간 전</div>
          </div>
        </div>
      </div>

      <div className="border border-neutral-10 rounded-2xl p-8 text-sm">
        <div className="mb-3 font-bold bg-primary-100 text-neutral-0 p-2 inline-block rounded-lg">
          마감 D-3
        </div>
        <div className="mb-3 font-bold text-[22px]">설문조사</div>
        <div className="mb-5 line-clamp-3 text-lg">
          UXUI 관련 설문조사입니다.
        </div>
        <div className="flex justify-between ">
          <div className="flex items-end">
            <p className="mr-[6px] text-neutral-50">소요시간</p>
            <p className="mr-4 font-bold">약 5분</p>
            <p className="mr-[6px] text-neutral-50">설문 대상</p>
            <p className="mr-4 font-bold">누구나</p>
            <p className="mr-[6px] text-neutral-40">종료날짜</p>
            <p className=" font-bold">2023.12.30(토)</p>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-between w-full">
              <div className="flex justify-center items-center text-base  h-[44px] w-[133px] bg-primary-100 text-neutral-0 p-2 rounded-lg">
                설문조사 참여
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyCard;
