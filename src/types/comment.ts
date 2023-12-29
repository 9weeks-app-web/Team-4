export interface CommentType {
  id: number;
  profileImage: string;
  major: string;
  nickname: string;
  badgeIamge: string;
  content: string;
  createdAt: Date;
  like: boolean;
}

export interface CommentsListType {
  page: number;
  endPage: number;
  commentsList: CommentType[];
}

export interface CommentIsLikeType {
  likeState: boolean;
}
