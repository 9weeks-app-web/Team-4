import { SurveyDummyData } from '../api/community/(dummys)';
import Image from 'next/image';
import Link from 'next/link';

interface PollCardProps {
  survey: SurveyDummyData;
}

const PollCard: React.FC<PollCardProps> = ({ survey }) => {
  return (
    <div className="border border-neutral-10 rounded-2xl p-5 my-10 text-sm">
      <div key={survey.id}>
        <div className="mb-3 bg-primary-10 text-sm font-semibold text-primary-80 p-2 inline-block rounded-lg">
          마감 D-
          {Math.ceil(
            (survey.deadline.getTime() - new Date().getTime()) /
              (1000 * 60 * 60 * 24),
          )}
        </div>
        <div className="mb-2 font-bold text-lg text-neutral-80">
          {survey.title}
        </div>
        <div className="mb-[14px] text-sm line-clamp-2 text-neutral-80">
          {survey.content}
        </div>
        <div className="flex mb-5 text-sm ">
          <p className="mr-[6px] text-neutral-40 font-medium">소요시간</p>
          <p className="mr-4 text-neutral-80 font-semibold">약 {survey.time}</p>
          <p className="mr-[6px] text-neutral-40 font-medium">설문 대상</p>
          <p className="mr-4 text-neutral-80 font-semibold">{survey.target}</p>
          <p className="mr-[6px] text-neutral-40 font-medium">종료날짜</p>
          <p className=" text-neutral-80 font-semibold">
            {survey.deadline.toISOString().split('T')[0]}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <Image
                src={survey.profileImg}
                alt={survey.nickname}
                width={24}
                height={24}
                className="mr-[6px] w-[24px] h-[24px] rounded-full bg-neutral-20"
              />
              <div className=" text-neutral-60 text-sm font-medium">
                {survey.nickname}
              </div>
            </div>
            <div className="flex justify-center items-center text-lg px-4 py-[10px] h-[44px] w-[147px] bg-primary-100 text-neutral-0 p-2 rounded-md font-medium">
              <Link href={survey.link}>설문조사 참여</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollCard;
