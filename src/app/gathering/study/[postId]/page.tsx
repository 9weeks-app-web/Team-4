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
UXUI를 처음 배우는 팀원을 모집합니다! UXUI 방법론과 디자인시스템 등 어쩌구 저쩌구 UXUI에 대해 스터디하려고 합니다.
매주 토요일 오후3시에 마곡나루에서 정기적인 모임일정을 가질 예정입니다. 그 외의 시간에는 팀원들끼리 자율적으로 모임을 가질 예정입니다. 
`;

const INTRODUCTION_MD = `
UXUI를 처음 배우는 팀원을 모집합니다! UXUI 방법론과 디자인시스템 등 어쩌구 저쩌구 UXUI에 대해 스터디하려고 합니다.
매주 토요일 오후3시에 마곡나루에서 정기적인 모임일정을 가질 예정입니다. 그 외의 시간에는 팀원들끼리 자율적으로 모임을 가질 예정입니다. 
UXUI를 처음 배우는 팀원을 모집합니다! UXUI 방법론과 디자인시스템 등 어쩌구 저쩌구 UXUI에 대해 스터디하려고 합니다.
매주 토요일 오후3시에 마곡나루에서 정기적인 모임일정을 가질 예정입니다. 그 외의 시간에는 팀원들끼리 자율적으로 모임을 가질 예정입니다.UXUI를 처음 배우는 팀원을 모집합니다! UXUI 방법론과 디자인시스템 등 어쩌구 저쩌구 UXUI에 대해 스터디하려고 합니다.  
매주 토요일 오후3시에 마곡나루에서 정기적인 모임일정을 가질 예정입니다. 그 외의 시간에는 팀원들끼리 자율적으로 모임을 가질 예정입니다.UXUI를 처음 배우는 팀원을 모집합니다! UXUI 방법론과 디자인시스템 등 어쩌구 저쩌구 UXUI에 대해 스터디하려고 합니다.
매주 토요일 오후3시에 마곡나루에서 정기적인 모임일정을 가질 예정입니다. 그 외의 시간에는 팀원들끼리 자율적으로 모임을 가질 예정입니다.
`;

const GatheringDetailPage = () => {
  return (
    <>
      <main className="relative py-[70px] px-[calc((100%-1200px)/2)] min-h-screen">
        <GatheringDetailHeader title="스터디 이름" type="스터디" />
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
          <TeamInfo teamName="4vengers" postType="study" />
        </Section>
        <Section title="스터디 요약" line={true}>
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
        <Section title="스터디 소개" line={true}>
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
        <div className="flex items-center justify-center gap-[154px] py-[22px] px-[10] mt-8 text-neutral-60 border border-neutral-10 rounded-md">
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
