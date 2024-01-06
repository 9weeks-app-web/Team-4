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
    'hover:text-neutral-60',
    'hover:bg-neutral-10',
    'text-neutral-0',
    'bg-primary-90',
    style,
  );

  return (
    <button className={className}>
      {link ? <Link href={link}>{content}</Link> : content}
    </button>
  );
};

export default ButtonBasic;
