import clsx from 'clsx';

interface InputSectionProps {
  children: React.ReactNode;
  title: string;
  required?: boolean;
  style?: string[];
}

const SingleSection = ({
  children,
  title,
  required = false,
  style,
}: InputSectionProps) => {
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
      {children}
    </section>
  );
};

export default SingleSection;
