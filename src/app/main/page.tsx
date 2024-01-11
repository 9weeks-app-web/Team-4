import AdvertisementSection from './(components)/section/AdvertisementSection';
import PortfolioByJobSection from './(components)/section/PortfolioByJobSection'
import SfacPickPortfolioSection from './(components)/section/SfacPickPortfolioSection';
import PopularPortfolioSection from './(components)/section/PopularPortfolioSection';
import NewPortfolioSection from './(components)/section/NewportfolioSection';
import RespectRankingSection from './(components)/section/RespectRankingSection';
import MyPortfolioSection from './(components)/section/MyPortfolioSection';
import GatheringSection from './(components)/section/GatheringSection'
import CommunitySection from './(components)/section/CommunitySection';
import HotCreatorSection from './(components)/section/HotCreatorSection';
import PopularRecruitSection from './(components)/section/PopularRecruitSection';
import PortfolioTipSection from './(components)/section/PortfolioTipSection';
import FooterSection from './(components)/section/FooterSection';

const MainPage = () => {
    return (
        <div className="flex flex-col items-center overflow-x-hidden">
            <AdvertisementSection />
            <PortfolioByJobSection />
            <SfacPickPortfolioSection />
            <PopularPortfolioSection />
            <NewPortfolioSection />
            <RespectRankingSection />
            <MyPortfolioSection />
            <GatheringSection />
            <CommunitySection />
            <HotCreatorSection />
            <PopularRecruitSection />
            <PortfolioTipSection />
            <FooterSection />
        </div>
    )
}

export default MainPage;




