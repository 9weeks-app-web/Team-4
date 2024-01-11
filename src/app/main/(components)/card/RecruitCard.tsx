import clock from "/public/images/mypage/clock_icon.png"
import activeBookmark from "/public/images/mypage/active_bookmark.png"
import Image from 'next/image'

const RecruitCard = () => {
    return (
        <div className="h-[133px] w-[278px] bg-neutral-0 rounded-[12px] border-[2px] border-neutral-10 hover:border-primary-100 px-[24px] py-[20px]">
            <div className="flex items-center">
                <div className="flex items-center bg-neutral-5 rounded-[6px] px-[6px] py-[7px]">
                    <div className="h-[13.33px] w-[13.33px] mr-[6px]">
                        <Image src={clock} />
                    </div>
                    <div className="text-[12px] text-neutral-50 font-semibold">채용시 마감</div>
                </div>
                <div className="h-[18px] w-[16px] ml-auto">
                    <Image src={activeBookmark} />
                </div>
            </div>
            <div className="flex-col mt-[16px]">
                <div className="text-[16px] font-bold mb-[6px]">UI/UX 디자이너 채용</div>
                <div className="text-[14px] text-neutral-50" >(주)그레이비랩</div>
            </div>
        </div >
    )
}

export default RecruitCard