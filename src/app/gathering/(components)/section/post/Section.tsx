interface SectionProps {
  children: React.ReactNode;
  title: string;
  line?: boolean;
}

const Section = ({ children, title, line }: SectionProps) => {
  return (
    <section className="mt-[48px]">
      <h3 className="text-[26px] font-bold mb-[27px]">{title}</h3>
      {line && <div className="h-[1px] mb-[20px] bg-neutral-10" />}
      {children}
    </section>
  );
};

export default Section;
