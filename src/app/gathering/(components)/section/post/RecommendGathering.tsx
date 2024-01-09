import ThumbnailGatheringCard from '../../card/ThumbnailGatheringCard';

const RecommendGathering = () => {
  return (
    <section className="flex flex-col w-full px-[calc((100%-1200px)/2)] my-[200px] py-[76px] font-bold bg-primary-5">
      <p className="mb-5 text-neutral-30">프로젝트 추천</p>
      <h3 className="text-[28px] leading-8">지금 보고있는</h3>
      <h3 className="text-[28px] leading-8">
        프로젝트와 유사한 프로젝트들이에요
      </h3>
      <div className="flex gap-[30px] w-full mt-12">
        <ThumbnailGatheringCard />
        <ThumbnailGatheringCard />
        <ThumbnailGatheringCard />
      </div>
    </section>
  );
};

export default RecommendGathering;
