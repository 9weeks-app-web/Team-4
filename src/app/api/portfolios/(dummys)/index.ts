import { Portfolio, PortfolioDetail, Portfolios } from '@/types/portfolio';

export const portfolioDummy: PortfolioDetail = {
  portfolioId: 1,
  title: '작업제목',
  content: {
    title: '작업제목',
    description: '더미 테스트 파일입니다.',
    tags: ['UXUI디자인', 'Figma', 'Adobe'],
    tools: ['figma', 'Photoshop'],
    programs: 'UIUX 인턴형 프로그램 과정',
    collaborators: ['홍길동'],
    bookmark: [],
  },
  job: 'UXUI디자인',
  portfolio: [
    {
      type: 'image',
      content: '/portfolios/full/3.jpg',
    },
  ],
  thumbnail: '/portfolios/small/4.png',
  createAt: new Date('2024-01-01'),
  hit: 0,
  like: 0,
  userId: 0,
  nickname: '홍길동',
  profileImg: '/portfolios/profile.svg',
};

export const portfolioDummy2: PortfolioDetail = {
  portfolioId: 31,
  title: '작업제목',
  content: {
    title: '작업제목',
    description: '더미 테스트 파일입니다.',
    tags: ['UXUI디자인', 'Figma', 'Adobe'],
    tools: ['figma', 'Photoshop'],
    programs: 'UIUX 인턴형 프로그램 과정',
    collaborators: ['홍길동'],
    bookmark: [],
  },
  job: 'UXUI디자인',
  portfolio: [
    {
      type: 'image',
      content: '/portfolios/full/2.png',
    },
  ],
  thumbnail: '/portfolios/small/1.png',
  createAt: new Date('2024-01-01'),
  hit: 223,
  like: 992,
  userId: 1,
  nickname: '홍길동',
  profileImg: '/portfolios/profile.svg',
};

export const portfolioDummy3: PortfolioDetail = {
  portfolioId: 32,
  title: '작업제목',
  content: {
    title: '작업제목',
    description: '더미 테스트 파일입니다.',
    tags: ['UXUI디자인', 'Figma', 'Adobe'],
    tools: ['figma', 'Photoshop'],
    programs: 'UIUX 인턴형 프로그램 과정',
    collaborators: ['홍길동'],
    bookmark: [],
  },
  job: 'UXUI디자인',
  portfolio: [
    {
      type: 'image',
      content: '/portfolios/full/1.jpg',
    },
  ],
  thumbnail: '/portfolios/small/2.png',
  createAt: new Date('2024-01-01'),
  hit: 999,
  like: 333,
  userId: 0,
  nickname: '홍길동',
  profileImg: '/portfolios/profile.svg',
};

export const portfolioDummy4: PortfolioDetail = {
  portfolioId: 33,
  title: '작업제목',
  content: {
    title: '작업제목',
    description: '더미 테스트 파일입니다.',
    tags: ['UXUI디자인', 'Figma', 'Adobe'],
    tools: ['figma', 'Photoshop'],
    programs: 'UIUX 인턴형 프로그램 과정',
    collaborators: ['홍길동'],
    bookmark: ['데스크 리서치', '유저 리서치', '퍼소나'],
  },
  job: 'UXUI디자인',
  portfolio: [
    {
      type: 'text',
      content: '데스크 리서치',
    },
    {
      type: 'image',
      content: '/portfolios/full/1.jpg',
    },
    {
      type: 'image',
      content: '/portfolios/full/2.png',
    },
    {
      type: 'text',
      content: '유저 리서치',
    },
    {
      type: 'image',
      content: '/portfolios/full/3.jpg',
    },
    {
      type: 'image',
      content: '/portfolios/full/4.png',
    },
    {
      type: 'text',
      content: '퍼소나',
    },
    {
      type: 'image',
      content: '/portfolios/full/5.png',
    },
  ],
  thumbnail: '/portfolios/small/3.png',
  createAt: new Date('2024-01-03'),
  hit: 1,
  like: 2,
  userId: 0,
  nickname: '홍길동',
  profileImg: '/portfolios/profile.svg',
};

// export const portfolioDummys: Omit<PortfolioDetail, 'content' | 'portfolio'>[] =
//   [portfolioDummy, portfolioDummy2, portfolioDummy3, portfolioDummy4];
export const portfolioDummys: PortfolioDetail[] = Array.from(
  { length: 15 },
  (_, index) => ({
    ...portfolioDummy,
    portfolioId: portfolioDummy.portfolioId + index,
  }),
);

portfolioDummys.push(portfolioDummy2);
portfolioDummys.push(portfolioDummy3);
portfolioDummys.push(portfolioDummy4);
