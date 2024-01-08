'use client';
import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';

import MyMarkdownEditor from '../(components)/MarkDownEditor';
import SurveyPostCard from './(components)/SurveyPostCard';

interface PostProps {}

const Post: React.FC<PostProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [selectedPrivacy, setSelectedPrivacy] = useState('public');

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };
  const handlePrivacyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrivacy(event.target.value);
  };

  return (
    <div>
      <div className="flex p-[6px] mb-2 h-9">
        <Image
          src="/images/community/star.png"
          alt="Star Image"
          width={24}
          height={24}
          className="mr-2"
        />
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="카테고리">카테고리</option>
          <option value="자유주제">자유주제</option>
          <option value="포트폴리오">포트폴리오</option>
          <option value="커리어">커리어</option>
          <option value="QnA">QnA</option>
          <option value="설문조사">설문조사</option>
          <option value="직업별게시판">직업별게시판</option>
        </select>
      </div>

      {selectedCategory !== '설문조사' && (
        <>
          <input
            type="text"
            id="title"
            placeholder="제목을 입력해주세요(20자 이내)"
            className="w-full border h-[52px] px-[14px] py-3 rounded-xl mb-5 "
          />

          <MyMarkdownEditor
            value={markdownContent}
            onChange={setMarkdownContent}
          />

          <div className="mb-5 px-4 py-3 rounded-full border border-neutral-10 text-neutral-60 inline-block">
            태그 추가 +
          </div>
        </>
      )}

      {selectedCategory === '설문조사' && <SurveyPostCard />}

      <div className="flex justify-between">
        <div className="flex items-center">
          <Image
            src="/images/community/earth.png"
            alt="public&private"
            width={24}
            height={24}
            className="mr-2 h-6"
          />
          <select value={selectedPrivacy} onChange={handlePrivacyChange}>
            <option value="public">전체공개</option>
            <option value="membersOnly">회원공개</option>
            <option value="private">나만보기</option>
          </select>
        </div>
        <div>
          <button className="px-[18px] py-2 bg-neutral-5 text-neutral-40 rounded-[10px] mr-[19px]">
            임시저장
          </button>
          <button className="px-[18px] py-2  bg-primary-80 text-neutral-0 rounded-[10px]">
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
