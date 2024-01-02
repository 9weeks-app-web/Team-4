import Button1 from '../../button/Button1';

const AdvertisementSection = () => {
  return (
    <section className="flex flex-col w-[60%] my-28">
      <p className="text-neutral-30">UXUI 디자인</p>
      <div className="flex justify-between py-4">
        <h3 className="w-56 text-2xl break-keep">
          모임 참여 전 내 실력을 높이고 싶다면?
        </h3>
        <div className="self-end">
          <Button1 content="더보기 >" />
        </div>
      </div>
      <div className="h-[300px] mt-4 bg-primary-10">광고 배너 이미지</div>
    </section>
  );
};

export default AdvertisementSection;
