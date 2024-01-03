interface ChipBasicProps {
  content: string;
}

const ChipBasic = ({ content }: ChipBasicProps) => {
  return (
    <div className="px-2 py-[6px] border border-neutral-10 text-sm rounded-md bg-neutral-0">
      {content}
    </div>
  );
};

export default ChipBasic;
