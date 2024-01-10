'use client';

import {
  Children,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import ChipPrimary from '../chip/ChipPrimary';
import Image from 'next/image';

interface InputProps {
  children?: ReactNode;
  placeholder?: string;
  style?: string[];
}

const InputContext = createContext<{
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
} | null>(null);

const Input = ({ children, placeholder, style }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [tags, setTags] = useState<string[]>([]);
  const className = clsx(
    'w-full',
    'h-full',
    'px-4',
    'py-3',
    'text-lg',
    'font-medium',
    'border',
    'border-neutral-10',
    'rounded-xl',
    style,
  );

  const handleEnterUp = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    if (inputRef.current?.value[0] !== '#') return;

    const tag = inputRef.current?.value;

    tag && setTags(prev => [...prev, tag.replace('#', '')]);

    inputRef.current.value = '';
  };

  return (
    <InputContext.Provider value={{ tags, setTags }}>
      <input
        className={className}
        placeholder={placeholder}
        ref={inputRef}
        onKeyUp={handleEnterUp}
      />
      {children}
    </InputContext.Provider>
  );
};

export default Input;

const Tag = () => {
  const context = useContext(InputContext);

  return (
    <div className="flex gap-3 mt-6">
      {Children.toArray(
        context &&
          context.tags.map((tag, index) => (
            <div className="flex items-center pl-4 py-1 bg-primary-5 text-neutral-60 text-base font-medium rounded-[100px]">
              {tag}
              <button
                className="ml-1 mr-[10px]"
                onClick={() =>
                  context.setTags(tags => tags.filter((_, i) => i !== index))
                }
              >
                <Image
                  src="/images/gathering/x.svg"
                  width={24}
                  height={24}
                  alt="x"
                />
              </button>
            </div>
          )),
      )}
    </div>
  );
};

Input.Tag = Tag;
