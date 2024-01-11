import Image from 'next/image';
interface ShareIconProps {
  item: string;
}

const ShareIcon: React.FC<ShareIconProps> = ({ item }) => {
  return (
    <Image
      src={`/images/community/${item}.png`}
      alt="share"
      width={24}
      height={24}
      className="w-6 h-6 mr-2"
    />
  );
};

export default ShareIcon;
