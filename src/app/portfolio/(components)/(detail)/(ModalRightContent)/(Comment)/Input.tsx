'use client';

import Image from 'next/image';
import { useState } from 'react';

const CommentInput = ({
  profileImg = '',
  userId,
  userNickname = '',
  reComment = false,
}: {
  profileImg?: string;
  userId: number;
  userNickname?: string;
  reComment?: boolean;
}) => {
  const [bookmarkList, setBookmarList] = useState<string[]>([]);
  const [text, setText] = useState<string>('');
  const [openBookmarkList, setOpenBookmarkList] = useState<boolean>(false);
  const bookmarks = [
    '데스크 리서치',
    '유저 리서치',
    '퍼소나',
    '져니맵',
    'UX전략',
    '브랜딩',
    '와이어프레임',
    '시스템 가이드',
    'GUI',
    '프로토타입',
  ];
  return (
    <div className="h-fit">
      {profileImg !== '' && userNickname !== '' && (
        <div className="flex mt-[46px]">
          <Image
            src={profileImg}
            alt="유저 프로필 이미지"
            width={24}
            height={24}
            className="rounded-xl"
          />
          <div className="ml-[6px]">{userNickname}</div>
        </div>
      )}

      <div
        className={`  ${
          reComment ? `` : `w-[310px]`
        } min-h-[178px] bg-background-5  rounded-xl mt-[7px]`}
      >
        <div className="w-full min-h-[130px] bg-background-5 rounded-xl ">
          <div className="w-full mt-[8px] p-[20px] flex flex-wrap">
            {bookmarkList.map((e, index) => (
              <div
                key={index}
                className="text-primary-100 mr-[8px] mb-[8px] bg-primary-20 border border-primary-70 rounded-full px-[20px] py-[12px] w-fit h-[38px] flex justify-center items-center"
              >
                {e}
              </div>
            ))}
          </div>
          <input
            placeholder={
              reComment ? '답글을 입력해주세요' : '댓글을 입력해주세요'
            }
            onChange={e => {
              if (e && e.target && e.target.value) {
                setText(e.target.value);
              }
            }}
            className="p-[20px] w-full h-full bg-background-5 rounded-xl "
          />
        </div>
        <div className="flex w-full min-h-[48px] items-center">
          <button
            className="flex h-full items-center ml-2 p-[10px]"
            onClick={() => {
              setOpenBookmarkList(prev => !prev);
            }}
          >
            <Image
              src="/portfolios/bookmark.svg"
              width={16}
              height={16}
              alt="북마크로 질문 버튼"
            />
            <div className="ml-[4px] text-neutral-50 font-medium">
              북마크로 질문
            </div>
          </button>
          {text === '' ? (
            <button className="ml-auto mr-[8px]" disabled>
              <Image
                src="/portfolios/comment_upload.svg"
                alt="업로드 버튼"
                width={28}
                height={28}
                className={`ml-auto`}
              />
            </button>
          ) : (
            <button className="ml-auto mr-[8px]">
              <Image
                src="/portfolios/upload_blue.svg"
                alt="업로드 버튼"
                width={28}
                height={28}
                className={`ml-auto`}
              />
            </button>
          )}
        </div>
      </div>
      {openBookmarkList && (
        <div className="mt-[30px]">
          <div>어떤 질문을 하고 싶으세요?</div>
          <div className="mt-[6px] text-xs text-[#808080]">
            아래 키워드를 선택해 질문해보세요.
          </div>
          <div className="flex flex-wrap mt-[20px]">
            {bookmarks.map((e, index) => (
              <button
                key={index}
                className={`${
                  bookmarkList.find(element => element === e)
                    ? `text-primary-100 bg-primary-20 border border-primary-70`
                    : `text-neutral-60 bg-neutral-0 border border-stroke-10`
                } mt-[8px] mr-[8px] rounded-full px-[20px] py-[12px] w-fit h-[38px] flex justify-center items-center`}
                onClick={() => {
                  if (bookmarkList.find(element => element === e)) {
                    const filterBookmark = bookmarkList.filter(book => {
                      return book !== e;
                    });
                    setBookmarList(prev => [...filterBookmark]);
                  } else {
                    setBookmarList(prev => [...prev, e]);
                  }
                }}
              >
                {e}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentInput;
