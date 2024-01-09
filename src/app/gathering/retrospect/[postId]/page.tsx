import Image from 'next/image';
import Input from '@/app/gathering/(components)/input/Input';
import Section from '../../(components)/section/post/Section';
import TeamInfo from '../../(components)/section/post/TeamInfo';
import Comment from '../../(components)/section/post/CommentSection';
import RecommendGathering from '../../(components)/section/post/RecommendGathering';

const GatheringDetailPage = () => {
  return (
    <>
      <RetrospectDetailHeader
        title="eyeLong : Eye Exercise App"
        type="사이드 프로젝트"
        field="헬스케어"
        createdAt="2023.12.29"
      />
      <main className="py-[70px] px-[20%] min-h-screen ">
        <div className="flex items-center text-2xl">
          <h2>프로젝트 이름</h2>
          <p className="ml-10">eyeLong : Eye Exercise App</p>
        </div>
        <div className="flex items-center mt-10">
          <h2 className="text-2xl">프로젝트 기간</h2>
          <div className="flex items-center gap-4 text-neutral-30">
            <span className="px-4 py-2 ml-10 border border-neutral-30 rounded-md">
              2024.01.01
            </span>
            -
            <span className="px-4 py-2 border border-neutral-30 rounded-md">
              2024.01.01
            </span>
          </div>
        </div>
        <Section title="팀 정보">
          <TeamInfo teamName="팀 이름" postType="retrospect" />
        </Section>
        <Section title="프로젝트 소개" line={true}>
          <p>
            두둥! 한달살기 예산 300만원, 나의 선택은? 짧은 여행부터 장기
            체류까지 국내에 다양한 지자체 여행지원 프로그램이 있는거 알고
            계셨나요? 몰랐다면 지금 바로 한달살러를 통해 국내 다양한 지자체
            프로그램을 만나보세요. 3만원부터 150만원까지! 한달살기 비용 부담도
            줄이고, 생각지 못한 낯선곳으로 여행을 떠나보세요.
          </p>
        </Section>
        <Section title="프로젝트 회고" line={true}>
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
        <Section title="프로젝트 링크" line={true}>
          <Input placeholder="https://" />
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
        <Comment />
      </main>
      <RecommendGathering />
    </>
  );
};

export default GatheringDetailPage;

interface RetrospectDetailHeaderProps {
  image?: string;
  title?: string;
  type?: string;
  field?: string;
  createdAt?: string;
}

const RetrospectDetailHeader = ({
  image,
  title,
  type,
  field,
  createdAt,
}: RetrospectDetailHeaderProps) => {
  return (
    <header className="relative px-[20%] h-[400px] bg-[url('https://dummyimage.com/1200x900/8cc0ff/fff')] bg-no-repeat bg-cover text-neutral-0">
      <div className="absolute w-[60%] bottom-0">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="mt-2">
          {type} | {field}
        </p>
        <div className="flex justify-between mt-[50px] mb-2">
          <p>{createdAt}</p>
          <button>북마크 버튼</button>
        </div>
      </div>
    </header>
  );
};
