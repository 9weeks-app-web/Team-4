export type PortfolioPageCategory =
  | '전체'
  | 'UXUI디자인'
  | '서비스 기획'
  | '편집 디자인'
  | '웹 디자인';

export interface Portfolios {
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

// 포트폴리오 내용 부분
export interface PortfolioContent {
  title: string;
  description: string;
  tags: string[];
  tools: string[];
  bookmark: string[];
  programs?: string;
  collaborators?: string[];
}

// 포트폴리오 업로드 부분
export interface PortfolioContentType {
  type: 'image' | 'text' | 'movie' | 'external';
  content: string;
}

export interface Portfolio {
  portfolioId: number;
  title: string;
  content: PortfolioContent;
  thumbnail: string;
  job: PortfolioPageCategory;
  portfolio: PortfolioContentType[];
}

export interface PortfolioDetail extends Portfolio {
  userId: number;
  profileImg: string;
  nickname: string;
  like: number;
  hit: number;
  createAt: Date;
}

export interface PortfolioList {
  page: number;
  endPage: number;
  portfolioList: Omit<PortfolioDetail, 'content' | 'portfolio'>[];
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
