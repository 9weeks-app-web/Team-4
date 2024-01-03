import Image from 'next/image';

const ButtonSimple = ({ content }: { content: string }) => {
  return (
    <button className="flex items-center text-lg text-neutral-50 font-mediume">
      {content}
      <Image
        src="/images/gathering/right_arrow2.svg"
        width={24}
        height={24}
        alt="right arrow"
      />
    </button>
  );
};

export default ButtonSimple;
