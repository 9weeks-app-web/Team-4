interface ComboBoxSectionProps {
  children: React.ReactNode;
  title: string;
}

const MultipleSection = ({ children, title }: ComboBoxSectionProps) => {
  return (
    <section className="text-neutral-50">
      <h3 className="mb-[30px] text-2xl text-neutral-100">{title}</h3>
      <div className="flex gap-[30px] w-full">{children}</div>
    </section>
  );
};

export default MultipleSection;
