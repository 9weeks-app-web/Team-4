export interface User {
  id: number;
  profileImage: string;
  nickname: string;
  email: string;
  password: string;
  phone: string;
  character: {
    major: {
      position:
        | '서비스기획'
        | 'UXUI디자인'
        | '웹 디자인'
        | '편집 디자인'
        | '개발자';
      ability: number;
    };
    minor: {
      position:
        | '서비스기획'
        | 'UXUI디자인'
        | '웹 디자인'
        | '편집 디자인'
        | '개발자';
      ability: number;
    };
  };
  introduction: string;
  skils: string[];
  interest: string[];
  keyword: {};
  activity: [
    {
      title: string;
      startDate: Date;
      endDate: Date;
    },
  ];
  contactTime: {
    start: string;
    end: string;
  };
  badge: string[];
  notification?: {
    gathering: {
      type: '프로젝트' | '스터디';
      filed: '기획' | '개발' | '디자인';
      posititon: 'PM' | '서비스기획' | '프론트엔드' | '백엔드' | '디자이너';
    };
    site: boolean;
    mail: boolean;
    eMail: string;
  };
}

export interface UserTooltip {
  userId: number;
  nickname: string;
  major: string;
  minor: string;
  spectrumImage: string;
  follower: number;
  projectCount: number;
  badgeImages: string[];
  badgeCount: number;
  profileImage: string;
}
[];

export interface UserPortfolioCard {
  id: number;
  thumbnail: string;
}

export interface UserPortfolio {
  userId: number;
  nickname: string;
  profileImage: string;
  major: string;
  minor: string;
  spectrumLV: string;
  follower: number;
  following: number;
  isFollow: boolean;
  portfolios: UserPortfolioCard[];
}

export interface UserRankList {
  userId: number;
  nickname: string;
  rank: number;
  category: string;
  badge: string;
  badgeCount: number;
  feedbackCount: number;
  profileImage: string;
}
[];

export interface Preference {
  userID: string;
  type: string;
  jobSort: string;
  position: string;
  preference: string[];
  noti?: boolean;
  emailNoti?: boolean;
}
