'use client';
import { usePathname } from 'next/navigation';
import SurveyCard from '../(components)/SurveyCard';
import FreeCard from '../(components)/CategoryCard';
import {
  CommunityDummys,
  QnADummys,
  JobDummys,
} from '../api/community/(dummys)';
import Image from 'next/image';
import { clsx } from 'clsx';
import { useState } from 'react';

const CommunityPage = () => {
  const pathname = usePathname();
  const category = pathname.split('/')[2];

  const [sortBy, setSortBy] = useState<'recommend' | 'latest'>('recommend');
  const perPage = 5;
  const [page, setPage] = useState(1);

  const handleSortByRecommend = () => {
    setSortBy('recommend');
  };

  const handleSortByLatest = () => {
    setSortBy('latest');
  };

  let boardTitle = '';
  if (category === 'qna') {
    boardTitle = 'QnA';
  } else if (category === 'freesubject') {
    boardTitle = '자유주제';
  } else if (category === 'jobboard') {
    boardTitle = '직무별 게시판';
  } else if (category === 'survey') {
    return <SurveyCard />;
  }

  const dummys =
    boardTitle === '자유주제'
      ? CommunityDummys
      : boardTitle === 'QnA'
        ? QnADummys
        : boardTitle === '직무별 게시판'
          ? JobDummys
          : [];

  const sortedDummys =
    sortBy === 'recommend'
      ? [...dummys].sort((a, b) => b.likes - a.likes)
      : [...dummys].sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
        );

  const totalPageCount = Math.ceil(sortedDummys.length / perPage);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const slicedDummys = sortedDummys.slice(startIndex, endIndex);

  return (
    <div>
      <div className="flex justify-between my-8">
        <div className=" font-bold text-[28px]">{boardTitle}</div>
        <div className="flex text-neutral-60 font-medium">
          <button
            className={`px-2 py-1 rounded-md  mr-[6px] ${
              sortBy === 'recommend' ? 'font-bold bg-neutral-5' : ''
            }`}
            onClick={handleSortByRecommend}
          >
            추천
          </button>
          <button
            className={`px-2 py-1 rounded-md ${
              sortBy === 'latest' ? 'font-bold bg-neutral-5' : ''
            }`}
            onClick={handleSortByLatest}
          >
            최신
          </button>
        </div>
      </div>
      {slicedDummys.map((post, index) => (
        <FreeCard key={index} post={post} />
      ))}
      <div className="flex items-center self-center mt-20 text-neutral-50">
        <button
          className="p-[10px]"
          onClick={() =>
            setPage(prev => Math.min(Math.ceil(prev / 10) * 10 - 1, 1))
          }
        >
          <Image
            src="/images/gathering/double_left_arrow.svg"
            width={24}
            height={24}
            alt="double left arrow"
          />
        </button>
        <button
          className="p-[10px]"
          onClick={() => setPage(prev => (prev > 1 ? prev - 1 : prev))}
        >
          <Image
            src="/images/gathering/left_arrow.svg"
            width={24}
            height={24}
            alt="left arrow"
          />
        </button>
        {Array.from({ length: totalPageCount }, (_, i) => i + 1).map(num => (
          <button
            key={num}
            className={clsx(
              page === num && [
                'text-neutral-0',
                'bg-primary-100',
                'rounded-[50%]',
              ],
              'w-10',
              'h-10',
            )}
            onClick={() => setPage(num)}
          >
            {num}
          </button>
        ))}
        <button
          className="p-[10px]"
          onClick={() =>
            setPage(prev => (prev < totalPageCount ? prev + 1 : prev))
          }
        >
          <Image
            src="/images/gathering/right_arrow.svg"
            width={24}
            height={24}
            alt="right arrow"
          />
        </button>
        <button
          className="p-[10px]"
          onClick={() =>
            setPage(prev =>
              Math.min(Math.ceil(prev / 10) * 10 + 1, totalPageCount),
            )
          }
        >
          <Image
            src="/images/gathering/double_right_arrow.svg"
            width={24}
            height={24}
            alt="double right arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default CommunityPage;
