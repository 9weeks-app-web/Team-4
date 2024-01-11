import { ChatCard } from '../../types/chat';

interface DummyProps {
  dummy: ChatCard;
  onClick: () => void;
}

const ChatRoomCard: React.FC<DummyProps> = ({ dummy, onClick }) => {
  const date = dummy.contents[dummy.contents.length - 1].date;

  return (
    <div
      className=" w-full h-[128px] p-3 rounded-md mb-[10px] bg-neutral-5 overflow-y-auto cursor-pointer"
      onClick={onClick}
    >
      <div className=" font-semibold mb-[10px]">{dummy.title}</div>
      <div className=" text-sm mb-[10px] line-clamp-2">{dummy.content}</div>
      <div className="flex text-neutral-50 text-sm">
        <div className="mr-[14px]">{dummy.people}</div>
        <div className="mr-[14px]">|</div>
        <div>
          {date.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </div>
  );
};
export default ChatRoomCard;
