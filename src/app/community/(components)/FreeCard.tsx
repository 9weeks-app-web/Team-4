'use client';
import Image from 'next/image';
import {
  CommunityDummys,
  QnADummys,
  JobDummys,
} from '../api/community/(dummys)';
import { BoardProps } from './AllBoradCard';
import { useState } from 'react';
import { clsx } from 'clsx';

const FreeCard: React.FC<BoardProps> = ({ title }) => {
  const dummys =
    title === '자유주제'
      ? CommunityDummys
      : title === 'QnA'
        ? QnADummys
        : title === '직무별 게시판'
          ? JobDummys
          : [];
  const [sortBy, setSortBy] = useState<'recommend' | 'latest'>('recommend');
  const perPage = 5;
  const [page, setPage] = useState(1);

  const handleSortByRecommend = () => {
    setSortBy('recommend');
  };

  const handleSortByLatest = () => {
    setSortBy('latest');
  };
  console.log(dummys);
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
    <div className="my-11">
      <div className="flex justify-between my-8">
        <div className=" font-bold text-[28px]">{title}</div>
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

      {slicedDummys.map(post => (
        <div key={post.id}>
          <div className="flex">
            <Image
              src={post.profileImg}
              alt={post.nickname}
              width={48}
              height={48}
              className=" mr-2 w-12 h-12 border rounded-full"
            />
            <div>
              <div className="flex items-center mr-2 text-neutral-80 text-xl font-medium">
                <div className="mr-[6px]">{post.nickname}</div>
                <Image
                  src={post.badge}
                  alt="badge"
                  width={20}
                  height={20}
                  className="w-[16.25px] h-[20px]"
                />
              </div>

              <div className="flex text-neutral-40 font-medium ">
                <div>{post.major}</div>
                <div>・</div>
                <div>{post.createdAt.toISOString().split('T')[0]}</div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-0 border border-neutral-30 rounded-2xl p-8 my-4">
            <div className="flex justify-evenly mb-5">
              {post.thumbnail.map((imageUrl, index) => (
                <div
                  key={index}
                  className="border rounded-2xl border-neutral-30 w-[297px] h-[222.75px] mr-5"
                >
                  <Image
                    src={imageUrl}
                    alt={`Thumbnail ${index}`}
                    width={297}
                    height={222.75}
                  />
                </div>
              ))}
            </div>
            <div className="font-bold text-[26px] mb-[14px]">{post.title}</div>
            <div className="line-clamp-5 mb-[21.25px] text-lg text-neutral-80">
              {post.content}
            </div>
            <div className="flex justify-around border rounded-xl border-neutral-30 p-[10px] h-[68px]">
              <div className="flex items-center h-12 justify-evenly w-full text-neutral-60 font-medium text-lg">
                <div className="flex items-center ">
                  <Image
                    src="/images/like.png"
                    alt="Star Image"
                    width={24}
                    height={24}
                    className="mr-[6px]"
                  />
                  <div>{post.likes}</div>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/chat.png"
                    alt="Star Image"
                    width={24}
                    height={24}
                    className="mr-[6px]"
                  />
                  <div>{post.commentCounts}</div>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/eye.png"
                    alt="Star Image"
                    width={24}
                    height={24}
                    className="mr-[6px]"
                  />
                  <div>{post.hits}</div>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/bookmark.png"
                    alt="Star Image"
                    width={24}
                    height={24}
                    className="mr-[6px]"
                  />
                  <div>{post.bookmarks}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default FreeCard;
