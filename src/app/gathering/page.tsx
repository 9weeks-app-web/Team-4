import GatheringBannerSection from './(components)/section/main/GatheringBannerSection';
import DeadlineGatheringSection from './(components)/section/main/DeadlineGatheringSection';
import MainGatheringSection from './(components)/section/main/MainGatheringSection';
import RetrospectSection from './(components)/section/main/RetrospectSection';
import RecommendGatheringSection from './(components)/section/main/RecommendGatheringSection';
import GatheringGuideSection from './(components)/section/main/GatheringGuideSection';
import Advertisement from './(components)/section/main/AdvertisementSection';
import ButtonRound from './(components)/button/ButtonRound';

const GatheringPage = () => {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <GatheringBannerSection />
      <div className="flex justify-between min-w-[1200px] h-[130px] p-10 my-20 bg-neutral-5 border-1 border-black border-solid">
        <div>
          <p className="text-2xl">맘에 드는 모임이 없나요?</p>
          <p>프로젝트/ 스터디를 직접 모집해 팀원을 찾아보세요!</p>
        </div>
        <div>
          <ButtonRound content="모임 만들기" />
        </div>
      </div>
      <DeadlineGatheringSection />
      <MainGatheringSection />
      <RetrospectSection />
      {/* <RecommendGatheringSection /> */}
      {/* <GatheringGuideSection /> */}
      {/* <Advertisement /> */}
    </main>
  );
};

export default GatheringPage;
