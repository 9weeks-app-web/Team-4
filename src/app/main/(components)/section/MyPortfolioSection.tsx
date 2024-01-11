import Image from "next/image"
import ButtonBasic from "@/app/gathering/(components)/button/ButtonBasic"
import ShowMoreButton from "../button/ShowMoreButton"

const MyPortfolioSection = () => {
    return (
        <div className="w-[1200px] h-[680px] mt-[121px]">
            <div className="mx-auto">
                <div className="text-[26px] font-bold mb-[48px]">김스팩님의 포트폴리오 여정</div>
                <div className="flex overflow-x-auto space-x-[30px] pb-4">
                    <div className="flex flex-col py-[47px] px-[53px] h-[396px] w-[394px] border-[1px] border-neutral-10 rounded-[16px] bg-[#F8F8F9]">
                        <Image src="/images/main/hot.png" width={200} height={116} className="mx-auto mb-[24px]" />
                        <div className="text-[18px] font-bold mx-auto mb-[11px]">작성중인 작업이 없어요</div>
                        <div className="flex flex-col text-[12px] text-neutral-40 mb-[35px]">
                            <div className="mx-auto">
                                작업을 업로드하고
                            </div>
                            <div className="mx-auto">
                                핫 크리에이터가 되어 보세요!
                            </div>
                        </div>
                        <ButtonBasic content="포트폴리오 올리기" />
                    </div>
                    <div className="h-[396px] w-[776px] py-[32px] px-[30px] border-[1px] border-neutral-10 rounded-[16px] bg-[#F8F8F9]">
                        <div className="text-[18px] text-neutral-50 flex items-center mb-[20px]">
                            <div>내 포트폴리오의 피드백을 확인해 볼까요? 🔥</div>
                            <div className="ml-auto"><ShowMoreButton content="" /></div>
                        </div>
                        <div className="flex space-x-[24px]">
                            <Image src="/images/main/rectangle2.png" width={346} height={270} className="" />
                            <Image src="/images/main/rectangle1.png" width={346} height={270} className="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPortfolioSection