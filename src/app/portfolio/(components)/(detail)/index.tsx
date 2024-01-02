'use client';

import { PortfolioDetail } from '@/types/portfolio';
import { apiRequest } from '@/utils/api';
import dateFormat from '@/utils/dateFormat';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

const PortfolioDetail = ({ portfolioId }: { portfolioId: number }) => {
  const { data, isFetching } = useQuery({
    queryKey: ['portfolioDetail', portfolioId],
    queryFn: async () => {
      const response = await apiRequest<PortfolioDetail>(
        `portfolios/detail?portfolioId=${portfolioId}`,
      );
      return response;
    },
  });
  console.log(data);
  if (isFetching) {
    return <div>로딩중...</div>;
  } else if (data !== undefined) {
    return (
      <div className="w-full h-full flex">
        <div className="w-full">
          {/* 헤더 영역 */}
          <div className="flex p-6">
            <div className="w-16 h-16 relative">
              <Image
                src={data.profileImg}
                className="rounded-full"
                alt="프로필 이미지"
                fill
              />
            </div>
            <div className="">
              <div>{data.title}</div>
              <div>{data.nickname}</div>
            </div>
          </div>
          <div className="w-full border-t-2 border-neutral-20"></div>
          {/* 태그 영역 */}
          <div className="flex p-1">
            {data.content.bookmark.map((e, index) => (
              <div key={index} className="mr-2">
                {e}
              </div>
            ))}
          </div>
          {/* 컨텐츠 영역 */}
          <div className="flex flex-col items-center">
            {data.portfolio.map((e, id) => (
              <div className="" key={id}>
                {e.type === 'image' && (
                  <img
                    src={e.content}
                    alt="포트폴리오 이미지"
                    className="w-full h-auto"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-col text-neutral-0 w-full items-center justify-center bg-neutral-100 h-[400px]">
            <div>{data.title}</div>
            <div>{data.content.description}</div>
            <div className="flex">
              <div>❤️{data.like}</div>
              <div>👁️{data.hit}</div>
            </div>
            <div>게시: {dateFormat(data.createAt)}</div>
          </div>
          {/* 해당 유저의 다른 포트폴리오 영역 */}
          <div className="w-full h-[500px] bg-neutral-90">
                    <div className='p-5 flex flex-col'>
                        <div></div>

            </div>
          </div>
          {/* 하단 푸터 영역 */}
          <div></div>
        </div>
        <div className="absolute -right-20">test</div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default PortfolioDetail;
