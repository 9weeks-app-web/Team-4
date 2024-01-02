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
    <select
      className="w-[30%] px-2 py-1 border border-neutral-30 rounded-md"
      id={`${selectName}-select`}
      name={selectName}
    >
      {options.map(({ value, description }) => (
        <option key={value} value={value}>
          {description}
        </option>
      ))}
    </select>
  );
};

ComboBox.Date = Date;
ComboBox.Select = Select;
