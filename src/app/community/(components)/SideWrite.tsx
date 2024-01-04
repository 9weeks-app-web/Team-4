import Link from 'next/link';

const SideWrite = () => {
  return (
    <Link href="/community/post">
      <div className="flex justify-center border border-neutral-10 p-4 rounded-xl w-44 fixed left-[13%] top-[58%] font-bold text-lg ">
        글쓰기
      </div>
    </Link>
  );
};

export default SideWrite;
