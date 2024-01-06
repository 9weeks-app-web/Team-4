import clsx from 'clsx';
import Link from 'next/link';

interface ButtonBasic {
  content: string;
  style?: string[];
  link?: string;
}

const ButtonBasic = ({ content, style, link }: ButtonBasic) => {
  const className = clsx(
    'px-[30px]',
    'py-[15px]',
    'text-[18px]',
    'rounded-[12px]',
    'text-neutral-0',
    'bg-primary-100',
    'hover:bg-primary-80',
    'active:bg-primary-90',
    style,
  );

  return (
    <button className={className}>
      {link ? <Link href={link}>{content}</Link> : content}
    </button>
  );
};

export default ButtonBasic;
