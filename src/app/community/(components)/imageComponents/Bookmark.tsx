import React, { useState } from 'react';
import Image from 'next/image';

interface BookMarkButtonProps {
  bookmarks: number;
}

const BookMarkButton: React.FC<BookMarkButtonProps> = ({ bookmarks }) => {
  const [bookHovered, setBookHovered] = useState(false);

  return (
    <div
      className="flex items-center cursor-pointer px-[77px] py-[11px] rounded-lg hover:bg-background-orange"
      onMouseEnter={() => setBookHovered(true)}
      onMouseLeave={() => setBookHovered(false)}
    >
      <Image
        src={
          bookHovered
            ? '/images/community/bookmark_hover.png'
            : '/images/community/bookmark.png'
        }
        alt="BookMark Image"
        width={24}
        height={24}
        className="mr-[6px]"
      />
      <div
        className={` ${
          bookHovered ? ' text-hover-orange' : ''
        } text-sm font-medium`}
      >
        {bookmarks}
      </div>
    </div>
  );
};

export default BookMarkButton;
