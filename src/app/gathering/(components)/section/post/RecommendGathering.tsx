import NormalGatherigCard from '@/app/gathering/(components)/card/NormalGatheringCard';

const RecommendGathering = () => {
  return (
    <section className="flex flex-col w-full px-[20%] bg-primary-5 my-[100px] py-[50px]">
      <p className="text-neutral-30">프로젝트 추천</p>
      <h3 className="w-64 py-4 text-2xl break-keep">
        지금 보고있는 프로젝트와 유사한 프로젝트들이에요
      </h3>
      <div className="flex gap-4 w-full mt-4">
        <NormalGatherigCard />
        <NormalGatherigCard />
        <NormalGatherigCard />
      </div>
    </section>
  );
};

export default RecommendGathering;
