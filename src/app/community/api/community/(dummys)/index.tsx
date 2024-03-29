import { CommunityDetail } from '@/types/community';

const CommunityDummys: CommunityDetail[] = [
  {
    id: 1,
    nickname: '하으니',
    profileImg: '/images/community/Ellipse_2.png',
    badge: '/images/community/badge5.png',
    major: 'UI/UX 디자이너',
    createdAt: new Date('2024-01-01T02:43:00'),
    title: '새 프로젝트 드디어 시작',
    thumbnail: [
      '/images/community/thumnails/ux_1.jpg',
      '/images/community/thumnails/ux_2.jpg',
      '/images/community/thumnails/ux_3.jpg',
      'https://dummyimage.com/600x400/42e0ff/ffffff&text=C',
    ],
    pictureCount: 4,
    content: `
    개발과 무관한 전공이고, 대학교 동아리에서 창업 경진대회 준비를 하다가 개발에 관심히 생겨 이후 독학 중입니다. 말이 독학이지 클론 코딩 몇번 해본게 전부라, 현재 개발자 취업 준비 중이라고 제 입으로 말하기도 부끄러운 상태입니다.
    내년 안으로 취업이 목표라 여러 생각들이 많아, 현직자 분들이 많이 모여있는 곳에 질문을 드립니다.
    
    1. 부트캠프를 수강하려 하는데, 정말 98% 수료율, 99% 취업률 등이 진실인가요?
    부트캠프를 수강하신 선배님들 입장에서는 이러한 수치가 정말인지?
    부트캠프 전반적인 분위기가 어떤지 궁금합니다.
    
    2. 부트캠프는 배민 네이버 사피 등 대기업에서 운영하는 것이 아니면 절대 가지마라고 하던데 정말인가요? 사실 일년안으로 개발자 취업을 생각중이라 올해안에 꼭 부트캠프에 입학을 희망하고 있습니다. 대기업에서 연계 운영하는 부트캠프의 경우 탈락의 위험성도 생각을 안할 수가 없어 조금 불안한게 사실인데 위의 부트캠프들 아니면 절대 가지 않는게 맞을까요?
    
    3. 현재 오프라인 부트캠프 위주로 생각하고 있는데 오프라인 부트캠프는 위코드, 바닐라코딩 두개가 유명하더군요. 혹시 두개 들어보신 선배님들이 있다면 전체적인 분위기는 어떤지, 어떻게 생각하시는지 알려주시면 감사하겠습니다.
    그외 부트캠프를 통해서 비전공자 개발자 취업에 성공하신 개발자 분들이 있다면 지혜를 나눠주시면 좋을 것 같습니다. 부트캠프 고르는 팁 등등 알려주시면 내년도 등록시에 참고하겠습니다.
  `,
    commentCounts: 326,
    likes: 812,
    reactions: {
      cry: 123,
      heart: 123,
      fire: 123,
    },
    isLike: false,
    hits: 1200,
    bookmarks: 300,
    open: '전체공개',
    tags: ['UX/UI', '시작'],
    category: '자유주제',
  },
  {
    id: 2,
    nickname: '디벨로퍼',
    profileImg: '/images/community/Ellipse_1.png',
    badge: '/images/community/badge4.png',
    major: 'Frontend Developer',
    createdAt: new Date('2024-01-01T12:25:00'),
    title: 'React 프로젝트 완료!',
    thumbnail: ['/images/community/thumnails/ux_4.jpg'],
    pictureCount: 1,
    content: 'React 프로젝트를 완료했습니다. 여러분들의 의견을 기다립니다!',
    commentCounts: 256,
    likes: 512,
    reactions: {
      cry: 50,
      heart: 100,
      fire: 75,
    },
    isLike: true,
    hits: 512,
    bookmarks: 256,
    open: '전체공개',
    tags: ['React'],
    category: '자유주제',
  },
  {
    id: 3,
    nickname: '데이터사이언티스트',
    profileImg: '/images/community/Ellipse_3.png',
    badge: '/images/community/badge3.png',
    major: 'Data Scientist',
    createdAt: new Date('2023-06-01T11:10:00'),
    title: '빅데이터 분석 프로젝트 시작',
    thumbnail: ['/images/community/thumnails/ux_5.png'],
    pictureCount: 1,
    content:
      '빅데이터 분석 프로젝트를 시작했습니다. 다양한 데이터를 활용해보겠습니다.',
    commentCounts: 128,
    likes: 256,
    reactions: {
      cry: 30,
      heart: 60,
      fire: 40,
    },
    isLike: false,
    hits: 256,
    bookmarks: 128,
    open: '회원공개',
    category: '자유주제',
  },
  {
    id: 4,
    nickname: '서버맨',
    profileImg: '/images/community/Ellipse_4.png',
    badge: '/images/community/badge4.png',
    major: 'Backend Developer',
    createdAt: new Date('2024-01-03T02:25:00'),
    title: '서버 개발 시작!',
    thumbnail: ['/images/community/thumnails/ux_6.jpg'],
    pictureCount: 1,
    content:
      '서버 개발 프로젝트를 시작했습니다. 안정적인 서비스를 제공하겠습니다.',
    commentCounts: 64,
    likes: 128,
    reactions: {
      cry: 15,
      heart: 30,
      fire: 20,
    },
    isLike: true,
    hits: 128,
    bookmarks: 64,
    open: '전체공개',
    tags: ['서버', '개발'],
    category: '자유주제',
  },
  {
    id: 5,
    nickname: '머신러닝마스터',
    profileImg: '/images/community/Ellipse_6.png',
    badge: '/images/community/badge2.png',
    major: 'Machine Learning Engineer',
    createdAt: new Date('2023-12-25T14:28:00'),
    title: 'GAN을 활용한 이미지 생성 프로젝트 시작',
    thumbnail: ['/images/community/thumnails/ux_7.jpg'],
    pictureCount: 3,
    content: 'GAN을 이용한 이미지 생성 프로젝트를 시작했습니다. 기대해주세요!',
    commentCounts: 120,
    likes: 240,
    reactions: {
      cry: 25,
      heart: 50,
      fire: 35,
    },
    isLike: false,
    hits: 240,
    bookmarks: 120,
    open: '전체공개',
    tags: ['머신러닝'],
    category: '자유주제',
  },

  {
    id: 6,
    nickname: '데이터분석가',
    profileImg: '/images/community/Ellipse_2.png',
    badge: '/images/community/badge1.png',
    major: 'Data Analyst',
    createdAt: new Date('2023-11-01T20:32:00'),
    title: '통계 분석을 활용한 마케팅 전략 수립 중',
    thumbnail: ['/images/community/thumnails/ux_8.jpg'],
    pictureCount: 2,
    content:
      '통계 분석을 통해 효과적인 마케팅 전략을 수립 중입니다. 의견 부탁드려요!',
    commentCounts: 90,
    likes: 180,
    reactions: {
      cry: 15,
      heart: 30,
      fire: 20,
    },
    isLike: true,
    hits: 180,
    bookmarks: 90,
    open: '회원공개',
    category: '자유주제',
  },

  {
    id: 7,
    nickname: '풀스택개발자',
    profileImg: '/images/community/Ellipse_5.png',
    badge: '/images/community/badge1.png',
    major: 'Full Stack Developer',
    createdAt: new Date('2023-12-12T12:25:00'),
    title: 'GraphQL을 활용한 서버 개발 중',
    thumbnail: ['/images/community/thumnails/ux_9.jpg'],
    pictureCount: 1,
    content:
      'GraphQL을 이용하여 다양한 데이터를 효율적으로 처리하는 서버를 개발 중입니다.',
    commentCounts: 48,
    likes: 96,
    reactions: {
      cry: 12,
      heart: 24,
      fire: 16,
    },
    isLike: false,
    hits: 96,
    bookmarks: 48,
    open: '회원공개',
    tags: ['풀스택'],
    category: '자유주제',
  },

  {
    id: 8,
    nickname: '디자인파이터',
    profileImg: '/images/community/Ellipse_4.png',
    badge: '/images/community/badge4.png',
    major: 'Graphic Designer',
    createdAt: new Date('2024-01-01T11:30:00'),
    title: '웹 디자인 콘셉트 아이디어 구상 중',
    thumbnail: ['/images/community/thumnails/ux_10.jpg'],
    pictureCount: 0,
    content:
      '다가오는 웹 프로젝트의 디자인 콘셉트에 대한 아이디어를 구상 중입니다.',
    commentCounts: 30,
    likes: 60,
    reactions: {
      cry: 8,
      heart: 12,
      fire: 10,
    },
    isLike: true,
    hits: 60,
    bookmarks: 30,
    open: '회원공개',
    tags: ['디자인', '파이터', '진짜'],
    category: '자유주제',
  },

  {
    id: 9,
    nickname: '빅데이터분석가',
    profileImg: '/images/community/Ellipse_1.png',
    badge: '/images/community/badge5.png',
    major: 'Big Data Analyst',
    createdAt: new Date('2024-01-02T17:55:00'),
    title: '클라우드 기반 빅데이터 분석 도구 사용 중',
    thumbnail: ['/images/community/thumnails/ux_11.jpg'],
    pictureCount: 4,
    content:
      '클라우드 기반의 빅데이터 분석 도구를 활용하여 다양한 데이터를 분석 중입니다.',
    commentCounts: 110,
    likes: 220,
    reactions: {
      cry: 18,
      heart: 36,
      fire: 25,
    },
    isLike: false,
    hits: 220,
    bookmarks: 110,
    open: '나만보기',
    category: '자유주제',
  },

  {
    id: 10,
    nickname: '백엔드마스터',
    profileImg: '/images/community/Ellipse_2.png',
    badge: '/images/community/badge3.png',
    major: 'Backend Developer',
    createdAt: new Date('2024-01-03T12:20:00'),
    title: 'Node.js 기반 서버 프로젝트 시작',
    thumbnail: ['/images/community/thumnails/ux_1.jpg'],
    pictureCount: 2,
    content:
      'Node.js를 기반으로 한 서버 프로젝트를 시작했습니다. 안정적인 서비스 제공을 목표로 하고 있습니다.',
    commentCounts: 80,
    likes: 160,
    reactions: {
      cry: 14,
      heart: 28,
      fire: 20,
    },
    isLike: true,
    hits: 160,
    bookmarks: 80,
    open: '나만보기',
    category: '자유주제',
  },
];

