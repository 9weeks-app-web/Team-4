import RoundButton from "@/app/mypage/(components)/button/RoundButton"
import ShowMoreButton from "../button/ShowMoreButton"
import RecruitCard from "@/app/main/(components)/card/RecruitCard"

const PopularRecruitSection = () => {
    return (
        <div className="bg-background-5 w-full py-[112px]">
            <div className="w-[1202px] mx-auto">
                <div className="text-[26px] font-bold mb-4">직무 별 인기 채용 정보를 준비했어요</div>
                <div className="relative">
                    <div className="flex space-x-2 mb-6">
                        <RoundButton color="blue" content="전체" />
                        <RoundButton color="gray" content="UXUI 디자인" />
                        <RoundButton color="gray" content="서비스 기획" />
                        <RoundButton color="gray" content="편집 디자인" />
                        <RoundButton color="gray" content="웹 디자인" />
                        <div className="absolute right-0 text-[18px] text-neutral-50">
                            <ShowMoreButton content="채용 정보 더보기" />
                        </div>
                    </div>
                </div>
                <div className="flex space-x-[30px]">
                    <RecruitCard />
                    <RecruitCard />
                    <RecruitCard />
                    <RecruitCard />
                </div>
            </div>
        </div>
    )
}

export default PopularRecruitSection