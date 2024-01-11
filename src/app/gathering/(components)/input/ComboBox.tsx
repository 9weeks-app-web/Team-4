'use client';

import { Children, Dispatch, SetStateAction } from 'react';

interface SelectProps {
  selectName: string;
  options?: string[];
  setter?: Dispatch<SetStateAction<string | null>> | ((type: string) => void);
}

const ComboBox = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ComboBox;

const Select = ({
  selectName,
  options = ['기술스택', 'React', 'Next.js'],
  setter,
}: SelectProps) => {
  return (
    <div className="relative w-full h-full">
      <select
        className="w-full h-full px-4 py-3 border border-neutral-10 text-neutral-40 text-lg font-medium rounded-xl appearance-none bg-arrow-down bg-right-1 bg-no-repeat cursor-pointer"
        id={`${selectName}-select`}
        name={selectName}
        onChange={e => setter && setter(e.target.value)}
      >
        {Children.toArray(
          options.map((option, i) => (
            <option value={option} hidden={!i}>
              {option}
            </option>
          )),
        )}
      </select>
    </div>
  );
};

const SelectSimple = ({
  selectName,
  options = ['기술스택', 'React', 'Next.js'],
  setter,
}: SelectProps) => {
  return (
    <div className="relative w-full h-full">
      <select
        className="w-full h-full px-2 py-1 text-neutral-50 font-semibold appearance-none bg-arrow-down bg-right-0 bg-no-repeat cursor-pointer"
        id={`${selectName}-select`}
        name={selectName}
        onChange={e => setter && setter(e.target.value)}
      >
        {Children.toArray(
          options.map((option, i) => (
            <option value={option} hidden={!i}>
              {option}
            </option>
          )),
        )}
      </select>
    </div>
  );
};

ComboBox.Select = Select;
ComboBox.SelectSimple = SelectSimple;
