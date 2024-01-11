const ContactTimeCard = () => {
  return (
    <div className="border-[1px] border-neutral-20 rounded-[12px] mt-[14px] bg-neutral-0 p-6">
      <div className="">
        <span className="text-[16px] font-medium">평균 응답시간</span>
        <span className="text-[14px] font-normal float-right">20분</span>
      </div>
      <div className="mt-4">
        <span className="text-[16px] font-semibold">연락 가능시간</span>
        <span className="text-[14px] font-normal float-right">1:00~4:30PM</span>
      </div>
    </div>
  );
};

export default ContactTimeCard;
