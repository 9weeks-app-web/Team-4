import PortfolioCard from '@/app/mypage/(components)/card/common/PortfolioCard';
import PaginationButton from '@/app/mypage/(components)/button/PaginationButton';
import BasicButton from '@/app/mypage/(components)/button/BasicButton';

const LikeSection = () => {
  return (
    <>
      <div className="flex justify-end space-x-4 pt-[24px] pb-[48px]">
        <BasicButton color="gray" content="추가" />
        <BasicButton color="gray" content="편집" />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
      <div className="pt-[80px]">
        <PaginationButton />
      </div>
    </>
  );
};

export default LikeSection;
