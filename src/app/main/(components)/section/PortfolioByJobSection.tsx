import Image from 'next/image';

const PortfolioByJobSection = () => {
    return (
        <div className="w-full h-[376px] bg-background-5 flex items-center">
            <div className="flex flex-col mx-auto">
                <h2 className="text-neutral-70 text-[22px] font-semibold mx-auto">어떤 포트폴리오가 궁금하세요?</h2>
                <div className="flex space-x-16 mt-[20px]">
                    <button className="flex flex-col items-center justify-center">
                        <Image src="/images/main/service_icon.png" width={150} height={150} />
                        <div className="text-[16px] text-neutral-70">서비스 기획</div>
                    </button>
                    <button className="flex flex-col items-center justify-center">
                        <Image src="/images/main/uiux_icon.png" width={150} height={150} />
                        <div className="text-[16px] text-neutral-70">UXUI 디자인</div>
                    </button>
                    <button className="flex flex-col items-center justify-center">
                        <Image src="/images/main/web_design_icon.png" width={150} height={150} />
                        <div className="text-[16px] text-neutral-70">웹 디자인</div>
                    </button>
                    <button className="flex flex-col items-center justify-center">
                        <Image src="/images/main/editorial_design_icon.png" width={150} height={150} />
                        <div className="text-[16px] text-neutral-70">편집 디자인</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PortfolioByJobSection;