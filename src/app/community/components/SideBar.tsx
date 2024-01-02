import Link from 'next/link';

const SideBar = () => {
  return (
    <div className="border border-neutral-10 py-7 pl-5 rounded-xl w-44 h-72 fixed left-[15%] top-1/4">
      <p className="text-lg font-bold mb-5">커뮤니티</p>

      <div className="flex flex-col text-neutral-30">
        <Link href="/community/" className="px-[6px] py-1">
          전체
        </Link>
        <Link href="/community/freesubject" className="px-[6px] py-1">
          자유주제
        </Link>
        <Link href="/community/qna" className="px-[6px] py-1">
          QnA
        </Link>
        <Link href="/community/survey" className="px-[6px] py-1">
          설문조사
        </Link>
        <Link href="/community/jobboard" className="px-[6px] py-1">
          직무별 게시판
        </Link>
        <Link href="/community/chatroom" className="px-[6px] py-1">
          직무별 채팅방
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
