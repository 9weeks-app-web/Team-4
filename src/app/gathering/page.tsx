import Image from 'next/image';
import GatheringBannerSection from './(components)/section/main/GatheringBannerSection';
import DeadlineGatheringSection from './(components)/section/main/DeadlineGatheringSection';
import MainGatheringSection from './(components)/section/main/MainGatheringSection';
import RetrospectSection from './(components)/section/main/RetrospectSection';
import RecommendGatheringSection from './(components)/section/main/RecommendGatheringSection';
import GatheringGuideSection from './(components)/section/main/GatheringGuideSection';
import AdvertisementSection from './(components)/section/main/AdvertisementSection';
import TodayRespecterSection from './(components)/section/main/TodayRespecterSection';
import RespectRankSection from './(components)/section/main/RespectRankSection';
import FloatingSection from './(components)/section/main/FloatingSection';
import ButtonRound from './(components)/button/ButtonRound';

interface GatheringPageProps {
  searchParams: { section: string };
}

const GatheringPage = ({ searchParams }: GatheringPageProps) => {
  const { section = 'all' } = searchParams;

  return (
    <>
      <main className="flex flex-col items-center min-h-screen">
        <GatheringBannerSection />
        <div className="flex justify-between items-center min-w-[1200px] h-[130px] py-6 px-12 mt-40 mb-20 bg-neutral-5 border-1 border-black border-solid rounded-2xl">
          <div className="flex items-center gap-8">
            <Image
              src="/images/gathering/speech_bubble.svg"
              width={80}
              height={80}
              alt="speech bubble"
            />
            <div>
              <p className="text-[26px] text-primary-100 font-bold">
                맘에 드는 모임이 없나요?
              </p>
              <p className=" text-neutral-60 text-lg font-medium">
                프로젝트/ 스터디를 직접 모집해 팀원을 찾아보세요!
              </p>
            </div>
          </div>
          <div>
            <ButtonRound content="모임 만들기" theme="primary" />
          </div>
        </div>
        {section === 'respecter' ? (
          <TodayRespecterSection />
        ) : (
          <DeadlineGatheringSection />
        )}
        <MainGatheringSection />
        {(section === 'all' || section === 'project') && <RetrospectSection />}
        {section === 'respecter' ? (
          <RespectRankSection />
        ) : (
          <RecommendGatheringSection />
        )}
        <GatheringGuideSection />
        <AdvertisementSection />
      </main>
      <FloatingSection />
    </>
  );
};

export default GatheringPage;
