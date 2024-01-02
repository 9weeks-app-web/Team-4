import Button1 from '../../button/Button1';
import RetrospectCard from '../../card/RetrospectCard';

const RetrospectSection = () => {
  return (
    <section className="w-full pl-[20%]">
      <p className="pb-4 text-neutral-30">모임 회고/결과물</p>
      <div className="flex">
        <div className="flex flex-col gap-4 max-w-[20%]">
          <h3 className="w-56 text-2xl break-keep">
            모임의 회고/결과물을 모아봤어요
          </h3>
          <div>프로젝트/스터디 결과물을 인기순으로 제공해드려요</div>
          <Button1 content={`회고 더보러 가기 >`} />
        </div>
        <div className="flex gap-[30px] w-full ml-[5%] overflow-auto">
          <RetrospectCard />
          <RetrospectCard />
          <RetrospectCard />
          <RetrospectCard />
        </div>
      </div>
    </section>
  );
};

export default RetrospectSection;
