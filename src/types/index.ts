export interface AdBannerList {
  link: string;
}
[];

export interface RecommandProjectList {
  // 메인 스팩픽, 인기 포트폴리오, 신규 포트폴리오
  id: number;
  title: string;
  nickname: string;
  thumbnail: string;
  profileImage: string;
  content: string;
  hits: number;
  likes: number;
  category: string;
}
[];

export interface WritingPortfolio {
  temp: boolean;
}

// RECRUIT
export interface Recruit {
  id: number;
  tumbnail: string;
  position: string;
  Dday: number;
  bookmakr: boolean;
}

export interface RecruitList {
  page: number;
  endPage: number;
  recruitList: [
    {
      id: number;
      thumbnail: string;
      title: string;
      company: string;
      Dday: number;
      bookmark: boolean;
    },
  ];
}
