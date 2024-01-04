'use client';
import { usePathname } from 'next/navigation';
import BoardCard from '../(components)/AllBoradCard';

const CommunityPage = () => {
  const pathname = usePathname();
  const category = pathname.split('/')[2]; // Assuming the category is the third part of the path

  let boardTitle = '';
  if (category === 'qna') {
    boardTitle = 'QnA';
  } else if (category === 'freesubject') {
    boardTitle = '자유주제';
  } else if (category === 'jobboard') {
    boardTitle = '직무별게시판';
  }
  // Add more conditions for other categories...

  return <BoardCard title={boardTitle} />;
};

export default CommunityPage;
