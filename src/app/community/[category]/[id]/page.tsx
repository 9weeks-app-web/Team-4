'use client';
import { usePathname } from 'next/navigation';
import {
  CommunityDummys,
  JobDummys,
  QnADummys,
} from '../../api/community/(dummys)';
import Image from 'next/image';
import BadgeImage from '../../(components)/imageComponents/Badge';
import ProfileImage from '../../(components)/imageComponents/Profile';
import { useEffect, useRef, useState } from 'react';
import LikeButton from '../../(components)/imageComponents/Like';
import ChatButton from '../../(components)/imageComponents/Chat';
import EyeButton from '../../(components)/imageComponents/Eye';
import BookMarkButton from '../../(components)/imageComponents/Bookmark';
import EmojiModal from '../../(components)/emojiModal/EmojiModal';
import { DummyComment } from '../../api/community/(dummys)/comment';
import CommentCard from '../../(components)/Comment';
import ShareIcon from '../../(components)/imageComponents/shareIcons';

const Details = () => {
  const pathname = usePathname();
  const category = pathname.split('/')[2];
  const id = pathname.split('/')[3];

  const [showEmojiModal, setShowEmojiModal] = useState(false);
  const [shareDropdownOpen, setShareDropdownOpen] = useState(false);

  const handleLikeClick = () => {
    setShowEmojiModal(!showEmojiModal);
  };
  const handleEmojiClick = () => {
    setShowEmojiModal(false);
  };

  const handleShareClick = () => {
    setShareDropdownOpen(!shareDropdownOpen);
  };

  const handleCopyLink = () => {
    setShareDropdownOpen(false);
  };

  const handleFacebookShare = () => {
    setShareDropdownOpen(false);
  };

  const handleTwitterShare = () => {
    setShareDropdownOpen(false);
  };

  const handleLinkedInShare = () => {
    setShareDropdownOpen(false);
  };

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

  const dummy =
    category === 'freesubject'
      ? CommunityDummys.find(item => item.id === Number(id))
      : category === 'qna'
        ? QnADummys.find(item => item.id === Number(id))
        : category === 'jobboard'
          ? JobDummys.find(item => item.id === Number(id))
          : null;
  if (!dummy) {
    return <div>Not Found</div>;
  }

  const dummyComment = DummyComment;
  return (
    <div>
      <div className="flex mb-[30px]">
        <ProfileImage src={dummy?.profileImg} alt={dummy?.nickname} />
        <div>
          <div className="flex">
            <div className="mr-2 text-neutral-80 text-xl font-medium">
              {dummy.nickname}
            </div>
            <BadgeImage src={dummy.badge} />
          </div>
          <div className="flex text-neutral-40 font-medium ">
            <div>{dummy.major}</div>
            <div>・</div>
            <div>{dummy.createdAt.toISOString().split('T')[0]}</div>
          </div>
        </div>
      </div>
      <div className=" bg-neutral-0  border-neutral-30 rounded-2xl my-4">
        <div className=" font-bold text-[28px] mb-5">{dummy.title}</div>

        <div className=" font-medium text-xl mb-[84px] text-neutral-100 whitespace-pre-line">
          {dummy.content}
        </div>
        <div className="flex justify-between items-center mb-4 text-lg">
          <div className="flex items-center px-4 py-[10px] text-neutral-80 relative z-20">
            <Image
              src="/images/community/Vector.png"
              alt="share"
              width={19.25}
              height={21}
              className="mr-4 h-[21px]"
            />

            <button onClick={handleShareClick}>공유하기</button>
            {shareDropdownOpen && (
              <div className="absolute w-[170px] h-[224px] py-5 top-full bg-white border border-neutral-10 rounded-xl shadow-md bg-neutral-0 flex flex-col justify-center items-center text-neutral-40 font-medium text-lg">
                <div className="w-[170px]">
                  <div className="flex justify-center items-center px-5 py-[6px] ">
                    <ShareIcon item="link" />
                    <button
                      className=" w-full text-left"
                      onClick={handleCopyLink}
                    >
                      링크 복사
                    </button>
                  </div>
                  <div className="flex justify-center items-center px-5 py-[6px] ">
                    <ShareIcon item="kakao" />
                    <button
                      className=" w-full text-left"
                      onClick={handleFacebookShare}
                    >
                      카카오톡 공유
                    </button>
                  </div>
                  <div className="flex justify-center items-center px-5 py-[6px] ">
                    <ShareIcon item="facebook" />
                    <button
                      className="  w-full text-left"
                      onClick={handleTwitterShare}
                    >
                      페이스북 공유
                    </button>
                  </div>
                  <div className="flex justify-center items-center px-5 py-[6px]">
                    <ShareIcon item="x_fill" />
                    <button
                      className=" w-full text-left"
                      onClick={handleLinkedInShare}
                    >
                      엑스 공유
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className=" text-neutral-40">신고하기</div>
        </div>
        <div className="flex justify-between items-center mb-12 bg-primary-10 rounded-xl p-5 h-[92px]">
          <div className="flex justify-between w-full h-[52px]">
            <div className="flex">
              <ProfileImage src={dummy.profileImg} alt={dummy.nickname} />
              <div>
                <div className="flex">
                  <div className="mr-2">{dummy.nickname}</div>
                  <BadgeImage src={dummy.badge} />
                </div>
                <div className="flex">
                  <div>{dummy.major}</div>
                </div>
              </div>
            </div>
            <button className="flex justify-center items-center text-lg font-medium bg-primary-80 rounded-[10px] text-neutral-0 px-4 py-[10px]">
              <Image
                src="/images/community/plus.png"
                alt="plus"
                width={12}
                height={12}
                className="mr-4 flex"
              />
              팔로우
            </button>
          </div>
        </div>
        <div className="flex justify-center border rounded-2xl border-neutral-30 p-[10px] mb-[47px] h-[68px] z-10">
          <div className="flex items-center h-12 justify-evenly  text-neutral-60 font-medium text-lg relative">
            <LikeButton postLikes={dummy.likes} onLikeClick={handleLikeClick} />

            <EmojiModal
              showEmojiModal={showEmojiModal}
              onClick={handleEmojiClick}
            />
          </div>
          <ChatButton commentCounts={dummy.commentCounts} />
          <EyeButton hits={dummy.hits} />
          <BookMarkButton bookmarks={dummy.bookmarks} />
        </div>
        <div className="flex items-center mb-12 relative">
          <ProfileImage src={dummy.profileImg} alt={dummy.nickname} />

          <input
            type="text"
            placeholder="댓글을 입력하세요"
            className="py-[10px] pr-[10px] pl-4 w-full rounded-2xl bg-background-5"
          />
          <Image
            src="/images/community/btn.png"
            alt="comment button"
            width={28}
            height={28}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
          />
        </div>
        <CommentCard dummyComment={dummyComment} />
      </div>
    </div>
  );
};

export default Details;
