import ProgressBar from '../../bar/ProgressBar';

const ProfilePerfectionCard = () => {
  return (
    <div className="border-[1px] border-neutral-20 rounded-[12px] bg-neutral-0 p-6 mt-[14px]">
      <div className="pb-[20px]">
        <span className="font-bold text-[16px]">프로필 완성도</span>
        <span className="font-bold text-[16px] text-primary-100 ml-[8px]">
          3단계
        </span>
      </div>
      <ProgressBar progress={38} />
      <div className="text-right text-[12px] text-primary-100 pt-[5px]">
        <span>완성까지 5단계 남았어요!</span>
      </div>
    </div>
  );
};
export default ProfilePerfectionCard;
