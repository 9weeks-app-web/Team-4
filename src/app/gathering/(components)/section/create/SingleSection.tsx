interface InputSectionProps {
  children: React.ReactNode;
  title: string;
}

const SingleSection = ({ children, title }: InputSectionProps) => {
  return (
    <section>
      <h3 className="text-2xl mb-[30px]">{title}</h3>
      {children}
    </section>
  );
};

export default SingleSection;
