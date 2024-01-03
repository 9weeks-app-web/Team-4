import Card from './(components)/Card';
import Chat from './(components)/Chat';
import HotBoard from './(components)/HotBorad';
import PollCard from './(components)/PollCard';

const Community = () => {
  const categories: string[] = [
    'UX/UI',
    '서비스 기획',
    '웹 디자인',
    '편집 디자인',
  ];

  return (
    <div className="flex justify-center items-center">
      <div>
        <section className=" my-10">
          <div className="flex justify-between">
            <h1 className="font-bold text-[26px] mb-4">핫한 게시글</h1>
            <div className="flex items-center">
              <div className="mr-4 text-2xl"> &#60;</div>
              <div className="text-2xl"> &#62;</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[30px] ">
            <HotBoard />
            <HotBoard />
            <HotBoard />
            <HotBoard />
            <HotBoard />
            <HotBoard />
          </div>
        </section>
        <section className="my-10">
          <div className="flex justify-between">
            <h1 className="font-bold text-[26px] mb-4">자유글</h1>
            <div className="flex items-center">
              <div className="text-lg mr-1">더보기</div>
              <div className="text-2xl"> &#62;</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section className="my-10">
          <div>
            <p className="font-bold text-3xl mb-[14px]">QnA</p>
            <div className="flex justify-between mb-6">
              <div className="flex">
                <div className="flex items-center h-10 px-4 py-[11px] rounded-3xl bg-primary-20 border border-primary-60 text-primary-100 mr-[10px]">
                  포트폴리오
                </div>
                <div className="flex items-center h-10 px-4 py-[11px] rounded-3xl  border border-neutral-10 text-neutral-60">
                  커리어
                </div>
              </div>
              <div className="flex items-center">더보기 &#62;</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>

        <section className="my-10">
          <div className="flex justify-between">
            <h1 className="font-bold text-3xl mb-4">설문조사</h1>
            <div className="flex items-center">더보기 &#62;</div>
          </div>
          <div className="grid grid-cols-2 gap-[30px]">
            <PollCard />
            <PollCard />
          </div>
        </section>
        <section className="my-10">
          <h1 className="font-bold text-3xl mb-4">직무별 게시판</h1>
          <div className="flex justify-between mb-6">
            <div className="flex mb-2 text-lg ">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="flex justify-center items-center h-10 mr-[10px] px-4 py-[11px] border border-primary-60 bg-primary-20 rounded-full"
                >
                  {category}
                </button>
              ))}
            </div>
            <div>더보기 &#62;</div>
          </div>
          <div className="grid grid-cols-2 gap-[30px]">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section className="my-11">
          <h1 className="font-bold text-3xl mb-4">직무별 채팅방</h1>
          <div className="grid grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Chat key={index} category={category} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Community;
