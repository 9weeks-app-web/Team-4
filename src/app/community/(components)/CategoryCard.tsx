'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { CommunityDetail } from '@/types/community';
import LikeButton from './imageComponents/Like';
import ChatButton from './imageComponents/Chat';
import EyeButton from './imageComponents/Eye';
import BookMarkButton from './imageComponents/Bookmark';
import BadgeImage from './imageComponents/Badge';
import EmojiModal from './emojiModal/EmojiModal';
import Link from 'next/link';
import getCategory from './FindCategory';
import ProfileImage from './imageComponents/Profile';

export interface BoardProps {
  post: CommunityDetail;
}

const FreeCard: React.FC<BoardProps> = ({ post }) => {
  const [showEmojiModal, setShowEmojiModal] = useState(false);

  const handleLikeClick = () => {
    setShowEmojiModal(!showEmojiModal);
  };
  const handleEmojiClick = () => {
    setShowEmojiModal(false);
  };

  const getTitle = getCategory({ category: post.category });

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowEmojiModal(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showEmojiModal]);

  return (
    <div className="my-11">
      <div key={post.id}>
        <div className="flex">
          <ProfileImage src={post.profileImg} alt={post.nickname} />
          <div>
            <div className="flex items-center mr-2 text-neutral-80 text-xl font-medium">
              <div className="mr-[6px]">{post.nickname}</div>
              <BadgeImage src={post.badge} />
            </div>

            <div className="flex text-neutral-40 font-medium ">
              <div>{post.major}</div>
              <div>・</div>
              <div>{post.createdAt.toISOString().split('T')[0]}</div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-0 border border-neutral-30 rounded-2xl p-8 my-4">
          <Link href={`/community/${getTitle}/${post.id}`}>
            <div className="font-bold text-[26px] mb-[14px]">{post.title}</div>

            <div className="line-clamp-5 mb-[21.25px] text-lg text-neutral-80 whitespace-pre-line">
              {post.content}
            </div>
            <div className="flex justify-evenly mb-5 relative">
              {post.thumbnail.slice(0, 3).map((imageUrl, index) => (
                <div
                  key={index}
                  className="border rounded-2xl border-neutral-30 w-[297px] h-[222.75px] mr-5 "
                >
                  <Image
                    src={imageUrl}
                    alt={`Thumbnail ${index}`}
                    width={297}
                    height={222.75}
                    className="w-[297px] h-[222.75px] rounded-2xl"
                  />
                  {post.thumbnail[3] && (
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-0 text-[42px] font-semibold bg-neutral-100 bg-opacity-20 left-[66.6%] w-[290px] h-[222.75px] rounded-2xl">
                      +{post.thumbnail.length - 3}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex mb-5 h-8">
              {post.tags?.map((tag, index) => (
                <div
                  key={index}
                  className=" bg-neutral-5 px-[10px] py-[6px] rounded-[30px] text-neutral-60 text-sm font-medium mr-[6px]"
                >
                  #{tag}
                </div>
              ))}
            </div>
          </Link>
          <div className="flex justify-around border rounded-xl border-neutral-30 p-[10px] h-[68px]">
            <div className="flex items-center h-12 justify-evenly  text-neutral-60 font-medium text-lg relative">
              <LikeButton
                postLikes={post.likes}
                onLikeClick={handleLikeClick}
              />

              <EmojiModal
                showEmojiModal={showEmojiModal}
                onClick={handleEmojiClick}
              />
            </div>

            <ChatButton commentCounts={post.commentCounts} />
            <EyeButton hits={post.hits} />
            <BookMarkButton bookmarks={post.bookmarks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeCard;
