import BasicButton from "../(components)/button/BasicButton"
import RecruitCard from "./(components)/card/RecruitCard"
import PaginationButton from "@/app/mypage/(components)/button/PaginationButton"
import LargeHead from "../(components)/head/LargeHead"
import SelectBoxButton from "../(components)/button/SelectBoxButton"

const InterestRecruitPage = () => {
    return (
        <div className="max-w-[1152px]">
            <LargeHead content="관심 채용정보" />
            <div className="text-[14px] text-neutral-60 pt-[20px]">관심 채용정보를 저장하고, 채용 현황을 확인해보세요.</div>
            <div className="flex justify-end space-x-4 pt-[24px] pb-[48px]">
                <SelectBoxButton options={['최신순', '오래된순', '인기순']} />
                <BasicButton content="편집" />
            </div>
            <div className="grid grid-cols-3 gap-6">
                <RecruitCard />
                <RecruitCard />
                <RecruitCard />
                <RecruitCard />
                <RecruitCard />
                <RecruitCard />
                <RecruitCard />
                <RecruitCard />
                <RecruitCard />
            </div>
            <div className="pt-[80px]">
                <PaginationButton />
            </div>
        </div>
    )
}

export default InterestRecruitPage