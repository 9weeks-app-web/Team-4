'use client';

import Image from 'next/image';
import Input from '@/app/gathering/(components)/input/Input';
import Section from '../../(components)/section/post/Section';
import TeamInfo from '../../(components)/section/post/TeamInfo';
import Comment from '../../(components)/section/post/CommentSection';
import RecommendGathering from '../../(components)/section/post/RecommendGathering';
import { useState } from 'react';
import Markdown from 'react-markdown';
import ChipRound from '../../(components)/chip/ChipRound';
import Link from 'next/link';

const INTRODUCTION_MD = `
눈 운동을 도와주는 eyeLong은 사용자들이 눈의 건강과 시력 개선을 위해 꾸준한 운동을 할 수 있도록 도와줍니다.
다양한 운동 프로그램과 기능을 제공하여 사용자의 운동을 지원하며, 운동 기록 관리와 시각적인 인터페이스를 통해
사용자에게 편리하고 효과적인 눈 운동 경험을 제공합니다.
`;

const RETROSPECT_MD = `
안녕하세요. 프로젝트이름 프론트엔드 개발자 박창협입니다. 프로젝트이름에서 화면단 개발을 하고 있어요.😊
팀이 결성된지는 6년 정도 됐고 그 사이에 여러 팀원들이 거쳐가면서 현재는 3인 체제로 자리잡았어요.
팀이 시작될 때부터 리모트워크로 작업하고 있고 지금도 계속 원격근무로 작업하고 있습니다.  
저희 서비스는 사용자들이 눈의 건강과 시력 개선을 위해 다양한 운동 수행할 수 있도록 도와주는 서비스입니다!
이 서비스를 통해 사용자들은 눈의 근육을 강화하고, 시력을 개선하는 도움을 받을 수 있습니다.  
[주요 기능]
✦ 다양한 눈 운동 프로그램 제공
![sample](/images/gathering/retrospect1.svg)
✦ 안구 마사지
✦ 운동 기록 관리
✦ 실시간 알림 기능
✦ 직관적인 사용자 경험
✦ 시력 훈련
![sample](/images/gathering/retrospect1.svg)
`;

const GatheringDetailPage = () => {
  return (
    <>
      <RetrospectDetailHeader
        title="eyeLong : Eye Exercise App"
        type="사이드 프로젝트"
        field="헬스케어"
        createdAt="2023.12.29"
      />
      <main className="py-[70px] px-[calc((100%-1200px)/2)] min-h-screen ">
        <div className="flex items-center text-[26px] font-bold">
          <h2>프로젝트 이름</h2>
          <p className="ml-[65px]">eyeLong : Eye Exercise App</p>
        </div>
        <div className="flex items-center mt-10 text-[26px] font-bold">
          <h2>프로젝트 기간</h2>
          <div className="flex items-center gap-4 text-lg font-medium text-neutral-30">
            <span className="min-w-[205px] px-[18px] py-[14px] ml-[65px] border border-neutral-30 rounded-[5px]">
              2024.01.01
            </span>
            -
            <span className="min-w-[205px] px-[18px] py-[14px] border border-neutral-30 rounded-[5px]">
              2024.01.01
            </span>
          </div>
        </div>
        <Section title="팀 정보">
          <TeamInfo teamName="4벤져스" postType="retrospect" />
        </Section>
        <Section title="프로젝트 소개" line={true}>
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
            {INTRODUCTION_MD}
          </Markdown>
        </Section>
        <Section title="프로젝트 회고" line={true}>
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
            {RETROSPECT_MD}
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
        <Section title="프로젝트 링크">
          <div className="px-[18px] py-[14px] text-lg text-neutral-40 font-medium border border-neutral-10 rounded-xl">
            <a href="https://www.google.co.kr" target="_blank">
              https://www.google.co.kr
            </a>
          </div>
        </Section>
        <Section title="키워드">
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
  const [toggleBookmark, setToggleBookmark] = useState(false);

  return (
    <header className="relative px-[calc((100%-1200px)/2)] h-[600px] text-neutral-0">
      <Image
        className="brightness-[0.4]"
        src="/images/gathering/retrospect_banner.svg"
        fill
        alt="bookmark"
      />
      <div className="absolute bottom-0 w-[calc(100%-(100%-1200px))]">
        <h2 className="text-[51px] font-bold">{title}</h2>
        <p className="mt-2 text-[23px] text-neutral-20 font-semibold">
          {type} | {field}
        </p>
        <div className="relative flex justify-between mt-[35px] mb-9 text-[20px] font-medium text-neutral-20">
          <p>{createdAt}</p>
          <Image
            className="absolute bottom-4 right-0 cursor-pointer"
            src={`/images/gathering/${
              toggleBookmark ? 'bookmark_0_fill' : 'bookmark_0'
            }.svg`}
            width={40}
            height={40}
            alt="bookmark"
            onClick={() => setToggleBookmark(prev => !prev)}
          />
        </div>
      </div>
    </header>
  );
};
