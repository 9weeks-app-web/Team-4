import Link from 'next/link';
import clsx from 'clsx';

interface ButtonBasicProps {
  content: string;
  style?: string[];
  link?: string;
  theme?: 'primary' | 'neutral';
}

const ButtonBasic = ({
  content,
  style,
  link = '/gathering/project/12',
  theme = 'primary',
}: ButtonBasicProps) => {
  const className = clsx(
    'px-[30px]',
    'py-[15px]',
    'text-[18px]',
    'rounded-[12px]',
    'font-medium',
    theme === 'primary' && [
      'text-neutral-0',
      'bg-primary-100',
      'hover:bg-primary-80',
      'active:bg-primary-90',
    ],
    theme === 'neutral' && [
      'text-neutral-60',
      'bg-neutral-10',
      'hover:text-neutral-0',
      'hover:bg-primary-80',
      'active:bg-primary-90',
    ],
    style,
  );

  return link ? (
    <Link className="w-fit" href={link}>
      <button className={className}>{content}</button>
    </Link>
  ) : (
    <button className={className}>{content}</button>
  );
};

export default ButtonBasic;
