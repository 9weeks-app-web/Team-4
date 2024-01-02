import Button1 from '../../button/Button1';

const GUIDE = [
  {
    title: '목차 배치 순서',
    content: '임팩트가 크고 기여도가 큰 프로젝트 순서로 배치하는게 좋아요!',
  },
  {
    title: '프로젝트 표지',
    content:
      '기여도가 높을수록 면접에서 상세하게 질문하니까 현실적으로 적는게 좋아요.',
  },
  {
    title: '리서치',
    content: '임팩트가 크고 기여도가 큰 프로젝트 순서로 배치하는게 좋아요!',
  },
  {
    title: '비주얼 역량 및 디자인 툴 사용 능력',
    content:
      '임기여도가 높을수록 면접에서 상세하게 질문하니까 현실적으로 적는게 좋아요.',
  },
];

const GatheringGuideSection = () => {
  return (
    <section className="flex flex-col w-[60%]">
      <p className="text-neutral-30">UXUI 디자인</p>
      <div className="flex justify-between py-4">
        <h3 className="w-56 text-2xl break-keep">
          나와 맞는 모임을 어떻게 구할까요?
        </h3>
        <div className="self-end">
          <Button1 content="더보기 >" />
        </div>
      </div>
      <div className="flex gap-4 w-full h-full mt-4">
        {GUIDE.map(({ title, content }) => (
          <div
            key={title}
            className="flex flex-col justify-center gap-2 w-full py-6 px-4 rounded-xl bg-neutral-5"
          >
            <p className="break-keep">{title}</p>
            <p className="text-sm break-keep">{content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GatheringGuideSection;
