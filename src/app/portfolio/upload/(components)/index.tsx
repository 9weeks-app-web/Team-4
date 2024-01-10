'use client';

import { useState } from 'react';
import PortfoliosCenterComponentContainer from './(CenterContent)';
import PortfoliosLeftComponentContainer from './(leftSideContent)';
import PortfoliosRightComponentContainer from './(rightSideContent)';
import Image from 'next/image';

const PortfoliosUploadCompoent = () => {
  const [previewState, setPreviewState] = useState<boolean>(false);
  const [bookmarks, setBookmarks] = useState<string[]>([
    '유저 리서치',
    '퍼소나',
    '저니맵',
  ]);
  const [pictures, setPictures] = useState<string[]>([
    '/portfolios/1.png',
    '/portfolios/2.png',
    '/portfolios/3.png',
    '/portfolios/4.png',
  ]);
  return (
    <div className="w-full h-full flex">
      {previewState ? (
        <PortfoliosLeftComponentContainer
          bookmarks={bookmarks}
          pictures={pictures}
          setPreviewState={setPreviewState}
        />
      ) : (
        <button
          className="w-[56px] h-[56px] p-[10px] mt-[96px] ml-[60px] rounded-xl border-neutral-10 border bg-neutral-0 flex justify-center items-center"
          onClick={() => {
            setPreviewState(prev => !prev);
          }}
        >
          <Image
            src="/portfolios/preview.svg"
            alt="미리보기 열기"
            width={24}
            height={24}
          />
        </button>
      )}

      <PortfoliosCenterComponentContainer
        bookmarks={bookmarks}
        pictures={pictures}
        setPreviewState={setPreviewState}
        previewState={previewState}
      />
      <PortfoliosRightComponentContainer />
    </div>
  );
};

export default PortfoliosUploadCompoent;
