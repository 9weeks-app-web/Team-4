interface RetrospectDetailHeaderProps {
  image?: string;
  title?: string;
  type?: string;
  field?: string;
  createdAt?: string;
}

const RetrospectDetailHeader = ({
  image,
  title,
  type,
  field,
  createdAt,
}: RetrospectDetailHeaderProps) => {
  return (
    <header className="relative px-[20%] h-[400px] bg-[url('https://dummyimage.com/1200x900/8cc0ff/fff')] bg-no-repeat bg-cover text-neutral-0">
      <div className="absolute w-[60%] bottom-0">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="mt-2">
          {type} | {field}
        </p>
        <div className="flex justify-between mt-[50px] mb-2">
          <p>{createdAt}</p>
          <button>북마크 버튼</button>
        </div>
      </div>
    </header>
  );
};

export default RetrospectDetailHeader;
