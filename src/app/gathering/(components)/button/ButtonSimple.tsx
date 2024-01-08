import Image from 'next/image';
import Link from 'next/link';

interface ButtonSimpleProps {
  content: string;
  link?: string;
}

const ButtonSimple = ({ content, link }: ButtonSimpleProps) => {
  return (
    <button className="flex items-center px-2 py-1 text-lg text-neutral-50 font-mediume rounded-xl hover:text-neutral-70">
      {link ? <Link href={link}>{content}</Link> : content}
      <Image
        src="/images/gathering/right_arrow2.svg"
        width={24}
        height={24}
        alt="right arrow"
      />
    </button>
  );
};

export default ButtonSimple;
