interface DummyProps {
  category: string;
}

const getCategory: React.FC<DummyProps> = ({ category }) => {
  if (category === '자유주제') {
    return 'freesubject';
  } else if (category === 'QnA') {
    return 'qna';
  } else if (category === '직업별 게시판') {
    return 'jobboard';
  }
  return '';
};
export default getCategory;
