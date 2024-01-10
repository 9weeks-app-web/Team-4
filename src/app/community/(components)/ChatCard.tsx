import Image from 'next/image';
import { ChatCard } from '../types/chat';
import '../style.css';

interface CardProps {
  dummy: ChatCard;
}

const ChatCard: React.FC<CardProps> = ({ dummy }) => {
  return (
    <div className="w-[483px] h-[505px] flex flex-col justify-center items-center">
      <div className=" border border-neutral-10 rounded-xl w-full h-[437px] mb-6 ">
        <div className="ml-[22px] mt-6 mr-[22px] h-[70px] mb-6">
          <div className="px-2 py-[6px] bg-neutral-5 text-neutral-60 text-sm font-semibold inline-block mb-3">
            {dummy.tag}
          </div>
          <div className="flex justify-between w-full">
            <div className=" text-neutral-100 text-lg font-bold">
              {dummy.title}
            </div>
            <div className="flex items-center">
              <Image
                src="/images/community/people.png"
                alt="people"
                width={24}
                height={24}
                className="mr-[6px] w-[14px] h-[18px]"
              />
              <div className=" text-primary-80">{dummy.people}</div>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-10"></div>

        <div className="ml-[22px] mt-5 mr-[13px] h-[285px] overflow-y-auto mb-6">
          {dummy.contents.map((detail, index) => (
            <div key={index} className="flex items-end mb-[18px]">
              <div className=" font-medium mr-2">
                <p className="mb-2">{detail.id}</p>
                <div className=" bg-primary-5 rounded-md p-[14px] max-w-[350px] inline-block">
                  {detail.content}
                </div>
              </div>
              <div className=" text-neutral-40 text-xs">
                {detail.date.toLocaleTimeString('en-US', {
                  hour12: false,
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="px-4 py-[10px] rounded-md bg-primary-100 text-neutral-0 w-[133px] h-11">
        채팅방 참여
      </button>
    </div>
  );
};

export default ChatCard;
