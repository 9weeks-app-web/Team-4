export type PortfolioPageCategory =
  | '전체'
  | 'UXUI디자인'
  | '서비스 기획'
  | '편집 디자인'
  | '웹 디자인';

export interface Portfolios {
  page: number;
  postList: [
    {
      id: number;
      thumbnail: string;
      tag: string;
      title: string;
      profileImg: string;
      nickname: string;
      hit: number;
      like: number;
      isLoggined: boolean;
    },
  ];
}

export interface PortfolioContent {
  title: string;
  description: string;
  tags: string[];
  tools: string[];
  programs?: string[];
  collaborators?: string[];
}

export interface Portfolio {
  portfolioId: number;
  content: PortfolioContent;
  thumbnail: string;
  images: {
    id: number;
    image: string;
  }[];
  text: string;
  videos?: string[];
  urls?: string[];
}

export interface PortfolioDetail extends Portfolio {
  userId: number;
  profileImg: string;
  maintitle: string;
  nickname: string;
  isFollowed: boolean;
  portfolioImg: string;
  like: number;
  hit: number;
  createAt: Date;
  postdate: string;
  otherProjectsImg: string[];
  isBookmarked: boolean;
}

export interface PortfoiloComments {
  postId: number;
  commentId: number;
  contents: string;
  isBookmarked?: boolean;
  selectedBookmark?: string[];
}

export interface PortCommentType {
  id: number;
  profileImage: string;
  nickname: string;
  major: string;
  createdAt: Date;
  profileImg: string;
  content: string;
  like: boolean;
  isBookmarked: boolean;
  selectedBookmark?: string[];
}

export interface MainMyPortfolio {
  selfWrote: boolean;
  portfolios: {
    id: number;
    thumbnail: string;
    hits: number;
    likes: number;
  }[];
}
