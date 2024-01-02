interface SectionProps {
  children: React.ReactNode;
  title: string;
  line?: boolean;
}

const Section = ({ children, title, line }: SectionProps) => {
  return (
    <section className="mt-[80px]">
      <h3 className={line ? 'text-2xl' : 'text-2xl mb-[30px]'}>{title}</h3>
      {line && <div className="h-[1px] my-[20px] bg-neutral-10" />}
      {children}
    </section>
  );
};

export default Section;
