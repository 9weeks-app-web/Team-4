export interface Gathering {
  id: number;
  type: string;
  title: string;
  category?: string; // 스터디는 사용 X
  deadline: Date;
  period: Date[];
  meetingPlace: string[]; // [온/오프라인, 장소]
  gatheringTime: string; // 정기모임 일정(매주 토요일 오후 3시)
  contact: string; // 연락방법(카톡오픈챗 url)
  subject: string;
  teamName: string;
  members: {
    userId: string;
    name: string;
    thumbnail: string;
    level: number;
    position: string;
    total: number;
    isLeader: boolean;
  }[];
  participants: {
    PM?: number[]; // [현재 인원, 총 모집 인원]
    planner?: number[];
    frontEnd?: number[];
    backEnd?: number[];
    designer?: number[];
  }[];
  summary: string;
  description: string;
  skills?: string[];
}

export interface GatheringCard {
  id: number;
  type: string;
  Dday: number;
  title: string;
  content: string;
  subject: string;
  tag: string;
  member?: {
    planner?: number;
    PM?: number;
    designer?: number;
    frontEnd?: number;
    backEnd?: number;
  };
  capacity?: number[];
  teamName: string;
  deadline: Date;
  profileImage: string;
  comments: number;
  hits: number;
  bookmark?: boolean;
  skills?: string[];
  jobs?: string[];
  positions?: string[];
  way?: '온/오프라인' | '온라인' | '오프라인';
}

export interface RetrospectCard {
  id: number;
  type: string;
  title: string;
  content?: string;
  teamName: string;
  thumbnail: string;
  profileImage: string;
  likes: number;
  hits: number;
}

export interface RespectCard {
  id: number;
  userId: number;
  nickname: string;
  major: string;
  minor: string;
  profileImage: string;
  spectrumImage: string;
  portfolioImages?: string[];
  badge?: string[];
  following: number;
  follower: number;
}
[];

export interface TodayRespect {
  todayDate: string;
  respectList: {
    id: number;
    userId: number;
    nickname: string;
    profileImage: string;
    spectrumImage: string;
    major: string;
    minor: string;
    badge: string[];
  }[];
}

export interface MonthRespect {
  todayDate: string;
  respectList: {
    id: number;
    userId: number;
    nickname: string;
    profileImage: string;
    spectrumImage: string;
    major: string;
    minor: string;
    follower: number;
    projectCount: number;
    badgeImages: string[];
    badgeCount: number;
    feedbackCount: number;
  }[];
}

export interface Retrospect {
  id: number;
  type: string;
  category?: string;
  title: string;
  subject: string;
  period: Date[];
  teamName: string;
  thumbnail: string;
  members: {
    userId: number;
    name: string;
    userProfile: string;
    level?: number;
    position?: string;
    isLeader?: boolean;
  }[];
  introduction: string;
  retrospect: string;
  skills: string[];
  tags?: string[];
}
