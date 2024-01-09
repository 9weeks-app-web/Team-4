const GatheringInfoSection = () => {
  return (
    <section className="grid grid-cols-2 grid-flow-row gap-y-[34px] py-12 mb-12 border-y border-neutral-10">
      <GatheringInfo title="모집 마감일" description="2024/ 01/ 01" />
      <GatheringInfo title="모집 인원" description="5명" />
      <GatheringInfo title="모임형태" description="온라인/ 오프라인" />
      <GatheringInfo title="진행기간" description="2024/01/03 - 2024/03/03" />
      <GatheringInfo title="지역/ 위치" description="마곡나루" />
      <GatheringInfo title="정기모임 일정" description="매주 토요일 오후 3시" />
      <GatheringInfo title="연락방법" description="카카오톡 오픈채팅(링크)" />
      <GatheringInfo title="진행기간" description="여행" />
    </section>
  );
};

export default GatheringInfoSection;

interface GatheringInfoProps {
  title: string;
  description: string;
}

const GatheringInfo = ({ title, description }: GatheringInfoProps) => {
  return (
    <div className="flex text-[22px]">
      <span className="min-w-[120px] mr-[46px] text-neutral-40 font-semibold">
        {title}
      </span>
      <span>{description}</span>
    </div>
  );
};
