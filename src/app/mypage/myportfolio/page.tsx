import RepresentPortfolioSection from "./(components)/section/RepresentPortfolioSection";
import AllPortfolioSection from "./(components)/section/AllPortfolioSection";
import LargeHead from "../(components)/head/LargeHead";

const MyPortfolioPage = () => {
    return (
        <div className="max-w-[1152px]">
            <div className="mb-[94px]">
                <LargeHead content="내 포트폴리오" />
            </div>
            <RepresentPortfolioSection />
            <AllPortfolioSection />
        </div>
    )
}

export default MyPortfolioPage;
