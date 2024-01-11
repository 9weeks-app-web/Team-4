import ProfileImage from '../../(components)/imageComponents/Profile';
import { ChatCard } from '../../types/chat';

interface SelectedProps {
  selectedChat: ChatCard;
}

const SelectedChatCard: React.FC<SelectedProps> = ({ selectedChat }) => {
  return (
    <div className="p-[30px] w-[585px] border border-neutral-10 rounded-[20px]">
      <div className=" px-2 py-[6px] bg-neutral-5 text-neutral-60 font-semibold text-sm rounded-md inline-block mb-5">
        {selectedChat.tag}
      </div>
      <div className="font-bold text-[26px] mb-5">{selectedChat.title}</div>
      <div className="text-lg font-medium text-neutral-80 h-[296px] mb-4">
        {selectedChat.content}
      </div>
      <div className="flex w-[228px] h-[72px] mb-[30px]">
        {/* {selectedChat.contents.map()}
        <ProfileImage src={selectedChat.contents.} */}
      </div>

      <div className="flex text-neutral-40 text-xl font-medium mb-10">
        <div className="mr-[14px]">참여자</div>
        <div className="mr-[14px] text-neutral-80">
          {selectedChat.people}/1000명
        </div>
        <div className="mr-[14px]">|</div>
        <div className="mr-[14px]">마지막 채팅</div>
        <div className="text-neutral-80">
          {selectedChat.contents[
            selectedChat.contents.length - 1
          ].date.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
      <button className="w-full h-[60px] px-[18px] py-2 rounded-[10px] bg-primary-80 text-neutral-0 font-medium text-xl">
        참여하기
      </button>
    </div>
  );
};
export default SelectedChatCard;
