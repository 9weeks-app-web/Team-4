import BadgeCard from './card/BadgeCard';
import RepresentBadgeSection from './section/RepresentBadgeSection';
import LargeHead from '../../(components)/head/LargeHead';
import BadgeListSection from './section/BadgeListSection';

const BadgePage = () => {
  return (
    <div className="max-w-[1152px]">
      <div className="mb-[94px]">
        <LargeHead content="보유 뱃지" />
      </div>
      <RepresentBadgeSection />
      <BadgeListSection />
    </div>
  );
};

export default BadgePage;
