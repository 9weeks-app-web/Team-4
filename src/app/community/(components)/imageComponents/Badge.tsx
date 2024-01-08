import Image from 'next/image';

interface BadgeImageProps {
  src: string;
}

const BadgeImage: React.FC<BadgeImageProps> = ({ src }) => {
  return (
    <Image
      src={src}
      alt="badge"
      width={20}
      height={20}
      className="w-[16.25px] h-[20px]"
    />
  );
};

export default BadgeImage;
