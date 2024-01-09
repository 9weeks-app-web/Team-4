'use client';

import Image from 'next/image';
import Markdown from 'react-markdown';
import GatheringDetailHeader from '../../(components)/section/post/GatheringDetailHeader';
import GatheringInfoSection from '../../(components)/section/post/GatheringInfoSection';
import Section from '../../(components)/section/post/Section';
import TeamInfo from '../../(components)/section/post/TeamInfo';
import CommentSection from '../../(components)/section/post/CommentSection';
import RecommendGathering from '../../(components)/section/post/RecommendGathering';
import ChipRound from '../../(components)/chip/ChipRound';

const SUMMARY_MD = `
두둥! 한달살기 예산 300만원, 나의 선택은?
짧은 여행부터 장기 체류까지 국내에 다양한 지자체 여행지원 프로그램이 있는거 알고 계셨나요?
몰랐다면 지금 바로 한달살러를 통해 국내 다양한 지자체 프로그램을 만나보세요. 3만원부터 150만원까지! 한달살기 비용 부담도 줄이고, 생각지 못한 낯선곳으로 여행을 떠나보세요.
`;

const INTRODUCTION_MD = `
두둥! 한달살기 예산 300만원, 나의 선택은?
짧은 여행부터 장기 체류까지 국내에 다양한 지자체 여행지원 프로그램이 있는거 알고 계셨나요?
몰랐다면 지금 바로 한달살러를 통해 국내 다양한 지자체 프로그램을 만나보세요. 3만원부터 150만원까지! 한달살기 비용 부담도 줄이고, 생각지 못한 낯선곳으로 여행을 떠나보세요.  
[모집 분야]
UXUI 디자이너 2명
프론트엔드 1명
백엔드 2명  
[주요 기능]
✦ 연 500개+ 여행 지원 프로그램 모아보기
✦ 실시간 알림 서비스
✦ 원하는 것만 콕, 필터 검색 기능
✦ 내 여행의 기록
✦ 관심 프로그램 보관
✦ 댓글 커뮤니티
`;

const GatheringDetailPage = () => {
  return (
    <>
      <main className="relative py-[70px] px-[calc((100%-1200px)/2)] min-h-screen">
        <GatheringDetailHeader title="프로젝트 이름" type="사이드 프로젝트" />
        <div className="flex items-center gap-2 mt-[50px] mb-[30px] text-xl font-medium">
          <Image
            className="rounded-[50%]"
            src="/images/gathering/avengers.svg"
            alt="team profile"
            width={48}
            height={48}
          />
          <span className="ml-2 ">4벤져스</span>
          <span className="h-[14px] text-neutral-20 leading-[14px] ">|</span>
          <span>2023/ 12/ 26</span>
        </div>
        <GatheringInfoSection />
        <Section title="팀 정보">
          <TeamInfo teamName="팀 이름" postType="recruit" />
        </Section>
        <Section title="프로젝트 요약" line={true}>
          <Markdown
            components={{
              p: props => (
                <p
                  className="text-neutral-90 text-lg font-medium whitespace-pre-wrap"
                  {...props}
                />
              ),
            }}
          >
            {SUMMARY_MD}
          </Markdown>
        </Section>
        <Section title="프로젝트 소개" line={true}>
          <Markdown
            components={{
              p: props => (
                <p
                  className="text-neutral-90 text-lg font-medium  whitespace-pre-wrap"
                  {...props}
                />
              ),
            }}
          >
            {INTRODUCTION_MD}
          </Markdown>
        </Section>
        <Section title="기술스택" line={true}>
          <div className="flex gap-3">
            <Image
              src="/images/gathering/java.svg"
              alt="java"
              width={58}
              height={58}
            />
            <Image
              src="/images/gathering/react.svg"
              alt="react"
              width={58}
              height={58}
            />
            <Image
              src="/images/gathering/figma.svg"
              alt="figma"
              width={58}
              height={58}
            />
          </div>
        </Section>
        <Section title="키워드" line={true}>
          <div className="flex gap-3 text-neutral-20">
            <ChipRound content="#UXUI" />
            <ChipRound content="#앱개발" />
            <ChipRound content="#여행플랫폼" />
          </div>
        </Section>
        <div className="flex justify-between mt-[150px] text-lg font-medium">
          <button className="flex items-center gap-4 px-4 py-[10px] text-neutral-80">
            <Image
              src="/images/gathering/share.svg"
              width={19}
              height={21}
              alt="share"
            />
            공유하기
          </button>
          <button className="text-neutral-40">신고하기</button>
        </div>
        <div className="flex items-center justify-center gap-[154px] py-[22px] px-[10] mt-8 border border-neutral-10 rounded-md">
          <button className="flex items-center gap-[6px]">
            <Image
              src="/images/gathering/like.svg"
              width={24}
              height={24}
              alt="like"
            />
            좋아요
          </button>
          <button className="flex items-center gap-[6px]">
            <Image
              src="/images/gathering/chat_bubble_40.svg"
              width={24}
              height={24}
              alt="chat"
            />
            댓글
          </button>
          <button className="flex items-center gap-[6px]">
            <Image
              src="/images/gathering/view_40.svg"
              width={24}
              height={24}
              alt="view"
            />
            조회수
          </button>
          <button className="flex items-center gap-[6px]">
            <Image
              src="/images/gathering/bookmark_40.svg"
              width={24}
              height={24}
              alt="bookmark"
            />
            북마크
          </button>
        </div>
        <CommentSection />
      </main>
      <RecommendGathering />
    </>
  );
};

export default GatheringDetailPage;
