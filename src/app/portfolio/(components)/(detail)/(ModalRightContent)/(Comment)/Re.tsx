import dateFormat from '@/utils/dateFormat';
import Image from 'next/image';

const RightContentReComment = ({
  nickname,
  job,
  profile,
  createAt,
  content,
}: {
  nickname: string;
  job: string;
  profile: string;
  createAt: Date;
  content: string;
}) => {
  return (
    <div className={`w-[310px] h-[207px] py-[32px] px-20 ml-[40px]`}>
      <div className="flex w-full h-[45px]">
        <div className="flex justify-center items-center w-[24px] h-full mr-[10px]">
          <Image src={profile} alt="사용자 프로필" width={24} height={24} />
        </div>
        <div className="">
          <div className="text-neutral-80">{nickname}</div>
          <div className="text-neutral-40">
            {job}
            {' ・ '}
            {dateFormat(createAt)}
          </div>
        </div>
      </div>
      <div className="py-[9px] mt-[10px] mb-[12px]">
        <div className="text-base font-normal text-neutral-70">{content}</div>
      </div>
      <div className="flex mb-[32px]">
        <button className="p-10">
          <Image
            src="/portfolios/thumbs_up.svg"
            alt="따봉"
            width={16}
            height={16}
          />
        </button>
        <button className="p-10 ml-[6px]">
          <Image
            src="/portfolios/reply.svg"
            alt="답글"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
};

export default RightContentReComment;
