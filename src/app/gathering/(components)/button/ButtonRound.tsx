import clsx from 'clsx';

interface ButtonRound {
  content: string;
  theme: 'white' | 'primary' | 'neutral';
}

const ButtonRound = ({ content, theme }: ButtonRound) => {
  const className = clsx(
    'px-[30px]',
    'py-[15px]',
    'text-[18px]',
    'border',
    'rounded-[100px]',
    'bg-transparent',
    // 'hover:text-neutral-0',
    // 'hover:bg-primary-90',
    theme === 'white' && ['border-neutral-0', 'text-neutral-0'],
    theme === 'primary' && ['border-primary-80', 'text-primary-80'],
    theme === 'neutral' && ['bg-neutral-70', 'text-neutral-0'],
  );

  return <button className={className}>{content}</button>;
};

export default ButtonRound;
