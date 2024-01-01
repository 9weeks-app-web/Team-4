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
  },
  job: 'UXUI디자인',
  portfolio: [
    {
      type: 'image',
      content: 'https://dummyimage.com/800X450/000/fff.jpg&text=dummys',
    },
  ],
  thumbnail: 'https://dummyimage.com/278X208/000/fff.jpg&text=thumbnail',
  createAt: new Date('2024-01-01'),
  hit: 0,
  like: 0,
  userId: 0,
  nickname: '홍길동',
  profileImg: 'https://dummyimage.com/24X24/000/fff.jpg&text=Pro',
};

export const portfolioDummy2: PortfolioDetail = {
  portfolioId: 2,
  title: '작업제목',
  content: {
    title: '작업제목',
    description: '더미 테스트 파일입니다.',
    tags: ['UXUI디자인', 'Figma', 'Adobe'],
    tools: ['figma', 'Photoshop'],
    programs: 'UIUX 인턴형 프로그램 과정',
    collaborators: ['홍길동'],
  },
  job: 'UXUI디자인',
  portfolio: [
    {
      type: 'image',
      content: 'https://dummyimage.com/800X450/000/fff.jpg&text=dummys',
    },
  ],
  thumbnail: 'https://dummyimage.com/278X208/000/fff.jpg&text=thumbnail',
  createAt: new Date('2024-01-01'),
  hit: 0,
  like: 0,
  userId: 0,
  nickname: '홍길동',
  profileImg: 'https://dummyimage.com/24X24/000/fff.jpg&text=Pro',
};

export const portfolioDummy3: PortfolioDetail = {
  portfolioId: 3,
  title: '작업제목',
  content: {
    title: '작업제목',
    description: '더미 테스트 파일입니다.',
    tags: ['UXUI디자인', 'Figma', 'Adobe'],
    tools: ['figma', 'Photoshop'],
    programs: 'UIUX 인턴형 프로그램 과정',
    collaborators: ['홍길동'],
  },
  job: 'UXUI디자인',
  portfolio: [
    {
      type: 'image',
      content: 'https://dummyimage.com/800X450/000/fff.jpg&text=dummys',
    },
  ],
  thumbnail: 'https://dummyimage.com/278X208/000/fff.jpg&text=thumbnail',
  createAt: new Date('2024-01-01'),
  hit: 0,
  like: 0,
  userId: 0,
  nickname: '홍길동',
  profileImg: 'https://dummyimage.com/24X24/000/fff.jpg&text=Pro',
};

export const portfolioDummy4: PortfolioDetail = {
  portfolioId: 4,
  title: '작업제목',
  content: {
    title: '작업제목',
    description: '더미 테스트 파일입니다.',
    tags: ['UXUI디자인', 'Figma', 'Adobe'],
    tools: ['figma', 'Photoshop'],
    programs: 'UIUX 인턴형 프로그램 과정',
    collaborators: ['홍길동'],
  },
  job: 'UXUI디자인',
  portfolio: [
    {
      type: 'image',
      content: 'https://dummyimage.com/800X450/000/fff.jpg&text=dummys',
    },
  ],
  thumbnail: 'https://dummyimage.com/278X208/000/fff.jpg&text=thumbnail',
  createAt: new Date('2024-01-01'),
  hit: 0,
  like: 0,
  userId: 0,
  nickname: '홍길동',
  profileImg: 'https://dummyimage.com/24X24/000/fff.jpg&text=Pro',
};

// export const portfolioDummys: Omit<PortfolioDetail, 'content' | 'portfolio'>[] =
//   [portfolioDummy, portfolioDummy2, portfolioDummy3, portfolioDummy4];
export const portfolioDummys: Omit<PortfolioDetail, 'content' | 'portfolio'>[] =
  Array.from({ length: 30 }, (_, index) => ({
    ...portfolioDummy,
    portfolioId: portfolioDummy.portfolioId + index,
  }));
