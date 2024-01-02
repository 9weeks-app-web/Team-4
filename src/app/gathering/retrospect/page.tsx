import Button2 from '../(components)/button/Button2';
import MainGatheringSection from '../(components)/section/main/MainGatheringSection';
import RetrospectBannerSection from './(components)/RetrospectBannerSection';
import RetrospectGridSection from './(components)/RetrospectGridSection';

const RetrospectPage = () => {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <RetrospectBannerSection />
      <div className="flex justify-between w-[60%] h-[130px] p-10 mt-20 bg-primary-90 rounded-xl">
        <div>
          <p className="text-2xl">프로젝트 회고를 사람들과 나눠보세요</p>
          <p>회고를 작성하고 프로젝트를 마무리 해보세요</p>
        </div>
        <div>
          <Button2 content="회고 쓰러가기" />
        </div>
      </div>

      <RetrospectGridSection />

      {/* <DeadlineGatheringSection /> */}
      {/* <RetrospectSection /> */}
      {/* <RecommendGatheringSection /> */}
      {/* <GatheringGuideSection /> */}
      {/* <Advertisement /> */}
    </main>
  );
};

export default RetrospectPage;
