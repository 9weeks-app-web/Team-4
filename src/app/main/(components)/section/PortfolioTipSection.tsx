import Image from "next/image";
const PortfolioTipSection = () => {
    return (
        <div className="flex h-[448px] gap-[30px] mt-[100px] mb-[200px]">
            <div className="h-full w-[893px] bg-primary-10 rounded-2xl">
                <div className="px-[40px]">
                    <p className="mt-10 text-lg text-primary-100 font-medium \">
                        포트폴리오 Tip
                    </p>
                    <div className="flex pb-[82px]">
                        <p className="relative w-[450px] mt-[24px] text-[28px] font-bold z-10">
                            포트폴리오를<br /> 어떻게 구성해야 할까요?
                        </p>
                        <button className="flex mt-auto ml-auto bg-primary-20 rounded-[6px] text-primary-90 text-[18px] font-bold h-[48px] py-[12px] px-[16px] gap-[16px]">
                            <div>Tip 보러가기</div>
                            <Image src="/images/main/chevron_right_icon.png"
                                width={24}
                                height={24} />
                        </button>
                    </div>
                </div>
                <Image
                    className="ml-auto"
                    src="/images/main/tip_icon.png"
                    width={827}
                    height={500}
                />
            </div>
            <div className="w-[277px] flex flex-col justify-between flex-[1] pt-[40px] pl-[39px] bg-[#283A5C] text-neutral-0 rounded-2xl">
                <div>
                    <p className="mb-6 text-lg font-medium">스나이퍼팩토리</p>
                    <p className="w-[220px] text-[26px] font-bold break-keep">
                        나와 맞는 강의를<br />찾고 있다면?
                    </p>
                </div>
                <Image
                    className="mb-[32px]"
                    src="/images/main/sfac_logo.png"
                    alt="SFAC"
                    width={170}
                    height={44}
                />
            </div>
        </div>
    )
}

export default PortfolioTipSection;

