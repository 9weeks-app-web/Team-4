'use client';
import { useState } from 'react';
import Card from './(components)/Card';
import Chat from './(components)/Chat';
import HotBoard from './(components)/HotBorad';
import PollCard from './(components)/PollCard';
import {
  surveyDummyData,
  QnADummys,
  CommunityDummys,
  JobDummys,
} from './api/community/(dummys)';
import ChatDummy from './api/community/(dummys)/chat';
import Link from 'next/link';
import { CommunityDetail } from '@/types/community';
import RightArrow from './(components)/imageComponents/Right';
import ChatCard from './(components)/ChatCard';

const Community = () => {
  const jobCategories: string[] = [
    'UX/UI',
    '서비스 기획',
    '웹 디자인',
    '편집 디자인',
  ];
  const jobChatCategories: string[] = [
    '전체',
    'UX/UI',
    '서비스 기획',
    '웹 디자인',
    '편집 디자인',
  ];
  const qnaCategories: string[] = ['포트폴리오', '커리어'];

  const [activeJobCategory, setActiveJobCategory] = useState('UX/UI');
  const [activeJobChatCategory, setActiveJobChatCategory] = useState('전체');
  const [activeQnACategory, setActiveQnACategory] = useState('포트폴리오');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredJobDummys = JobDummys.filter(dummy =>
    activeJobCategory === 'UX/UI' ||
    activeJobCategory === '서비스 기획' ||
    activeJobCategory === '웹 디자인' ||
    activeJobCategory === '편집 디자인'
      ? dummy.type === activeJobCategory
      : false,
  );

  const filteredJobChatDummys = ChatDummy.filter(dummy =>
    activeJobChatCategory === '전체'
      ? activeJobChatCategory === '전체' ||
        ['UX/UI', '서비스 기획', '웹 디자인', '편집 디자인'].includes(dummy.tag)
      : activeJobChatCategory === 'UX/UI' ||
          activeJobChatCategory === '서비스 기획' ||
          activeJobChatCategory === '웹 디자인' ||
          activeJobChatCategory === '편집 디자인'
        ? dummy.tag === activeJobChatCategory
        : false,
  );

  const filteredQnADummys = QnADummys.filter(dummy =>
    activeQnACategory === '포트폴리오'
      ? dummy.type === '포트폴리오'
      : dummy.type === '커리어',
  );

  const allDummys = [...CommunityDummys, ...QnADummys, ...JobDummys];
  const sortByHitDesc = (a: CommunityDetail, b: CommunityDetail) =>
    b.likes - a.likes;
  const hotDummys = allDummys.sort(sortByHitDesc);

  const handleNextClick = () => {
    const nextIndex = currentIndex + 6;
    if (nextIndex < hotDummys.length) {
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrevClick = () => {
    const prevIndex = currentIndex - 6;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <div className="flex justify-center items-center font-sans">
      <div>
        <section className=" mb-20">
          <div className="flex justify-between">
            <h1 className="font-bold text-[26px] mb-8">핫한 게시글</h1>
            <div className="flex items-center">
              <div className="w-6 h-6 mr-4">
                <button className="text-2xl" onClick={handlePrevClick}>
                  &#60;
                </button>
              </div>
              <div className="w-6 h-6">
                <button className="text-2xl" onClick={handleNextClick}>
                  &#62;
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[30px] ">
            {hotDummys
              .slice(currentIndex, currentIndex + 6)
              .map((dummy, index) => (
                <HotBoard
                  key={dummy.id}
                  dummy={dummy}
                  index={index + currentIndex + 1}
                />
              ))}
          </div>
        </section>
        <section className="mb-20">
          <div className="flex justify-between items-start">
            <h1 className="font-bold text-[26px] mb-8">자유주제</h1>
            <Link
              href="/community/freesubject"
              className="text-lg text-neutral-50"
            >
              <div className="flex justify-center   px-4 py-3 rounded-[10px] hover:bg-neutral-5 transition ease-in-out duration-500">
                더보기
                <RightArrow />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-[30px]">
            {CommunityDummys.slice(0, 2).map(dummy => (
              <Card dummy={dummy} key={dummy.id} category="freesubject" />
            ))}
          </div>
        </section>
        <section className="mb-20">
          <div>
            <p className="font-bold text-3xl mb-[14px]">QnA</p>
            <div className="flex justify-between mb-6">
              <div className="flex">
                {qnaCategories.map(category => (
                  <button
                    key={category}
                    className={`flex justify-center items-center h-10 mr-[10px] px-4 py-[11px] border ${
                      category === activeQnACategory
                        ? 'bg-primary-20 border-primary-60 text-primary-100'
                        : 'border-neutral-10 text-neutral-60'
                    } rounded-full`}
                    onClick={() => setActiveQnACategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <Link href="/community/qna" className="text-lg text-neutral-50">
                <div className="flex justify-center   px-4 py-3 rounded-[10px] hover:bg-neutral-5 transition ease-in-out duration-500">
                  더보기
                  <RightArrow />
                </div>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[30px]">
            {filteredQnADummys.slice(0, 2).map(qna => (
              <Card key={qna.id} dummy={qna} category="qna" />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex justify-between">
            <h1 className="font-bold text-3xl mb-4">설문조사</h1>
            <Link href="/community/survey" className="text-lg text-neutral-50">
              <div className="flex justify-center   px-4 py-3 rounded-[10px] hover:bg-neutral-5 transition ease-in-out duration-500">
                더보기
                <RightArrow />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-[30px]">
            {surveyDummyData.slice(0, 2).map(survey => (
              <PollCard key={survey.id} survey={survey} />
            ))}
          </div>
        </section>
        <section className="mb-20">
          <h1 className="font-bold text-3xl mb-4">직무별 게시판</h1>
          <div className="flex justify-between mb-6">
            <div className="flex">
              {jobCategories.map(category => (
                <button
                  key={category}
                  className={`flex justify-center items-center h-10 mr-[10px] px-4 py-[11px] border ${
                    category === activeJobCategory
                      ? 'bg-primary-20 border-primary-60 text-primary-100'
                      : 'border-neutral-10 text-neutral-60'
                  } rounded-full`}
                  onClick={() => setActiveJobCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <Link
              href="/community/jobboard"
              className="text-lg text-neutral-50"
            >
              <div className="flex justify-center   px-4 py-3 rounded-[10px] hover:bg-neutral-5 transition ease-in-out duration-500">
                더보기
                <RightArrow />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-[30px]">
            {filteredJobDummys.slice(0, 2).map(job => (
              <Card key={job.id} dummy={job} category="jobboard" />
            ))}
          </div>
        </section>
        <section className="mb-20">
          <h1 className="font-bold text-3xl mb-4">직무별 채팅방</h1>
          <div className="flex justify-between mb-6">
            <div className="flex">
              {jobChatCategories.map(category => (
                <button
                  key={category}
                  className={`flex justify-center items-center h-10 mr-[10px] px-4 py-[11px] border ${
                    category === activeJobChatCategory
                      ? 'bg-primary-20 border-primary-60 text-primary-100'
                      : 'border-neutral-10 text-neutral-60'
                  } rounded-full`}
                  onClick={() => setActiveJobChatCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <Link
              href="/community/chatroom"
              className="text-lg text-neutral-50"
            >
              <div className="flex justify-center   px-4 py-3 rounded-[10px] hover:bg-neutral-5 transition ease-in-out duration-500">
                더보기
                <RightArrow />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-[30px]">
            {filteredJobChatDummys.slice(0, 2).map(job => (
              <ChatCard key={job.id} dummy={job} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Community;
