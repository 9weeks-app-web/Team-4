// 커뮤니티
export interface CommunityPost {
  id: number;
  title: string;
  comments: number;
  hits: number;
  recommand: number;
  tags: string[];
  nickname: string;
  profileImage: string;
  poll:
    | {
        time: number;
        target: string;
        endDate: Date;
      }
    | undefined;
}

export interface CommunityPostList {
  type: 'popular' | 'poll' | 'QnA' | 'new' | 'any' | 'all';
  category: 'PM' | 'UI/UX' | 'webDesign' | 'editDesign';
  postList: CommunityPost[];
  newPostList: CommunityPost[];
}

export interface CommunitySearchList {
  type: 'popular' | 'poll' | 'QnA' | 'new' | 'any';
  page: number;
  endPage: number;
  postList: [
    {
      nickname: string;
      major: string;
      createdAt: Date;
      title: string;
      thumbnail: string[]; //최대 3개까지
      pictureCount: number; //사진의 개수 3개 이상인 경우 표현하기 위함
      content: string;
      commentCounts: number;
      likes: number;
      hits: number;
      bookmarks: number;
    },
  ];
}

export interface CommunityCategoryList {
  type: 'popular' | 'poll' | 'QnA' | 'new' | 'any' | 'all';
  page: number;
  endPage: number;
  postList: [
    {
      nickname: string;
      major: string;
      createdAt: Date;
      title: string;
      thumbnail: string[]; //최대 3개까지
      pictureCount: number; //사진의 개수 3개 이상인 경우 표현하기 위함
      content: string;
      commentCounts: number;
      likes: number;
      hits: number;
      bookmarks: number;
      poll:
        | {
            link: string;
            time: number;
            target: string;
            endDate: Date;
          }
        | undefined; // 설문조사가 아닌 경우 undefined로 도착
      category: string;
    },
  ];
}

export interface CommunityDetail {
  id: number;
  nickname: string;
  major: string;
  createdAt: Date;
  title: string;
  thumbnail: string[]; //최대 3개까지
  pictureCount: number; //사진의 개수 3개 이상인 경우 표현하기 위함
  content: string;
  commentCounts: number;
  likes: number;
  reactions: {
    // 반응들, 좋아요 뿐만 아닌 다양한 감성을 표현하기 위함.
    cry: number;
    heart: number;
    fire: number;
  };
  isLike: boolean;
  hits: number;
  bookmarks: number;
}

export interface CommunityPostUpload {
  category: string;
  title: string;
  content: string;
  open: string;
  tags: string[];
  thumbnails: string[];
  pictureCount: number;
  poll: {
    link: string;
    time: number;
    target: string;
    startDate: Date;
    endDate: Date;
  };
}

export interface CommunityIsFollow {
  followState: boolean;
}

export interface CommunityCommentIsLike {
  likeState: boolean;
}
