import CollectionSection from './(components)/section/CollectionSection';
import LikeSection from './(components)/section/LikeSection';
import LargeHead from '../(components)/head/LargeHead';
import TabComponent from '../(components)/button/TabButton';
import BasicButton from '@/app/mypage/(components)/button/BasicButton';

const InterestPortfolioPage = () => {
  const data = [
    {
      id: 0,
      title: '컬렉션',
      section: <CollectionSection />,
    },
    {
      id: 1,
      title: '좋아요',
      section: <LikeSection />,
    },
  ];

  return (
    <div className="max-w-[1152px]">
      <div className="pb-[34px]">
        <LargeHead content="관심 포트폴리오" />
      </div>
      <TabComponent data={data} />
    </div>
  );
};

export default InterestPortfolioPage;
