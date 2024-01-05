'use client';

import { useState } from 'react';
import PortfoliosCenterComponentContainer from './(CenterContent)';
import PortfoliosLeftComponentContainer from './(leftSideContent)';
import PortfoliosRightComponentContainer from './(rightSideContent)';

const PortfoliosUploadCompoent = () => {
  const [bookmarks, setBookmarks] = useState<string[]>([
    '1',
    '2',
    '',
    '3',
    '',
    '4',
  ]);
  const [pictures, setPictures] = useState<string[]>([
    '/portfolis/screenshot.png',
    '/portfolis/screenshot.png',
    '/portfolis/screenshot.png',
    '/portfolis/screenshot.png',
    '/portfolis/screenshot.png',
  ]);
  return (
    <div className="w-full h-full flex">
      <PortfoliosLeftComponentContainer
        bookmarks={bookmarks}
        pictures={pictures}
      />
      <PortfoliosCenterComponentContainer />
      <PortfoliosRightComponentContainer />
    </div>
  );
};

export default PortfoliosUploadCompoent;
