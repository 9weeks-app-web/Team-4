const PortfolioBanner = () => {
  return (
    <div className="bg-neutral-5 w-full h-60">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <div className="mb-6 font-bold">
          <div>만족도 높은 포트폴리오 추천을 위해</div>
          <div>자신의 관심분야를 설정해보세요.</div>
        </div>
        <div className="mt-2 bg-neutral-80">
          <button className="text-neutral-0 pt-3 pb-3 pl-6 pr-6">
            관심분야 설정하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
