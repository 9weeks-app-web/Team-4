const PortfolioByJobSection = () => {
    return (
        <div className="p-20">
            <h2 className="text-xl font-semibold">어떤 직무의 포트폴리오가 궁금하세요?</h2>
            <div className="flex space-x-4">
                <div className="w-[100px] h-[100px] bg-neutral-10 shadow-md flex items-center justify-center">
                    <span className="text-sm">서비스 기획</span>
                </div>
                <div className="w-[100px] h-[100px] bg-neutral-10 flex items-center justify-center">
                    <span className="text-sm">UI/UX 디자인</span>
                </div>
                <div className="w-[100px] h-[100px] bg-neutral-10 flex items-center justify-center">
                    <span className="text-sm">웹 디자인</span>
                </div>
                <div className="w-[100px] h-[100px] bg-neutral-10 flex items-center justify-center">
                    <span className="text-sm">편집 디자인</span>
                </div>
            </div>
        </div>
    )
}

export default PortfolioByJobSection;