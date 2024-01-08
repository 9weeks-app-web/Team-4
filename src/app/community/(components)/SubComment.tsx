import React, { useState } from 'react';
import Image from 'next/image';
import BadgeImage from './imageComponents/Badge';
import ProfileImage from './imageComponents/Profile';
import CommentLikeButton from './imageComponents/CommentLike';
import CommentButton from './imageComponents/Comment';
import { CommentType } from '@/types/comment';

interface CommentCardProps {
  subDummyComment: CommentType[];
}

const SubCommentCard: React.FC<CommentCardProps> = ({ subDummyComment }) => {
  const [replyState, setReplyState] = useState<{
    id: number | null;
    content: string;
  }>({
    id: null,
    content: '',
  });

  const [isCommentOpen, setIsCommentOpen] = useState<boolean>(false);

  const [replyCount, setReplyCount] = useState<number[]>(
    subDummyComment.map(() => 0),
  );

  const handleReplyClick = (commentId: number) => {
    setReplyState({ id: commentId, content: '' });
    setIsCommentOpen(prev => !prev);
  };

  const handleCommentSubmit = () => {
    console.log('대댓글 작성:', replyState);
    setReplyState({ id: null, content: '' });
    setIsCommentOpen(false);
  };

  return (
    <div>
      {subDummyComment.map((dummy, index) => (
        <div className="w-[692px] mb-[34px]" key={dummy.id}>
          <div className="flex items-center mb-3">
            <ProfileImage src={dummy.profileImage} alt={dummy.nickname} />
            <div>
              <div className="flex">
                <div className="text-neutral-80 text-xl mr-[6px]">
                  {dummy.nickname}
                </div>
                <BadgeImage src={dummy.badgeIamge} />
              </div>
              <div className="flex text-neutral-40">
                <div>{dummy.major}・</div>
                <div>{dummy.createdAt.toISOString().split('T')[0]}</div>
              </div>
            </div>
          </div>

          <div className="pl-12">
            <p className="p-5 mb-4 rounded-xl bg-primary-10 text-neutral-100 font-medium text-[18px]">
              {dummy.content}
            </p>

            <div>
              <div className="flex mb-4">
                <CommentLikeButton />
                <CommentButton
                  onClick={() => handleReplyClick(dummy.id)}
                  isCommentOpen={isCommentOpen && replyState.id === dummy.id}
                />
              </div>
              <span className="ml-3 cursor-pointer text-primary-80 ">
                {replyCount[index] > 0
                  ? `${replyCount[index]}개의 댓글 보기 `
                  : null}
              </span>
            </div>

            {isCommentOpen && replyState.id === dummy.id && (
              <div className="flex items-center mb-12 relative mt-4">
                <p className="bg-primary-10 text-primary-80 rounded-[6px] absolute p-1 left-2">
                  @{dummy.nickname}
                </p>
                <input
                  type="text"
                  placeholder="대댓글을 입력하세요"
                  className="py-[10px] pr-[10px] pl-[90px] w-full rounded-2xl bg-background-5"
                  value={replyState.content}
                  onChange={e =>
                    setReplyState({ ...replyState, content: e.target.value })
                  }
                />
                <Image
                  src="/images/community/btn_hover.png"
                  alt="comment button"
                  width={28}
                  height={28}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={handleCommentSubmit}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubCommentCard;
