import Image from 'next/image';

interface DateProps {
  placeholder: string;
}

interface SelectProps {
  selectName: string;
  options?: { value: string; description: string }[];
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
  options = [
    { value: 'default', description: '기술스택' },
    { value: 'react', description: 'React' },
    { value: 'next', description: 'Next.js' },
  ],
}: SelectProps) => {
  return (
    <div className="relative w-full bg-opacity-0">
      <select
        className="w-full px-4 py-3 border border-neutral-10 text-neutral-40 text-lg font-medium rounded-xl appearance-none bg-arrow-down bg-right-4 bg-no-repeat"
        id={`${selectName}-select`}
        name={selectName}
      >
        {options.map(({ value, description }) => (
          <option key={value} value={value}>
            {description}
          </option>
        ))}
      </select>
      {/* <Image
        className="absolute right-4 top-1/2 transform -translate-y-1/2 "
        src="/images/gathering/arrow_down.svg"
        width={24}
        height={24}
        alt="arrow"
      /> */}
    </div>
  );
};

ComboBox.Date = Date;
ComboBox.Select = Select;
