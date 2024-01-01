
const PortfolioTipSection = () => {
    return (
        <div className="flex justify-center items-center space-x-10 p-10">
            <div className="w-[500px] h-[250px] bg-primary-10 rounded-lg shadow-md">
                <div className="p-5">
                    <h2 className="text-sm font-semibold text-primary-70">포트폴리오 Tip</h2>
                    <p className="text-lg">포트폴리오를<br />어떻게 구성해야 할까요?</p>
                </div>
            </div>
            <div className="w-[300px] h-[250px] bg-[#283A5C] rounded-lg shadow-md">
                <div className="p-5">
                    <h2 className="text-sm font-semibold text-neutral-0 ">스나이퍼 팩토리</h2>
                    <p className="text-lg text-neutral-0 ">나와 맞는 강의를<br />찾고 있다면?</p>
                </div>
            </div>
        </div>
    )
}

export default PortfolioTipSection;