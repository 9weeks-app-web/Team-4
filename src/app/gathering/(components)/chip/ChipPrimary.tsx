import clsx from 'clsx';
import { ReactNode } from 'react';

interface ChipPrimaryProps {
  children?: ReactNode;
  content: string;
  style?: string[];
}

const ChipPrimary = ({ children, content, style }: ChipPrimaryProps) => {
  const className = clsx(
    'px-2',
    'py-[6px]',
    'border',
    'border-neutral-10',
    'text-sm',
    'text-primary-80',
    'rounded-md',
    'bg-primary-10',
    style,
  );

  return (
    <div className={className}>
      {content}
      {children}
    </div>
  );
};

export default ChipPrimary;
