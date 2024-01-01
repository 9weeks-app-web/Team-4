import CategoryButton from "../button/CategoryButton"
import CommunityCard from "../card/CommunityCard"

const CommunitySection = () => {
    return (
        <div className="bg-background-5 p-8 w-[100%]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-lg font-semibold mb-4">커뮤니티에서 다양한 사람들과 소통해 볼까요?</h2>
                <div className="flex space-x-2 mb-6">
                    <CategoryButton content="자유글" />
                    <CategoryButton content="설문조사" />
                    <CategoryButton content="QnA" />
                    <CategoryButton content="직무별 게시판" />
                    <CategoryButton content="직무별 채팅방" />
                </div>
                <div className="flex justify-center space-x-4 pb-4 mx-auto">
                    <CommunityCard />
                    <CommunityCard />
                </div>
            </div>
        </div>
    )
}

export default CommunitySection