'use client';

import { Dispatch, SetStateAction } from 'react';

interface DateProps {
  placeholder: string;
}

interface SelectProps {
  selectName: string;
  options?: string[];
  setter?: Dispatch<SetStateAction<string | null>>;
}

const ComboBox = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ComboBox;

const Date = ({ placeholder }: DateProps) => {
  return (
    <input
      className="w-[30%] px-2 py-1 border border-neutral-30 rounded-md before:content-[attr(data-placeholder)] before:w-full"
      type="date"
      placeholder="123"
      data-placeholder={placeholder}
    />
  );
};

const Select = ({
  selectName,
  options = ['기술스택', 'React', 'Next.js'],
  setter,
}: SelectProps) => {
  return (
    <div className="relative w-full h-full bg-opacity-0">
      <select
        className="w-full h-full px-4 py-3 border border-neutral-10 text-neutral-40 text-lg font-medium rounded-xl appearance-none bg-arrow-down bg-right-4 bg-no-repeat"
        id={`${selectName}-select`}
        name={selectName}
        onChange={e => setter && setter(e.target.value)}
      >
        {options.map((option, i) => (
          <option key={option} value={option} hidden={!i}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

ComboBox.Date = Date;
ComboBox.Select = Select;
