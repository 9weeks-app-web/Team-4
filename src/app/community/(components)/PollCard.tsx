const PollCard = () => {
  return (
    <div className="border border-neutral-10 rounded-2xl p-5 my-10 text-sm">
      <div className="mb-3 font-bold bg-primary-10 text-primary-80 p-2 inline-block rounded-lg">
        마감 D-3
      </div>
      <div className="mb-2 font-bold text-lg">설문조사</div>
      <div className="mb-[14px] line-clamp-2">UXUI 관련 설문조사입니다.</div>
      <div className="flex mb-5">
        <p className="mr-[6px] text-neutral-50">소요시간</p>
        <p className="mr-4 font-bold">약 5분</p>
        <p className="mr-[6px] text-neutral-50">설문 대상</p>
        <p className="mr-4 font-bold">누구나</p>
        <p className="mr-[6px] text-neutral-40">종료날짜</p>
        <p className=" font-bold">2023.12.30(토)</p>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <div className="mr-[6px] w-[24px] h-[24px] rounded-full bg-neutral-20"></div>
            <div className=" text-neutral-60">닉네임</div>
          </div>
          <div className="flex justify-center items-center text-base px-4 py-[10px] h-[44px] w-[133px] bg-primary-100 text-neutral-0 p-2 rounded-lg">
            설문조사 참여
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollCard;
