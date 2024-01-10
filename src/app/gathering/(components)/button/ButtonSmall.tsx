import Link from 'next/link';
import clsx from 'clsx';

interface ButtonSmallProps {
  content: string;
  style?: string[];
  link?: string;
  theme?: 'primary' | 'neutral';
}

const ButtonSmall = ({
  content,
  style,
  link,
  theme = 'primary',
}: ButtonSmallProps) => {
  const className = clsx(
    'px-5',
    'py-1',
    'text-sm',
    'rounded-[4px]',
    'font-medium',
    theme === 'primary' && [
      'text-primary-90',
      'bg-primary-20',
      'hover:bg-primary-30',
      'active:bg-primary-40',
    ],
    theme === 'neutral' && ['text-neutral-60', 'bg-neutral-10'],
    style,
  );

  return (
    <button className={className}>
      {link ? <Link href={link}>{content}</Link> : content}
    </button>
  );
};

export default ButtonSmall;
