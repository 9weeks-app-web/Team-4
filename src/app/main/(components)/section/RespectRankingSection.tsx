
import CategoryButton from "../button/CategoryButton"

const RespectRankingSection = () => {
    return (
        <div className="bg-primary-10 p-20 w-[100%]">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">리스팩 랭킹을 소개해드려요</h1>
            </div>
            <div className="flex gap-4 mb-6 items-center">
                <CategoryButton content="포트폴리오 피드백" />
                <CategoryButton content="포트폴리오 업로드" />
                <CategoryButton content="모임 참여" />
                <span className="text-sm">2023.12.29 (금) 기준</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-0 p-6 shadow rounded-lg border-2 border-primary-60 h-[300px]">
                    <div>
                        랭킹 상세
                    </div>
                </div>
                <div className="bg-neutral-0 p-6 shadow rounded-lg h-[300px]">
                    <div>
                        랭킹 표
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RespectRankingSection