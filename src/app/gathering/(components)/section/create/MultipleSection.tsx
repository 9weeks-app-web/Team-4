import clsx from 'clsx';

interface ComboBoxSectionProps {
  children: React.ReactNode;
  title: string;
  required?: boolean;
  style?: string[];
}

const MultipleSection = ({
  children,
  title,
  required,
  style,
}: ComboBoxSectionProps) => {
  const className = clsx('text-[23px]', style);

  return (
    <section className={className}>
      <h3 className="relative w-fit text-[26px] font-bold mb-[27px]">
        {title}
        {required && (
          <span className="absolute -right-2 top-0 text-system-warning text-sm font-medium">
            *
          </span>
        )}
      </h3>
      <div className="flex gap-[30px] w-full">{children}</div>
    </section>
  );
};

export default MultipleSection;
