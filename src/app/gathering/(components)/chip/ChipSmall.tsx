import clsx from 'clsx';

interface ChipSmallProps {
  content: string;
  theme?: 'neutral' | 'primary' | 'warning';
}

const ChipSmall = ({ content, theme = 'neutral' }: ChipSmallProps) => {
  const className = clsx(
    theme === 'neutral' && ['text-neutral-60', 'bg-neutral-5'],
    theme === 'warning' && ['text-[#F87272]', 'bg-[#FFF3F3]'],
    theme === 'primary' && ['text-neutral-0', 'bg-primary-80'],
    'w-fit',
    'px-2',
    'py-[5px]',
    'text-xs',
    'font-semibold',
    'rounded-md',
  );

  return <div className={className}>{content}</div>;
};

export default ChipSmall;
