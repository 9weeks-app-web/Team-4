import CategoryButton from "../button/CategoryButton"
import ShowMoreButton from "../button/ShowMoreButton"
import GatheringCard from "../card/GatheringCard"
import ArrowLeftButton from "../button/ArrowLeftButton"
import ArrowRightButton from "../button/ArrowRightButton"


const GatheringSection = () => {
    return (
        <div className="bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-lg font-semibold mb-4">모임을 통해 함께 성장해요</h2>
                <div className="flex space-x-2 mb-6">
                    <CategoryButton content="프로젝트" />
                    <CategoryButton content="스터디" />
                    <div className="">
                        <ShowMoreButton content="모임 더보기" />
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="m-5">
                        <ArrowLeftButton />
                    </span>
                    <div className="flex justify-center space-x-4 pb-4 mx-auto">
                        <GatheringCard />
                        <GatheringCard />
                    </div>
                    <span className="p-[50px]">
                        <ArrowRightButton />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default GatheringSection