const QnADummys: CommunityDetail[] = [
  {
    id: 11,
    nickname: '질문맨',
    profileImg: '/images/community/Ellipse_5.png',
    badge: '/images/community/badge3.png',
    major: '프론트엔드 개발자',
    createdAt: new Date('2023-04-05T12:25:00'),
    title: 'React에서 발생한 오류 질문',
    thumbnail: [
      '/images/community/thumnails/ux_8.jpg',
      '/images/community/thumnails/ux_5.png',
    ],
    pictureCount: 2,
    content:
      'React 프로젝트 중에 발생한 오류에 대해 도움이 필요합니다. 어떻게 해결할 수 있을까요?',
    commentCounts: 32,
    likes: 300,
    reactions: { cry: 10, heart: 5, fire: 3 },
    isLike: false,
    hits: 643,
    bookmarks: 32,
    type: '커리어',
    open: '나만보기',
    tags: ['질문', '프론트'],
    category: 'QnA',
  },
  {
    id: 12,
    nickname: '질문러너',
    profileImg: '/images/community/Ellipse_4.png',
    badge: '/images/community/badge5.png',
    major: '백엔드 개발자',
    createdAt: new Date('2024-01-01T16:35:00'),
    title: 'Django에서의 성능 최적화에 관한 질문',
    thumbnail: ['/images/community/thumnails/ux_10.jpg'],
    pictureCount: 1,
    content:
      'Django 프로젝트에서 성능 최적화에 대해 궁금합니다. 어떤 방법을 사용하는 것이 좋을까요?',
    commentCounts: 18,
    likes: 36,
    reactions: { cry: 7, heart: 12, fire: 4 },
    isLike: false,
    hits: 36,
    bookmarks: 18,
    type: '포트폴리오',
    open: '전체공개',
    tags: ['백엔드맨'],
    category: 'QnA',
  },
  {
    id: 13,
    nickname: '질문자',
    profileImg: '/images/community/Ellipse_2.png',
    badge: '/images/community/badge4.png',
    major: '디자이너',
    createdAt: new Date('2024-01-03T21:32:00'),
    title: '웹 디자인에서의 컬러 조합에 대한 질문',
    thumbnail: ['/images/community/thumnails/ux_8.jpg'],
    pictureCount: 1,
    content:
      '웹 디자인에서 좋은 컬러 조합을 찾기 어려워서 도움이 필요합니다. 어떤 컬러를 추천하시나요?',
    commentCounts: 45,
    likes: 90,
    reactions: { cry: 3, heart: 25, fire: 8 },
    isLike: false,
    hits: 90,
    bookmarks: 45,
    type: '포트폴리오',
    open: '전체공개',
    category: 'QnA',
  },
  {
    id: 14,
    nickname: '질문왕',
    profileImg: '/images/community/Ellipse_1.png',
    badge: '/images/community/badge1.png',
    major: '데이터사이언티스트',
    createdAt: new Date('2024-01-02T22:25:00'),
    title: '데이터 분석 도구에 관한 질문',
    thumbnail: ['/images/community/thumnails/ux_10.jpg'],
    pictureCount: 1,
    content:
      '데이터 분석에 사용되는 효과적인 도구에 대한 추천이 필요합니다. 어떤 도구를 사용하시나요?',
    commentCounts: 22,
    likes: 44,
    reactions: { cry: 15, heart: 8, fire: 10 },
    isLike: false,
    hits: 44,
    bookmarks: 22,
    type: '커리어',
    open: '전체공개',
    tags: ['데이터', '사이언스'],
    category: 'QnA',
  },
  {
    id: 15,
    nickname: '질문탐구자',
    profileImg: '/images/community/Ellipse_2.png',
    badge: '/images/community/badge1.png',
    major: '프론트엔드 개발자',
    createdAt: new Date('2024-01-01T13:25:00'),
    title: '웹 성능 최적화에 대한 질문',
    thumbnail: [
      '/images/community/thumnails/ux_4.jpg',
      '/images/community/thumnails/ux_2.jpg',
    ],
    pictureCount: 1,
    content:
      '웹 성능 최적화에 관련된 팁이나 가이드라인을 알고 싶습니다. 도움 부탁드립니다!',
    commentCounts: 27,
    likes: 54,
    reactions: { cry: 6, heart: 18, fire: 12 },
    isLike: false,
    hits: 54,
    bookmarks: 27,
    type: '커리어',
    open: '회원공개',
    tags: ['탐구자', '프로', '질문러'],
    category: 'QnA',
  },
  {
    id: 16,
    nickname: '더미맨',
    profileImg: '/images/community/Ellipse_3.png',
    badge: '/images/community/badge1.png',
    major: '더미 개발자',
    createdAt: new Date('2024-01-03T13:33:00'),
    title: '더미 데이터에 관한 질문',
    thumbnail: ['/images/community/thumnails/ux_5.png'],
    pictureCount: 1,
    content:
      '더미 데이터를 사용하는 중에 발생한 문제에 대해 도움이 필요합니다. 더미 데이터에 대해 질문이 있습니다.',
    commentCounts: 15,
    likes: 30,
    reactions: { cry: 8, heart: 10, fire: 5 },
    isLike: false,
    hits: 30,
    bookmarks: 15,
    open: '회원공개',
    tags: ['더미', '개발자', '더미인간'],
    category: 'QnA',
  },
];

