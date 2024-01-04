'use client';
import { usePathname } from 'next/navigation';
import BoardCard from '../(components)/AllBoradCard';
import SurveyCard from '../(components)/SurveyCard';

const CommunityPage = () => {
  const pathname = usePathname();
  const category = pathname.split('/')[2];

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

  return <BoardCard title={boardTitle} />;
};

export default CommunityPage;
