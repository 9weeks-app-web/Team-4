import { surveyDummyData } from '../api/community/(dummys)';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { clsx } from 'clsx';
const SurveyCard = () => {
  const perPage = 5;
  const [page, setPage] = useState(1);

  const totalPageCount = Math.ceil(surveyDummyData.length / perPage);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const slicedDummys = surveyDummyData.slice(startIndex, endIndex);

  return (
    <div className="my-11">
      <div className=" font-bold text-[28px] my-8">설문조사</div>
      {slicedDummys.map(survey => (
        <div key={survey.id}>
          <div className="flex mb-5">
            <Image
              src={survey.profileImg}
              alt={survey.nickname}
              width={12}
              height={12}
              className=" mr-[10px] w-12 h-12 rounded-full"
            />

            <div>
              <div className="flex items-center mb-0.5">
                <div className="mr-[6px] text-xl text-neutral-80">
                  {survey.nickname}
                </div>
                <Image
                  src={survey.badge}
                  alt="badge"
                  width={20}
                  height={20}
                  className="w-[16.25px] h-[20px]"
                />
              </div>
              <div className="flex text-neutral-40">
                <div>{survey.major}</div>
                <div suppressHydrationWarning={true}>
                  ・{survey.date.toISOString().split('T')[0]}
                </div>
              </div>
            </div>
          </div>

          <div className="border border-neutral-10 rounded-2xl p-8 text-sm mb-12">
            <div className="mb-3 font-bold bg-primary-100 text-neutral-0 p-2 inline-block rounded-lg">
              마감 D-
              {Math.ceil(
                (survey.deadline.getTime() - new Date().getTime()) /
                  (1000 * 60 * 60 * 24),
              )}
            </div>
            <div className="mb-3 font-bold text-[22px]">{survey.title}</div>
            <div className="mb-5 line-clamp-3 text-lg">{survey.content}</div>
            <div className="flex justify-between">
              <div className="flex items-end">
                <p className="mr-[6px] text-neutral-50">소요시간</p>
                <p className="mr-4 font-bold">{survey.time}</p>
                <p className="mr-[6px] text-neutral-50">설문 대상</p>
                <p className="mr-4 font-bold">{survey.target}</p>
                <p className="mr-[6px] text-neutral-40">종료날짜</p>
                <p className=" font-bold">
                  {survey.deadline.toISOString().split('T')[0]}
                </p>
              </div>
              <div className="flex justify-center items-center text-base h-[44px] w-[133px] bg-primary-100 text-neutral-0 p-2 rounded-lg">
                <Link href={survey.link}>설문조사 참여</Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex items-center self-center mt-20 text-neutral-50">
        <button
          className="p-[10px]"
          onClick={() =>
            setPage(prev => Math.min(Math.ceil(prev / 10) * 10 - 1, 1))
          }
        >
          <Image
            src="/images/gathering/double_left_arrow.svg"
            width={24}
            height={24}
            alt="double left arrow"
          />
        </button>
        <button
          className="p-[10px]"
          onClick={() => setPage(prev => (prev > 1 ? prev - 1 : prev))}
        >
          <Image
            src="/images/gathering/left_arrow.svg"
            width={24}
            height={24}
            alt="left arrow"
          />
        </button>
        {Array.from({ length: totalPageCount }, (_, i) => i + 1).map(num => (
          <button
            key={num}
            className={clsx(
              page === num && [
                'text-neutral-0',
                'bg-primary-100',
                'rounded-[50%]',
              ],
              'w-10',
              'h-10',
            )}
            onClick={() => setPage(num)}
          >
            {num}
          </button>
        ))}
        <button
          className="p-[10px]"
          onClick={() =>
            setPage(prev => (prev < totalPageCount ? prev + 1 : prev))
          }
        >
          <Image
            src="/images/gathering/right_arrow.svg"
            width={24}
            height={24}
            alt="right arrow"
          />
        </button>
        <button
          className="p-[10px]"
          onClick={() =>
            setPage(prev =>
              Math.min(Math.ceil(prev / 10) * 10 + 1, totalPageCount),
            )
          }
        >
          <Image
            src="/images/gathering/double_right_arrow.svg"
            width={24}
            height={24}
            alt="double right arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default SurveyCard;
