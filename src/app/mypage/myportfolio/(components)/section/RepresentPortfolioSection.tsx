import BasicButton from "../../../(components)/button/BasicButton";
import PortfolioCard from "@/app/mypage/(components)/card/common/PortfolioCard"
import MediumHead from "@/app/mypage/(components)/head/MediumHead";

const RepresentPortfolioSection = () => {
  return (
    <>
      <div className="mb-8">
        <MediumHead title="대표 포트폴리오" content="대표 포트폴리오 3개를 설정해 프로필에 표시할 수 있어요." />
        <div className="text-end space-x-4">
          <BasicButton color="gray" content="편집" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </>
  )
}

export default RepresentPortfolioSection;