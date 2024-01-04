import Image from 'next/image';
const Card = () => {
  return (
    <div className=" p-5 mb-4 rounded-2xl border border-neutral-5 text-sm">
      <div className="flex justify-between mb-[13px]">
        <div className="flex items-center">
          <div className="mr-[6px] w-[24px] h-[24px] rounded-full bg-neutral-20"></div>
          <div className=" text-neutral-60">닉네임</div>
        </div>
        <div className=" text-neutral-30">12/14 02:43</div>
      </div>
      <div className="mb-5">
        <div className=" font-bold text-xl mb-2">Title</div>
        <div className=" line-clamp-2">
          게시물 글 본문 내용 게시물 글 본문 내용 게시물 글 본문 내용 게시물 글
          본문 내용 게시물 글 본문 내용 게시물 글 본문 내용 게시물 글 본문 내용
          게시물 글 본문 내용 게시물 글 본문 내용 게시물 글 본문 내용 게시물 글
          본문 내용 게시물 글 본문 내용 게시물 글 본문 내용 게시물 글 본문 내용
          게시물 글 본문 내용 게시물 글 본문 내용
        </div>
      </div>

      <div className="flex mb-5">
        <div className="mr-2 bg-neutral-5 text-neutral-60 py-[6px] px-[10px]   rounded-3xl">
          #태그
        </div>
        <div className="mr-2 bg-neutral-5 text-neutral-60 py-[6px] px-[10px]   rounded-3xl">
          #태그
        </div>
        <div className="mr-2 bg-neutral-5 text-neutral-60 py-[6px] px-[10px]   rounded-3xl">
          #태그
        </div>
      </div>

      <div className="flex justify-center items-center border rounded-lg border-neutral-10 p-[10px] h-11">
        <div className="flex items-center text-neutral-60 h-[33px]">
          <div className="flex items-center mr-3 ">
            <Image
              src="/images/like.png"
              alt="Star Image"
              width={24}
              height={24}
              className="mr-[6px] "
            />
            <div>14</div>
          </div>
          <div className="flex items-center mr-3">
            <Image
              src="/images/chat.png"
              alt="Star Image"
              width={24}
              height={24}
              className="mr-[6px]"
            />
            <div>12</div>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/eye.png"
              alt="Star Image"
              width={24}
              height={24}
              className="mr-[6px]"
            />
            <div>812</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
