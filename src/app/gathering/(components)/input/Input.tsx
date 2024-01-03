interface InputProps {
  placeholder: string;
}

const Input = ({ placeholder }: InputProps) => {
  return (
    <input
      className="w-full px-2 py-1 border border-neutral-30 rounded-md"
      placeholder={placeholder}
    />
  );
};

export default Input;
