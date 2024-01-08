import Image from 'next/image';
interface EmojiProps {
  icon: string;
  onClick: () => void;
}

const Emoji: React.FC<EmojiProps> = ({ icon, onClick }) => {
  return (
    <Image
      src={`/images/community/${icon}`}
      alt={icon}
      width={24}
      height={24}
      onClick={onClick}
      className=" cursor-pointer"
    />
  );
};
export default Emoji;
