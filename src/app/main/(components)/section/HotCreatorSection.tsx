import ArrowLeftButton from "../button/ArrowLeftButton"
import ArrowRightButton from "../button/ArrowRightButton"
import HotCreatorCard from "../card/HotCreatorCard"
import Image from "next/image"

const HotCreatorSection = () => {
    return (
        <div className="relative h-[937px]">
            <Image src="/images/main/rank_background.png"
                width={1920}
                height={937}
                className="mx-auto" />
            <div className="w-[1371px] h-[615px]">
                <div className="absolute top-[100px] left-[42%]">
                    <div className="flex">
                        <div className="text-[18px] font-bold mb-4 text-neutral-0 ml-[80px]">HOT 크리에이터</div>
                    </div>
                    <div className="flex space-x-3">
                        <div className="text-[26px] font-bold mb-4 text-neutral-0">이달의 크리에이터 랭킹</div>
                        <div className="px-[12px] py-[6px] h-[34px] text-[16px] font-bold bg-neutral-0 text-primary-100 rounded-[12px]" >Top 9</div>
                    </div>
                </div>
                <div className="absolute top-[100px] right-[15%] text-[16px] mb-4 text-neutral-0">2023.12.29(금) 기준</div>
                <div className="flex items-center absolute top-[270px] left-[270px]">
                    <span className="m-5">
                        <ArrowLeftButton />
                    </span>
                    <div className="flex justify-center space-x-[30px] pb-4 mx-auto">
                        <div className="mt-[101px] ">
                            <HotCreatorCard />
                        </div>
                        <HotCreatorCard />
                        <div className="mt-[101px] ">
                            <HotCreatorCard />
                        </div>
                    </div>
                    <span className="p-[50px]">
                        <ArrowRightButton />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HotCreatorSection