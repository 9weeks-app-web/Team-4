import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { CommentType } from '@/types/comment';

interface CommentSectionProps {
  comments?: CommentType[];
}

const DUMMY_COMMENT = [
  {
    id: 1,
    profileImage: '/images/gathering/profile.svg',
    major: 'UI/UX 디자이너',
    nickname: '서유빈',
    badgeIamge: '/images/gathering/spectum.svg',
    content:
      '안녕하세요! 여행을 좋아해서 참여해보고 싶습니다. 웹서버/프론트 등 기존 개발 구성원 혹은 소스가 존재하나요?',
    createdAt: new Date(),
    like: false,
  },
  {
    id: 2,
    profileImage: '/images/gathering/profile.svg',
    major: '개발자',
    nickname: '김수진',
    badgeIamge: '/images/gathering/spectum2.svg',
    content:
      '안녕하세요, 개발자님! 오픈채팅으로 자세하게 이야기 나눠보고 싶습니다!',
    createdAt: new Date(),
    like: false,
  },
];

const CommentSection = ({ comments = DUMMY_COMMENT }: CommentSectionProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [comment, setComment] = useState(comments);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();

    const input = inputRef.current?.value;

    if (!input) return;

    setComment(prev => [
      ...prev,
      {
        id: prev.length + 1,
        profileImage: '/images/gathering/profile.svg',
        major: '개발자',
        nickname: '박창협',
        badgeIamge: '/images/gathering/spectum3.svg',
        content: input,
        createdAt: new Date(),
        like: false,
      },
    ]);

    inputRef.current.value = '';
  };

  return (
    <section className="w-full mt-[104px]">
      <div className="flex h-12 gap-[18px] mb-[88px]">
        <Image
          src="/images/gathering/profile.svg"
          width={48}
          height={48}
          alt="profile"
        />
        <form
          className="flex items-center flex-1 bg-background-5 rounded-xl"
          onSubmit={handleSubmitComment}
        >
          <input
            className="flex-1 w-full h-full pl-4 outline-none bg-background-5 text-lg font-medium rounded-xl"
            ref={inputRef}
            placeholder="질문을 입력해 주세요."
          />
          <button className="w-7 h-8 mr-[10px] bg-[url(/images/gathering/arrow_button.svg)] bg-center bg-no-repeat" />
        </form>
      </div>
      {comment.map(comment => (
        <div className="w-full font-medium mb-12" key={comment.id}>
          <div className="flex items-center gap-[18px]">
            <Image
              src="/images/gathering/profile.svg"
              width={48}
              height={48}
              alt="profile"
            />
            <div>
              <div className="flex">
                <span className="text-neutral-80 text-xl mr-[6px]">
                  {comment.nickname}
                </span>
                <Image
                  src="/images/gathering/spectrum.svg"
                  width={16}
                  height={20}
                  alt="spectrum"
                />
              </div>
              <div className="mt-1 text-neutral-40">
                {comment.major} ·{' '}
                {comment.createdAt
                  .toISOString()
                  .split('T')[0]
                  .replaceAll('-', '/ ')}
              </div>
            </div>
          </div>
          <div className="ml-12 mt-3">
            <p className="w-fit p-5 mb-4 rounded-xl bg-primary-10 font-medium text-lg">
              {comment.content}
            </p>
            <div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <button className="w-11 h-11 p-[10px] rounded-[50%] bg-background-5 hover:bg-neutral-10">
                    <Image
                      src="/images/gathering/like.svg"
                      width={24}
                      height={24}
                      alt="like"
                    />
                  </button>
                  <button className="w-11 h-11 p-[10px] rounded-[50%] bg-background-5 hover:bg-neutral-10">
                    <Image
                      src="/images/gathering/arrow_in.svg"
                      width={24}
                      height={24}
                      alt="arrrow"
                    />
                  </button>
                </div>
                <span className="cursor-pointer text-primary-80">
                  1개의 댓글 보기
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CommentSection;
