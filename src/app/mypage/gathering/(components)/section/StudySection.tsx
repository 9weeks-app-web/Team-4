import BasicButton from '@/app/mypage/(components)/button/BasicButton';
import GatheringCard from '../card/GatheringCard';
import SelectBoxButton from '@/app/mypage/(components)/button/SelectBoxButton';
const StudySection = () => {
  return (
    <>
      <div className="flex items-center justify-between pt-4">
        <div className="flex space-x-[18px]">
          <BasicButton color="gray" content="저장한 모임" />
          <BasicButton color="gray" content="내가 쓴 모임" />
          <BasicButton color="blue" content="지원한 모임" />
        </div>
        <div className="flex justify-end space-x-4 py-[24px]">
          <SelectBoxButton options={['최신순', '오래된순', '인기순']} />
        </div>
      </div>
      <div className="mt-6 grid gap-6">
        <GatheringCard />
        <GatheringCard />
        <GatheringCard />
        <GatheringCard />
        <GatheringCard />
        <GatheringCard />
        <GatheringCard />
      </div>
    </>
  );
};

export default StudySection;
