import Image from 'next/image';
import ProfileImage from '../../(components)/imageComponents/Profile';
import { ChatCard } from '../../types/chat';
import ChatRoomChatCard from './ChatRoomChatCard';
import ChatDummy from '../../api/community/(dummys)/chat';

interface SelectedProps {
  selectedChat: ChatCard;
}

const SelectedChatRoomCard: React.FC<SelectedProps> = ({ selectedChat }) => {
  return (
    <div className="w-[585px] border border-neutral-10 rounded-[20px]">
      <div className="p-6">
        <div className="flex justify-between">
          <div className=" px-2 py-[6px] bg-neutral-5 text-neutral-60 font-semibold text-sm rounded-md inline-block mb-5">
            {selectedChat.tag}
          </div>
          <div className=" text-lg font-medium text-neutral-40">
            채팅방 나가기
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="font-bold text-lg">{selectedChat.title}</div>
          <div className="flex items-center">
            <Image
              src="/images/community/people.png"
              alt="people img"
              width={24}
              height={24}
              className="mr-[6px] w-6 h-6"
            />
            <div className=" text-primary-80 font-medium">
              {selectedChat.people}
            </div>
          </div>
        </div>
      </div>
      <div className="border-y border-neutral-10 p-6 h-[491px] ">
        {selectedChat.contents.map((user, index) => (
          <ChatRoomChatCard key={index} dummy={user} />
        ))}
      </div>
      <div className="relative p-6 h-[100px]">
        <input
          type="text"
          placeholder="댓글을 입력하세요"
          className="py-[10px] pr-[10px] pl-4 w-full rounded-2xl bg-background-5"
        />
        <Image
          src="/images/community/btn.png"
          alt="comment button"
          width={28}
          height={28}
          className="absolute top-[46px] right-10 transform -translate-y-1/2 cursor-pointer"
        />
      </div>
    </div>
  );
};
export default SelectedChatRoomCard;
