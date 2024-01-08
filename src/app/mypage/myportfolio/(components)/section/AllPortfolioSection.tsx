import PortfolioCard from "@/app/mypage/(components)/card/common/PortfolioCard"
import BasicButton from "../../../(components)/button/BasicButton"
import PaginationButton from "@/app/mypage/(components)/button/PaginationButton"
import MediumHead from "@/app/mypage/(components)/head/MediumHead"
import SelectBoxButton from "@/app/mypage/(components)/button/SelectBoxButton"

const AllPortfolioSection = () => {
    return (
        <>
            <div className="pt-[110px] mb-8">
                <MediumHead title="모든 포트폴리오" content="" />
                <div className="flex justify-end space-x-4">
                    <SelectBoxButton options={['최신순', '오래된순', '인기순']} />
                    <BasicButton color="gray" content="공개 여부 설정" />
                </div>
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
    )
}

export default AllPortfolioSection