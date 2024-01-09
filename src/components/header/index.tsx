import Image from 'next/image';
import Link from 'next/link';

const RootHeader = () => {
  return (
    <div className="-top-[55px] sticky w-full  border-b-stroke-10 flex flex-col justify-center border-b-2 h-[155px] z-50">
      <div className="w-full flex justify-center bg-neutral-5">
        <div className="max-w-[90%] w-full">
          <nav className="w-full h-[55px] flex">
            <ol className="flex">
              <Image
                src={'left.svg'}
                alt="이미지"
                width={10}
                height={10}
                className="mt-auto"
              />
              <li className="w-[118px] h-[43px] px-[20px] py-[9px] mt-auto rounded-t-xl border border-neutral-0 bg-neutral-0">
                스팩폴리오
              </li>
              <Image
                src={'right.svg'}
                alt="이미지"
                width={10}
                height={10}
                className="mt-auto"
              />
              <li className="w-[118px] h-[43px] px-[20px] py-[9px] mt-auto ml-[10px]">
                스팩로그
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="w-full flex justify-center bg-neutral-0">
        <div className="max-w-[90%] w-full">
          <nav className="w-full h-[100px] flex items-center ">
            <ol className="flex h-full items-center">
              <li className="mr-8 text-[24px] font-[500] flex">
                <Link href={'/'} className="flex">
                  <Image
                    src="/portfolios/sfacfolio_logo.svg"
                    alt="스팩폴리오 로고"
                    width={24}
                    height={24}
                    className="mr-[11.9px]"
                  />
                  SFACFOLIO
                </Link>
              </li>
              <li className="mr-8 text-[18px] font-[700]">
                <Link href={'/portfolio'}>포트폴리오</Link>
              </li>
              <li className="mr-8 text-[18px] font-[700]">
                <Link href={'/community'}>커뮤니티</Link>
              </li>
              <li className="mr-8 text-[18px] font-[700]">
                <Link href={'/gathering'}>모임</Link>
              </li>
              <li className="mr-8 text-[18px] font-[700]">채용</li>
            </ol>
            <div className="flex ml-[130px] w-[485px] h-[52px] border px-[20px] py-[16px] border-neutral-10 rounded-xl">
              <Image
                src="/portfolios/search.svg"
                alt="검색아이콘"
                width={24}
                height={24}
                className="mr-[12px]"
              />
              <input
                className="w-full"
                placeholder="스펙트럼처럼 넓어지는 나의 스펙, 스팩폴리오!"
              />
            </div>
            <ol className="flex ml-auto items-center">
              <li className="mr-[20px]">
                <Image
                  src={'/portfolios/mail.svg'}
                  alt="메일"
                  width={32}
                  height={32}
                ></Image>
              </li>
              <li className="mr-[20px]">
                <Image
                  src={'/portfolios/bell.svg'}
                  alt="메일"
                  width={32}
                  height={32}
                ></Image>
              </li>
              <li className="">
                <Link href={'/mypage'}>
                  <Image
                    src={'/portfolios/login.svg'}
                    alt="메일"
                    width={32}
                    height={32}
                  ></Image>
                </Link>
              </li>
              {/* <li className="mr-8">
                <button className="w-24 h-10 rounded-lg bg-background-100 text-neutral-0">
                  회원가입
                </button>
              </li>
              <li>
                <button className="w-24 h-10 rounded-lg bg-background-100 text-neutral-0">
                  로그인
                </button>
              </li> */}
            </ol>
            <ol>
              <button className="bg-neutral-5 text-neutral-60 text-[18px] font-[700] w-[192px] h-[55px] rounded-xl ml-[36px]">
                <Link href={'/portfolio/upload'}>새로운 작업 업로드</Link>
              </button>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default RootHeader;
