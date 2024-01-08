import eyeImg from "/public/images/eye.png"
import chatBubbleImg from "/public/images/chat.png"
import likeImg from "/public/images/like.png"
import Image from 'next/image'

const PostCard = () => {
    return (
        <div className="h-[175px] min-w-[1128px] bg-neutral-0 rounded-[8px] border-[1px] border-neutral-10 px-[28px] py-[18px]">
            <div className="flex-col">
                <div className="flex items-center gap-x-[14px]">
                    <div className="h-[28px] w-[28px] bg-neutral-10 rounded-full"></div>
                    <div className="font-medium text-[18px]">Jason Raish</div>
                    <div className="text-neutral-40 text-[14px]">12/14 02:43</div>
                    <div className="ml-auto">
                        <button className="text-neutral-50 text-[14px]">삭제</button>
                    </div>
                </div>
                <div className="pt-[18px] py-[10px]">
                    <div className="font-bold text-[18px]">아미코젠 지원하신분 계신가요?</div>
                    <div className="w-[95%] text-[14px] truncate break-all pt-[5px]">서류 합격후에 통합역검 응시했는데 10일넘게 결과가 안나오네용.. 서류결과는 일주일내에 주던데 인적성은 좀 오래걸리네요..? 원래 오래 걸리는건지 제가 떨어지고 아직 연락 못받은건지..내일 한번 문의해볼까싶네요</div>
                    <div className="flex gap-x-[10px] pt-[17px]">
                        <div className="flex items-center h-[26px] px-[10px] text-[12px] text-neutral-60 bg-neutral-5 rounded-[6px]">#취업고민</div>
                        <div className="flex items-center h-[26px] px-[10px] text-[12px] text-neutral-60 bg-neutral-5 rounded-[6px]">#면접</div>
                        <div className="ml-auto flex items-center justify-between space-x-[20px]">
                            <div className="flex items-center space-x-[5px]">
                                <Image src={likeImg} className="h-[24px] w-[24px]" />
                                <div className="text-[14px] text-neutral-40">14</div>
                            </div>
                            <div className="flex items-center space-x-[5px]">
                                <Image src={chatBubbleImg} className="h-[24px] w-[24px]" />
                                <div className="text-[14px] text-neutral-40">12</div>
                            </div>
                            <div className="flex items-center space-x-[5px]">
                                <Image src={eyeImg} className="h-[24px] w-[24px]" />
                                <div className="text-[14px] text-neutral-40">812</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default PostCard