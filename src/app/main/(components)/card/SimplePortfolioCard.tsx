import Image from "next/image"
import { DetailPortfolio } from '@/types/main';

const SimplePortfolioCard = (data: DetailPortfolio) => {
    return (
        <div className="h-[360px] w-[278px]">
            <div className="rounded-xl border-[1px] border-neutral-10 overflow-x-auto overflow-y-hidden">
                <Image src={data.image} height={208} width={278} />
            </div>
            <div className="flex flex-col pt-[24px] space-y-[15px] pr-0 justify-between">
                <div className='flex-col space-y-[8px]'>
                    <button className='py-[5px] px-[8px] rounded-[6px] bg-neutral-10 text-[12px] text-neutral-60 font-semibold'>{data.category}</button>
                    <div className='text-[18px] font-semibold text-neutral-90 truncate break-all'>{data.title}</div>
                </div>
                <div className='flex pt-[4px] '>
                    <div className="flex space-x-[5px]">
                        <Image src="/images/mypage/profile_icon.png" width={24} height={24} />
                        <div>{data.name}</div>
                    </div>
                    <div className="ml-auto flex items-center justify-between space-x-[8px]">
                        <div className="flex items-center space-x-[2px]">
                            <Image src="/images/community/eye.png" height={24} width={24} />
                            <div className="text-[14px] text-neutral-40">{data.view}</div>
                        </div>
                        <div className="flex items-center space-x-[2px]">
                            <Image src="/images/gathering/heart.svg" height={24} width={24} />
                            <div className="text-[14px] text-neutral-40">{data.like}</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SimplePortfolioCard