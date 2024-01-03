import PortfolioBanner from './(components)/(Banner)';
import PortfolioListContainer from './(components)/(List)';

const PortfolioPage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      {/* 관심분야 배너 */}
      <div>
        <PortfolioBanner />
      </div>
      {/* 다양한 직군의 포트폴리오 만나보기 */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1202px]">
          <PortfolioListContainer />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
