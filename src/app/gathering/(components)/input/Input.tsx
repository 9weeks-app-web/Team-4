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

interface InputProps {
  children?: ReactNode;
  placeholder: string;
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
    <div className="flex gap-4 mt-3">
      {Children.toArray(
        context &&
          context.tags.map((tag, index) => (
            <ChipPrimary
              content={tag}
              style={[
                'flex',
                'items-center',
                'text-[24px]',
                'px-3',
                'py-4',
                'font-medium',
                'rounded-lg',
              ]}
            >
              <button
                className="w-3 h-3 ml-2 bg-[url(/images/gathering/X.svg)] bg-no-repeat bg-center"
                onClick={() =>
                  context.setTags(tags => tags.filter((_, i) => i !== index))
                }
              />
            </ChipPrimary>
          )),
      )}
    </div>
  );
};

Input.Tag = Tag;
