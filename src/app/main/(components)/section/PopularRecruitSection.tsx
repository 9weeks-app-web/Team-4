import CategoryButton from "../button/CategoryButton"
import ShowMoreButton from "../button/ShowMoreButton"
import RecruitCard from "../card/RecruitCard"

const PopularRecruitSection = () => {
    return (
        <div className="bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-lg font-semibold mb-4">인기있는 포트폴리오를 만나보세요</h2>
                <div className="flex space-x-2 mb-6">
                    <CategoryButton content="전체" />
                    <CategoryButton content="UI/UX 디자인" />
                    <CategoryButton content="서비스 기획" />
                    <CategoryButton content="편집 디자인" />
                    <CategoryButton content="웹 디자인" />
                    <div className="">
                        <ShowMoreButton content="채용 정보 더보기" />
                    </div>
                </div>
                <div className="flex overflow-x-auto space-x-4 pb-4">
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