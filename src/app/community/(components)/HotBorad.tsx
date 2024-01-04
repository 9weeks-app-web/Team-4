import Link from 'next/link';
import Image from 'next/image';
const HotBoard = () => {
  return (
    <Link href="/community/category/1">
      <div className="flex">
        <div className="flex justify-center items-center border min-w-[33px] w-[33px] h-[33px] mr-3 rounded-md">
          1
        </div>
        <div>
          <div className="mb-2 py-[6px] px-2 bg-neutral-5 inline-block rounded-md">
            자유주제
          </div>
          <div className="mb-2 text-lg font-bold line-clamp-1">
            취업이 되었는데 복에 겨울 소리일까요? 취업이 되었는데 복에 겨울
            소리일까요?
          </div>
          <div className="mb-3 text-sm line-clamp-2">
            어쩌다가 운이 좋게 임베디드 기업으로 취업이 되었습니다 아직
            0년차구요 초봉도 영끌 5천중반대는 나올거같더라구요 근데 하면할수록
            학부때 배운 재미있던 개발이랑은 멀어지더군요 억지로 재미붙이려
            했는데 아직은 힘들구요임베디드경력으로 백엔드 이직은
            어려운것같고,,현재 취업시장도 어려운거같고,,개발자로서 꿈을
            크게가졌었는데 현실에 안주하게 될거같네요 혼란스럽습니다
          </div>
          <div className="flex items-center">
            <div className="flex mr-5">
              <Image
                src="/images/like.png"
                alt="Star Image"
                width={24}
                height={24}
                className="mr-[6px] "
              />
              <div>14</div>
            </div>
            <div className="flex mr-5">
              <Image
                src="/images/chat.png"
                alt="Star Image"
                width={24}
                height={24}
                className="mr-[6px]"
              />
              <div>12</div>
            </div>
            <div className="flex">
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
    </Link>
  );
};

export default HotBoard;
