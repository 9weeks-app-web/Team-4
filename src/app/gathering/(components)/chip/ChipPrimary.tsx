interface ChipPrimaryProps {
  content: string;
}

const ChipPrimary = ({ content }: ChipPrimaryProps) => {
  return (
    <div className="px-2 py-[6px] border border-neutral-10 text-sm text-primary-80 rounded-md bg-primary-10">
      {content}
    </div>
  );
};

export default ChipPrimary;
