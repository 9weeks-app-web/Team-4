import MediumHead from '@/app/mypage/(components)/head/MediumHead';

const ContactTimeSection = () => {
  return (
    <div className="mt-[148px]">
      <MediumHead title="연락 가능 시간 설정" content="" />
      <div className="mt-10 border-[1px] border-neutral-10 rounded-[5px] px-[28px] py-[24px]">
        <div className="flex items-center space-x-3">
          <input
            className="rounded-[6px] border border-neutral-10 px-2 py-1 text-primary-100"
            id="start-time"
            placeholder="00:00"
            type="time"
          />
          <span className="text-[18px]">~</span>
          <input
            className="rounded-[6px] border border-neutral-10 px-2 py-1 text-primary-100"
            id="end-time"
            placeholder="00:00"
            type="time"
          />
          <span className="text-[18px]">까지</span>
          <p className="text-[18px] font-medium text-neutral-50">
            연락하는 시간으로 설정합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactTimeSection;
