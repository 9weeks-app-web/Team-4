
import Image from "next/image"
import ShowMoreButton from "../button/ShowMoreButton"
const CommunityCard = () => {
    return (
        <div className="h-[404px] w-[585px] border-[1px] border-[#E6E6E6] rounded-[16px] bg-neutral-0 px-[32px] py-[20px]">
            <div className="flex items-center">
                <div className="text-[16px] text-neutral-40 font-bold">이번 주 추천 글 🔥</div>
                <div className="ml-auto text-neutral-50">
                    <ShowMoreButton content="더보기" />
                </div>
            </div>
            <div>
                <div className="flex py-[20px] w-full border-b-[1px] border-[#E6E6E6]">
                    <div className="">진짜 문제 정의란 무엇일까?</div>
                    <div className="flex gap-x-[6px] ml-auto text-neutral-40">
                        <Image src="/images/community/eye.png" width={24} height={24} />
                        812
                    </div>
                </div>
                <div className="flex py-[20px] w-full border-b-[1px] border-[#E6E6E6]">
                    <div className="">안녕하세요! 블루타이거 동반할인 하실 분 구합니다.</div>
                    <div className="flex gap-x-[6px] ml-auto text-neutral-40">
                        <Image src="/images/community/eye.png" width={24} height={24} />
                        812
                    </div>
                </div>
                <div className="flex py-[20px] w-full border-b-[1px] border-[#E6E6E6]">
                    <div className="">스나이퍼팩토리 인턴형 프로그램 해보신 분?</div>
                    <div className="flex gap-x-[6px] ml-auto text-neutral-40">
                        <Image src="/images/community/eye.png" width={24} height={24} />
                        812
                    </div>
                </div>
                <div className="flex py-[20px] w-full border-b-[1px] border-[#E6E6E6]">
                    <div className="">프리랜서 디자이너 프로젝트 수정 횟수</div>
                    <div className="flex gap-x-[6px] ml-auto text-neutral-40">
                        <Image src="/images/community/eye.png" width={24} height={24} />
                        812
                    </div>
                </div>
                <div className="flex py-[20px] w-full">
                    <div className="">서울 지하철 노선도 디자인 변경</div>
                    <div className="flex gap-x-[6px] ml-auto text-neutral-40">
                        <Image src="/images/community/eye.png" width={24} height={24} />
                        812
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CommunityCard