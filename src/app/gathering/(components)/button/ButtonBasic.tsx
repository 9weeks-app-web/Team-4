import clsx from 'clsx';

interface ButtonBasic {
  content: string;
  style?: string[];
}

const ButtonBasic = ({ content, style }: ButtonBasic) => {
  const className = clsx(
    style,
    'px-[30px]',
    'py-[15px]',
    'text-[18px]',
    'rounded-[12px]',
    'hover:text-neutral-60',
    'hover:bg-neutral-10',
    'text-neutral-0',
    'bg-primary-90',
  );

  return <button className={className}>{content}</button>;
};

export default ButtonBasic;