const JobDummys: CommunityDetail[] = [
  {
    id: 17,
    nickname: 'UX/UI구직자',
    profileImg: '/images/community/Ellipse_4.png',
    badge: '/images/community/badge2.png',
    major: 'UX/UI 디자이너',
    createdAt: new Date('2023-04-05T07:25:00'),
    title: 'UX/UI 디자이너 경력 3년차, 채용 공고',
    thumbnail: [
      '/images/community/thumnails/ux_11.jpg',
      '/images/community/thumnails/ux_2.jpg',
      '/images/community/thumnails/ux_4.jpg',
    ],
    pictureCount: 3,
    content:
      '저희 회사에서 UX/UI 디자이너를 찾습니다. 경력 3년차 이상이시면 지원해주세요!',
    commentCounts: 15,
    likes: 430,
    reactions: { cry: 5, heart: 10, fire: 5 },
    isLike: false,
    hits: 303,
    bookmarks: 15,
    type: 'UX/UI',
    open: '전체공개',
    tags: ['구직', '희망', '제발'],
    category: '직업별 게시판',
  },
  {
    id: 18,
    nickname: 'UX마스터',
    profileImg: '/images/community/Ellipse_2.png',
    badge: '/images/community/badge4.png',
    major: 'UX/UI 디자이너',
    createdAt: new Date('2023-04-05T08:30:00'),
    title: 'UX/UI 이직하고 싶습니다!!',
    thumbnail: ['/images/community/thumnails/ux_9.jpg'],
    pictureCount: 1,
    content:
      'UX/UI 디자이너 경력 3년차인데 조건이 너무 좋은 회사에 합격해서 이직을 하고 싶습니다. ',
    commentCounts: 55,
    likes: 438,
    reactions: { cry: 30, heart: 5, fire: 2 },
    isLike: false,
    hits: 400,
    bookmarks: 25,
    type: 'UX/UI',
    open: '전체공개',
    tags: ['이직'],
    category: '직업별 게시판',
  },
  {
    id: 19,
    nickname: '채용담당자',
    profileImg: '/images/community/Ellipse_1.png',
    badge: '/images/community/badge2.png',
    major: '인사 담당자',
    createdAt: new Date('2024-01-01T09:05:00'),
    title: '데이터사이언티스트 서비스 기획 공고',
    thumbnail: ['/images/community/thumnails/ux_10.jpg'],
    pictureCount: 1,
    content:
      '우리 회사에서 데이터사이언티스트 서비스 기획자를 모십니다. 데이터 분석 및 머신러닝 경험이 있는 분 환영!',
    commentCounts: 10,
    likes: 20,
    reactions: { cry: 3, heart: 7, fire: 5 },
    isLike: false,
    hits: 20,
    bookmarks: 10,
    type: '서비스 기획',
    open: '전체공개',
    tags: ['채용'],
    category: '직업별 게시판',
  },
  {
    id: 20,
    nickname: '디자인마스터',
    profileImg: '/images/community/Ellipse_5.png',
    badge: '/images/community/badge1.png',
    major: '그래픽 디자이너',
    createdAt: new Date('2024-01-03T10:25:00'),
    title: '그래픽 디자이너 채용 중!',
    thumbnail: ['/images/community/thumnails/ux_8.jpg'],
    pictureCount: 1,
    content:
      '우리 회사에서 그래픽 디자이너를 찾습니다. 창의적이고 열정적인 분들의 지원을 기다립니다.',
    commentCounts: 25,
    likes: 50,
    reactions: { cry: 8, heart: 15, fire: 7 },
    isLike: false,
    hits: 50,
    bookmarks: 25,
    type: '웹 디자인',
    open: '회원공개',
    tags: ['디자이너', '상시채용'],
    category: '직업별 게시판',
  },
  {
    id: 21,
    nickname: '마케팅고수',
    profileImg: '/images/community/Ellipse_4.png',
    badge: '/images/community/badge3.png',
    major: '마케팅 전문가',
    createdAt: new Date('2024-02-15T12:25:00'),
    title: '마케팅 전문가 모집합니다!',
    thumbnail: ['/images/community/thumnails/ux_7.jpg'],
    pictureCount: 1,
    content:
      '마케팅 업무에 경험이 있는 전문가를 찾습니다. 성과에 따른 보너스가 있습니다!',
    commentCounts: 18,
    likes: 36,
    reactions: { cry: 5, heart: 10, fire: 6 },
    isLike: false,
    hits: 36,
    bookmarks: 18,
    type: '서비스 기획',
    open: '전체공개',
    tags: ['마케팅', '쌉고수'],
    category: '직업별 게시판',
  },
  {
    id: 22,
    nickname: '웹디자인전문가',
    profileImg: '/images/community/Ellipse_2.png',
    badge: '/images/community/badge5.png',
    major: '웹 디자인',
    createdAt: new Date('2024-03-10T12:31:00'),
    title: '웹 디자이너 채용 중',
    thumbnail: ['/images/community/thumnails/ux_6.jpg'],
    pictureCount: 1,
    content:
      '우리 회사에서 경력 있는 웹 디자이너를 찾습니다. 다양한 프로젝트에 참여해보세요!',
    commentCounts: 12,
    likes: 24,
    reactions: { cry: 4, heart: 8, fire: 4 },
    isLike: false,
    hits: 24,
    bookmarks: 12,
    type: '웹 디자인',
    open: '전체공개',
    tags: ['급구'],
    category: '직업별 게시판',
  },
  {
    id: 23,
    nickname: '편집전문가',
    profileImg: '/images/community/Ellipse_1.png',
    badge: '/images/community/badge2.png',
    major: '영상 편집',
    createdAt: new Date('2024-03-10T18:25:00'),
    title: '영상 편집 이렇게 해야합니까?',
    thumbnail: ['/images/community/thumnails/ux_2.jpg'],
    pictureCount: 1,
    content:
      '영상 편집에 대해 학부생때 공부를 했는데 아직까지 어떻게 진행을 해야 할지 모르겠습니다.',
    commentCounts: 16,
    likes: 30,
    reactions: { cry: 10, heart: 10, fire: 10 },
    isLike: false,
    hits: 21,
    bookmarks: 2,
    type: '편집 디자인',
    open: '전체공개',
    tags: ['편집', '맞나'],
    category: '직업별 게시판',
  },
  {
    id: 24,
    nickname: '인생편집',
    profileImg: '/images/community/Ellipse_4.png',
    badge: '/images/community/badge3.png',
    major: '영상 편집',
    createdAt: new Date('2024-03-10T18:30:00'),
    title: '인생 편집을 원하십니까?',
    thumbnail: ['/images/community/thumnails/ux_1.jpg'],
    pictureCount: 1,
    content: '인생 편집을 원하십니까? 지금 바로 댓글을 남겨주세요!!!!',
    commentCounts: 3,
    likes: 33,
    reactions: { cry: 11, heart: 11, fire: 11 },
    isLike: false,
    hits: 80,
    bookmarks: 20,
    type: '편집 디자인',
    open: '전체공개',
    tags: ['인생', '편집'],
    category: '직업별 게시판',
  },
];

