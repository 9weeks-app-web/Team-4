import MediumHead from "@/app/mypage/(components)/head/MediumHead"
import BadgeCard from "../card/BadgeCard"
import SelectBoxButton from "@/app/mypage/(components)/button/SelectBoxButton"
import PaginationButton from "@/app/mypage/(components)/button/PaginationButton"

const BadgeListSection = () => {
    return (
        <div className="pt-[94px]">
            <MediumHead title="뱃지 목록" content="스팩폴리오 활동을 통해 뱃지를 모아보세요." />
            <div className="flex justify-end space-x-4 py-[24px]">
                <SelectBoxButton options={['전체', '오래된순', '인기순']} />
            </div>
            <div className="">
                <MediumHead title="첫 걸음" content="" />
                <div className="grid grid-cols-5 gap-6 pt-[38px] pb-[108px]">
                    <BadgeCard />
                    <BadgeCard />
                    <BadgeCard />
                    <BadgeCard />
                    <BadgeCard />
                </div>
            </div>
            <div className="">
                <MediumHead title="커뮤니티 활동" content="" />
                <div className="grid grid-cols-5 gap-6 pt-[38px] pb-[108px]">
                    <BadgeCard />
                    <BadgeCard />
                    <BadgeCard />
                    <BadgeCard />
                    <BadgeCard />
                </div>
            </div>
            <div className="">
                <MediumHead title="프로젝트 활동" content="" />
                <div className="grid grid-cols-5 gap-6 pt-[38px]">
                    <BadgeCard />
                    <BadgeCard />
                    <BadgeCard />
                    <BadgeCard />
                    <BadgeCard />
                    <BadgeCard />
                    <BadgeCard />
                    <BadgeCard />
                    <BadgeCard />
                    <BadgeCard />
                </div>
            </div>
            <div className="pt-[80px]">
                <PaginationButton />
            </div>
        </div>
    )
}

export default BadgeListSection