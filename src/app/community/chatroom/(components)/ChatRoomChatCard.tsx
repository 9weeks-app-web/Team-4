import Image from 'next/image';
import BadgeImage from '../../(components)/imageComponents/Badge';
import ProfileImage from '../../(components)/imageComponents/Profile';
import { Content } from '../../types/chat';

interface ChatRoomProps {
  dummy: Content;
}

const ChatRoomChatCard: React.FC<ChatRoomProps> = ({ dummy }) => {
  return (
    <div className="flex font-medium mb-5">
      <ProfileImage src={dummy.profileImg} alt={dummy.id} />
      <div>
        <div className="flex ml-[10px]">
          <div className="mr-[6px]">{dummy.id}</div>
          <BadgeImage src={dummy.badge} />
        </div>
        <div className="p-[14px] bg-primary-5 ">{dummy.content}</div>
      </div>
      <div className="text-neutral-40  text-xs flex items-end ml-2">
        {dummy.date.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
        })}
      </div>
    </div>
  );
};

export default ChatRoomChatCard;
