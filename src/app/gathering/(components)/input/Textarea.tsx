interface TextareaProps {
  placeholder: string;
}

const Textarea = ({ placeholder }: TextareaProps) => {
  return (
    <textarea
      className="w-full min-h-[200px] px-2 py-1 border border-neutral-30 rounded-md"
      placeholder={placeholder}
    />
  );
};

export default Textarea;
