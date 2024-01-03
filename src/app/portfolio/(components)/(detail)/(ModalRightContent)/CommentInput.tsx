'use client';

import Image from 'next/image';

const CommentInput = ({
  profileImg,
  userId,
  userNickname,
}: {
  profileImg: string;
  userId: number;
  userNickname: string;
}) => {
  return (
    <div>
      <div className="flex mt-[46px]">
        <Image
          src={profileImg}
          alt="유저 프로필 이미지"
          width={24}
          height={24}
          className="rounded-xl"
        />
        <div className="ml-[6px]">{userNickname}</div>
      </div>
      <div className="w-[310px] h-[178px] bg-background-5  mt-[7px]">
        <div className="w-full h-[130px] bg-background-5">
          <input
            placeholder="댓글을 입력해주세요"
            className="p-[20px] w-full h-full bg-background-5"
          />
        </div>
        <div className="flex w-full h-[48px]">
          <button className="ml-auto mr-[8px]">
            <Image
              src="/portfolios/comment_upload.svg"
              alt="업로드 버튼"
              width={28}
              height={28}
              className="ml-auto "
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
