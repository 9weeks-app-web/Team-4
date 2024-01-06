import clsx from 'clsx';
import Link from 'next/link';

interface ButtonRound {
  content: string;
  theme: 'white' | 'primary' | 'neutral';
  link?: string;
}

const ButtonRound = ({ content, theme, link }: ButtonRound) => {
  const className = clsx(
    'px-[30px]',
    'py-[15px]',
    'text-[18px]',
    'border',
    'rounded-[100px]',
    'bg-transparent',
    theme === 'white' && [
      'border-neutral-0',
      'text-neutral-0',
      'hover:bg-primary-0',
      'hover:text-neutral-90',
      'active:bg-neutral-5',
    ],
    theme === 'primary' && [
      'border-primary-80',
      'text-primary-80',
      'hover:text-neutral-0',
      'hover:bg-primary-80',
      'active:bg-primary-90',
    ],
    theme === 'neutral' && [
      'bg-neutral-70',
      'text-neutral-0',
      'hover:bg-neutral-80',
      'active:bg-neutral-90',
    ],
  );

  return (
    <button className={className}>
      {link ? <Link href={link}>{content}</Link> : content}
    </button>
  );
};

export default ButtonRound;
