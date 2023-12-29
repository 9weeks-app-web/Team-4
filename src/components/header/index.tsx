const RootHeader = () => {
  return (
    <div className="-top-8 sticky w-full  border-b-stroke-10 flex flex-col justify-center border-b-2 h-24 z-50">
      <div className="w-full flex justify-center bg-neutral-5">
        <div className="max-w-[90%] w-full">
          <nav className="w-full h-8 flex items-center">
            <ol className="flex">
              <li className="mr-8">스팩폴리오</li>
              <li>스팩로그</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="w-full flex justify-center bg-neutral-0">
        <div className="max-w-[90%] w-full">
          <nav className="w-full h-16 flex items-center ">
            <ol className="flex h-full items-center">
              <li className="mr-8 font-bold md:font-extrabold text-2xl md:text-4xl">
                SFAC
              </li>
              <li className="mr-8 font-semibold md:font-bold md:text-2xl">
                포트폴리오
              </li>
              <li className="mr-8 font-semibold md:font-bold md:text-2xl">
                프로젝트/스터디
              </li>
              <li className="mr-8 font-semibold md:font-bold md:text-2xl">
                채용공고
              </li>
            </ol>
            <ol className="flex ml-auto">
              <li className="mr-8">
                <button className="w-24 h-10 rounded-lg bg-background-100 text-neutral-0">
                  회원가입
                </button>
              </li>
              <li>
                <button className="w-24 h-10 rounded-lg bg-background-100 text-neutral-0">
                  로그인
                </button>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default RootHeader;
