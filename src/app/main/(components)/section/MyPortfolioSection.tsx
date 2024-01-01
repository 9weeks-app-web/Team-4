import SimplePortfolioCard from "../card/SimplePortfolioCard"

const MyPortfolioSection = () => {
    return (
        <div className="bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-lg font-semibold mb-4">김스팩님의 포트폴리오 여정</h2>
                <div className="flex overflow-x-auto space-x-4 pb-4">
                    <SimplePortfolioCard />
                    <SimplePortfolioCard />
                    <SimplePortfolioCard />
                </div>
            </div>
        </div>
    )
}

export default MyPortfolioSection