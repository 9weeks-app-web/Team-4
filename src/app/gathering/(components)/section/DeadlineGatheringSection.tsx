import Button1 from '../button/Button1';
import LargeGatherigCard from '../card/LargeGatheringCard';

const DeadlineGatheringSection = () => {
  return (
    <section className="w-full pl-[20%]">
      <div className="flex py-4">
        <h3 className="w-48 text-2xl break-keep">
          마감이 임박한 모임들이에요!
        </h3>
        <div className="self-end">
          <Button1 content={`로그인 후 관심사 추천받기 >`} />
        </div>
      </div>
      <div className="flex gap-4 mt-4 overflow-scroll">
        <LargeGatherigCard />
        <LargeGatherigCard />
        <LargeGatherigCard />
      </div>
    </section>
  );
};

export default DeadlineGatheringSection;
