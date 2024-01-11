import CategoryButton from "../button/CategoryButton"
import CommunityCard from "../card/CommunityCard"
import RoundButton from "@/app/mypage/(components)/button/RoundButton"

const CommunitySection = () => {
    return (
        <div className="bg-background-5 w-full h-[804px]">
            <div className="flex flex-col max-w-6xl mx-auto mt-[100px]">
                <div className="text-[26px] font-bold mb-[24px]">커뮤니티에서 다양한 사람들과 소통해 볼까요?</div>
                <div className="relative">
                    <div className="flex space-x-2 mb-6">
                        <RoundButton color="blue" content="자유글" />
                        <RoundButton color="gray" content="설문조사" />
                        <RoundButton color="gray" content="QnA" />
                        <RoundButton color="gray" content="직무별 게시판" />
                        <RoundButton color="gray" content="직무별 채팅방" />
                    </div>
                </div>
                <div className="flex justify-center space-x-[30px] pb-4 mx-auto">
                    <CommunityCard />
                    <CommunityCard />
                </div>
            </div>
        </div>
    )
}

export default CommunitySection