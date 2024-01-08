// BadgeImage.tsx
import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={48}
      height={48}
      className="mr-2 rounded-full w-12 h-12"
    />
  );
};

export default ProfileImage;