export interface SurveyDummyData {
  id: number;
  nickname: string;
  badge: string;
  profileImg: string;
  major: string;
  date: Date;
  deadline: Date;
  title: string;
  content: string;
  time: string;
  target: string;
  link: string;
}

const surveyDummyData: SurveyDummyData[] = [
  {
    id: 25,
    nickname: '김디자',
    badge: '/images/community/badge5.png',
    profileImg: '/images/community/Ellipse_4.png',
    major: 'UX/UI 디자이너',
    date: new Date('2024-01-01T18:25:00'),
    deadline: new Date('2024-01-15'),
    title: 'UXUI 관련 설문조사',
    content: 'UXUI 관련 설문조사에 참여해주세요!',
    time: '3분',
    target: '누구나',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSePKuJ1ucFO7bWa2poxhCvcqr8HdJX9NAkNEVkoFxYCO2zpIQ/viewform',
  },
  {
    id: 26,
    nickname: '박프론',
    badge: '/images/community/badge5.png',
    profileImg: '/images/community/Ellipse_1.png',
    major: '프론트엔드 개발자',
    date: new Date('2024-01-02T12:05:00'),
    deadline: new Date('2024-01-17'),
    title: '프론트엔드 기술 설문조사',
    content: '프론트엔드 기술에 관한 설문조사에 참여해주세요!',
    time: '5분',
    target: '직장인',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSePKuJ1ucFO7bWa2poxhCvcqr8HdJX9NAkNEVkoFxYCO2zpIQ/viewform',
  },
  {
    id: 27,
    nickname: '백엔드',
    badge: '/images/community/badge2.png',
    profileImg: '/images/community/Ellipse_2.png',
    major: '백엔드 개발자',
    date: new Date('2024-01-03T18:50:00'),
    deadline: new Date('2024-01-20'),
    title: '백엔드 기술 설문조사',
    content: '백엔드 기술에 관한 설문조사에 참여해주세요!',
    time: '7분',
    target: '직장인',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSePKuJ1ucFO7bWa2poxhCvcqr8HdJX9NAkNEVkoFxYCO2zpIQ/viewform',
  },
  {
    id: 28,
    nickname: '이과학',
    badge: '/images/community/badge4.png',
    profileImg: '/images/community/Ellipse_3.png',
    major: '데이터 과학자',
    date: new Date('2024-01-04T11:38:00'),
    deadline: new Date('2024-01-25'),
    title: '데이터 분석 도구 설문조사',
    content: '데이터 분석 도구에 관한 설문조사에 참여해주세요!',
    time: '1분',
    target: '대학생',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSePKuJ1ucFO7bWa2poxhCvcqr8HdJX9NAkNEVkoFxYCO2zpIQ/viewform',
  },
];

export { CommunityDummys, QnADummys, JobDummys, surveyDummyData };
