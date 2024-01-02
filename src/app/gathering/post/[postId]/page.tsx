import Image from 'next/image';
import GatheringDetailHeader from '../(components)/section/GatheringDetailHeader';
import GatheringInfoSection from '../(components)/section/GatheringInfoSection';
import Section from '../(components)/section/Section';
import TeamInfo from '../(components)/section/TeamInfo';
import Comment from '../(components)/section/Comment';
import RecommendGathering from '../(components)/section/RecommendGathering';

const GatheringDetailPage = () => {
  return (
    <>
      <main className="py-[70px] px-[20%] min-h-screen">
        <GatheringDetailHeader title="프로젝트 이름" type="사이드 프로젝트" />
        <div className="flex items-center gap-2 mt-[50px] mb-[30px]">
          <Image
            className="rounded-[50%]"
            src="https://dummyimage.com/100x100/74afe3/fff"
            alt="team profile"
            width={48}
            height={48}
          />
          <div>4벤져스</div>
          <div>|</div>
          <div>2023/12/26</div>
        </div>
        <GatheringInfoSection />
        <Section title="팀 정보">
          <TeamInfo teamName="팀 이름" postType="recruit" />
        </Section>
        <Section title="프로젝트 요약" line={true}>
          <p>
            두둥! 한달살기 예산 300만원, 나의 선택은? 짧은 여행부터 장기
            체류까지 국내에 다양한 지자체 여행지원 프로그램이 있는거 알고
            계셨나요? 몰랐다면 지금 바로 한달살러를 통해 국내 다양한 지자체
            프로그램을 만나보세요. 3만원부터 150만원까지! 한달살기 비용 부담도
            줄이고, 생각지 못한 낯선곳으로 여행을 떠나보세요.
          </p>
        </Section>
        <Section title="프로젝트 요약" line={true}>
          <p>
            두둥! 한달살기 예산 300만원, 나의 선택은? 짧은 여행부터 장기
            체류까지 국내에 다양한 지자체 여행지원 프로그램이 있는거 알고
            계셨나요? 몰랐다면 지금 바로 한달살러를 통해 국내 다양한 지자체
            프로그램을 만나보세요. 3만원부터 150만원까지! 한달살기 비용 부담도
            줄이고, 생각지 못한 낯선곳으로 여행을 떠나보세요. [모집 분야] UXUI
            디자이너 2명 프론트엔드 1명 백엔드 2명 [주요 기능] ✦ 연 500개+ 여행
            지원 프로그램 모아보기 ✦ 실시간 알림 서비스 ✦ 원하는 것만 콕, 필터
            검색 기능 ✦ 내 여행의 기록 ✦ 관심 프로그램 보관 ✦ 댓글 커뮤니티
          </p>
        </Section>
        <Section title="기술스택" line={true}>
          <div className="flex gap-5">
            <Image
              className="rounded-[50%]"
              src="https://dummyimage.com/100x100/74afe3/fff"
              alt="team profile"
              width={48}
              height={48}
            />
            <Image
              className="rounded-[50%]"
              src="https://dummyimage.com/100x100/74afe3/fff"
              alt="team profile"
              width={48}
              height={48}
            />
          </div>
        </Section>
        <Section title="키워드" line={true}>
          <div className="flex gap-5 text-neutral-20">
            <div className="px-6 py-2 border border-neutral-10 rounded-3xl">
              #UXUI
            </div>
            <div className="px-6 py-2 border border-neutral-10 rounded-3xl">
              #앱개발
            </div>
            <div className="px-6 py-2 border border-neutral-10 rounded-3xl">
              #여행플랫폼
            </div>
          </div>
        </Section>
        <div className="flex justify-between mt-[150px]">
          <button>공유하기</button>
          <button>신고하기</button>
        </div>
        <div className="flex justify-evenly py-4 mt-8 border border-neutral-10 rounded-md">
          <div>좋아요</div>
          <div>댓글</div>
          <div>조회수</div>
          <div>북마크</div>
        </div>
        <Comment />
      </main>
      <RecommendGathering />
    </>
  );
};

export default GatheringDetailPage;
