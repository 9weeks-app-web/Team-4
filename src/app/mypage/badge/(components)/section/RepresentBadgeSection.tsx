import MediumHead from "@/app/mypage/(components)/head/MediumHead"
import BadgeCard from "../card/BadgeCard"
import BasicButton from "@/app/mypage/(components)/button/BasicButton"
const RepresentBadgeSection = () => {
    return (
        <>
            <MediumHead title="대표 뱃지" content="프로필에 표시될 대표뱃지를 선택해보세요." />
            <div className="text-end space-x-4 pb-[48px]">
                <BasicButton color="gray" content="편집" />
            </div>
            <div className="grid grid-cols-5 gap-6">
                <BadgeCard />
                <BadgeCard />
                <BadgeCard />
                <BadgeCard />
                <BadgeCard />
            </div>
        </>
    )
}

export default RepresentBadgeSection