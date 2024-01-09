import BasicButton from '@/app/mypage/(components)/button/BasicButton';
const BadgeCard = () => {
  return (
    <div className="w-[213px] h-[240px] bg-neutral-0 rounded-[5px] border-[1px] border-neutral-10">
      <div className="p-[8px]">
        <div className="flex flex-col items-center gap-y-[10px]">
          <span className="w-[45px] h-[21px] text-center bg-[#FFFEF0] text-[#FF9900] font-semibold text-[14px]">
            성공
          </span>
          <div className="w-[73px] h-[73px] rounded-full bg-neutral-10" />
          <h3 className="text-[16px] font-bold">첫 업로드</h3>
          <p className="text-[12px] text-center text-neutral-60">
            포트폴리오 첫 업로드 시<br />
            획득할 수 있습니다.
          </p>
          <div className="w-[123px] align-center items-center text-center bg-primary-10 text-primary-100 text-[12px] rounded-[5px]">
            30,502명 획득
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeCard;
