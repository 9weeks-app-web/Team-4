import PortfolioBanner from './(components)/(Banner)';
import PortfolioListContainer from './(components)/(List)';

const PortfolioPage = () => {
  return (
    <div>
      {/* 관심분야 배너 */}
      <div>
        <PortfolioBanner />
      </div>
      {/* 다양한 직군의 포트폴리오 만나보기 */}
      <div>
        <PortfolioListContainer />
      </div>
    </div>
  );
};

export default PortfolioPage;
