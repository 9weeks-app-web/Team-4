import BasicButton from "@/app/mypage/(components)/button/BasicButton"
import polygonIcon from "/public/images/mypage/polygon_icon.png"
import Image from "next/image"

const GatheringCard = () => {
    return (
        <>
            <div className="min-w-[1128px] bg-neutral-0 rounded-[8px] border-[1px] border-neutral-10 px-[24px] py-[24px]">
                <div className="flex">
                    <div className="flex flex-col gap-y-[14px]">
                        <div className="flex gap-x-[12px]">
                            <button className='px-[10px] rounded-[6px] border-[1px] border-neutral-10 text-[14px] font-medium'>프로젝트</button>
                            <button className='px-[10px] rounded-[6px] bg-primary-10 text-[14px] text-primary-80 font-medium'>마감 미설정</button>
                        </div>
                        <div className="font-semibold text-[22px]">
                            제목을 입력해주세요.
                        </div>
                    </div>
                    <div className="ml-auto my-auto">
                        <BasicButton color="blue" content="모집 하러가기" />
                    </div>
                </div>
            </div>
            <div className="min-w-[1128px] bg-neutral-0 rounded-[8px] border-[1px] border-neutral-10 px-[24px] py-[24px]">
                <div className="flex">
                    <div className="flex flex-col gap-y-[14px]">
                        <div className="flex gap-x-[12px]">
                            <button className='px-[10px] rounded-[6px] border-[1px] border-neutral-10 text-[14px] font-medium'>프로젝트</button>
                            <button className='px-[10px] rounded-[6px] bg-primary-10 text-[14px] text-primary-80 font-medium'>마감-7</button>
                        </div>
                        <div className="flex gap-x-[12px] items-center">
                            <div className="w-[334px] truncate break-all font-semibold text-[22px]">
                                사이드 프로젝트 'GOTCHA'에서 함께 하실 디자이너를 모집합니다!
                            </div>
                            <div className="text-neutral-40 flex gap-x-[5px] ">
                                모집인원
                                <span className="text-primary-100">4</span>/<span>5</span>
                                <span>UXUI</span>
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto my-auto">
                        <div>
                            <BasicButton color="gray" content="모집 마감" />
                        </div>
                        <div className="flex items-center justify-end pt-[11px] gap-x-[5px]">
                            <div className="text-neutral-40 text-[14px]">팀원 선택</div>
                            <Image src={polygonIcon} className="h-[14px] w-[10px]" />
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default GatheringCard