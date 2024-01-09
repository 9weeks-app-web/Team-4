import Image from 'next/image';

const ChatCard = () => {
  return (
    <div className="w-[483px] h-[505px] flex flex-col justify-center items-center">
      <div className=" border border-neutral-10 rounded-xl h-[437px] mb-6">
        <div className="ml-[22px] mt-6 mr-[22px] h-[70px] mb-6">
          <div className="px-2 py-[6px] bg-neutral-5 text-neutral-60 text-sm font-semibold inline-block mb-3">
            서비스 기획
          </div>
          <div className="flex justify-between w-full">
            <div className=" text-neutral-100 text-lg font-bold">
              서비스 기획하는 사람들
            </div>
            <div className="flex items-center">
              <Image
                src="/images/community/people.png"
                alt="people"
                width={24}
                height={24}
                className="mr-[6px] w-[14px] h-[18px]"
              />
              <div className=" text-primary-80">999</div>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-10"></div>
        <div className="ml-[22px] mt-5 mr-[22px] h-[70px] mb-6">
          <div className="flex items-end mb-[18px]">
            <div className=" font-medium mr-2">
              <p className="mb-2">루나</p>
              <div className=" bg-primary-5 rounded-md p-[14px] inline-block">
                내일부터 출근 안 해서 오늘 아니면 내년이에요
              </div>
            </div>
            <div className=" text-neutral-40 text-xs">17:12</div>
          </div>
          <div className="flex items-end  mb-[18px]">
            <div className=" font-medium mr-2">
              <p className="mb-2">저스틴</p>
              <div className=" bg-primary-5 rounded-md p-[14px] inline-block">
                아하
              </div>
            </div>
            <div className=" text-neutral-40 text-xs">17:12</div>
          </div>
          <div className="flex items-end  mb-[18px]">
            <div className=" font-medium mr-2">
              <p className="mb-2">사벤져스</p>
              <div className=" bg-primary-5 rounded-md p-[14px] inline-block">
                그렇군요
              </div>
            </div>
            <div className=" text-neutral-40 text-xs">17:12</div>
          </div>
        </div>
      </div>
      <button className="px-4 py-[10px] rounded-md bg-primary-100 text-neutral-0 w-[133px] h-11">
        채팅방 참여
      </button>
    </div>
  );
};

export default ChatCard;
