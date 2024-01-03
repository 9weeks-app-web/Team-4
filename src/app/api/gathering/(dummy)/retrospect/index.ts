import { Retrospect, RetrospectCard } from '@/types/gathering';

export const retrospectCardDummy: RetrospectCard[] = [
  {
    id: 1,
    type: 'project',
    title: '프로젝트 이름',
    content: '프로젝트 내용',
    teamName: '팀 이름',
    thumbnail: 'https://dummyimage.com/100x100/74afe3/fff',
    profileImage: 'https://dummyimage.com/100x100/74afe3/fffcom',
    like: 812,
    hits: 812,
  },
  {
    id: 2,
    type: 'study',
    title: '스터디 이름',
    content: '스터디 내용',
    teamName: '팀 이름',
    thumbnail: 'https://dummyimage.com/100x100/74afe3/fff',
    profileImage: 'https://dummyimage.com/100x100/74afe3/fff',
    like: 812,
    hits: 812,
  },
];

export const retrospectDummy: Retrospect[] = [
  {
    id: 1,
    type: 'project',
    category: '사이드 프로젝트',
    title: '4tfolio',
    subject: '여행',
    introduction: '프로젝트 소개 ~~',
    retrospect:
      '초기 브랜딩은 모든 팀원들이 함께 참여하면서 친근감 있는 캐릭터를 어떻게 잡을까 고민했던 것 같아요. 그 가운데 고양이 캐릭터가 탄생했습니다. 그 가운데 고양이 캐릭터가 탄생했습니다.',
    period: [new Date(2023 - 12 - 21), new Date(2023 - 12 - 28)],
    thumbnail: 'https://dummyimage.com/100x100/74afe3/fff',
    teamName: 'team4',
    members: [
      {
        userId: 12,
        name: '김스팩',
        userProfile: 'https://dummyimage.com/100x100/74afe3/fff',
        position: 'PM',
        isLeader: true,
      },
      {
        userId: 13,
        name: '박스팩',
        userProfile: 'https://dummyimage.com/100x100/74afe3/fff',
        position: '프론트엔드',
      },
    ],
    skills: ['React', 'Typescript'],
    tags: ['교육'],
  },
  {
    id: 2,
    type: 'project',
    category: '사이드 프로젝트',
    title: '4tfolio',
    subject: '여행',
    introduction: '프로젝트 소개 ~~',
    retrospect:
      '초기 브랜딩은 모든 팀원들이 함께 참여하면서 친근감 있는 캐릭터를 어떻게 잡을까 고민했던 것 같아요. 그 가운데 고양이 캐릭터가 탄생했습니다. 그 가운데 고양이 캐릭터가 탄생했습니다.',
    period: [new Date(2023 - 12 - 21), new Date(2023 - 12 - 28)],
    thumbnail: 'https://dummyimage.com/100x100/74afe3/fff',
    teamName: 'team4',
    members: [
      {
        userId: 12,
        name: '김스팩',
        userProfile: 'https://dummyimage.com/100x100/74afe3/fff',
        position: 'PM',
        isLeader: true,
      },
      {
        userId: 13,
        name: '박스팩',
        userProfile: 'https://dummyimage.com/100x100/74afe3/fff',
        position: '프론트엔드',
      },
    ],
    skills: ['React', 'Typescript'],
    tags: ['교육'],
  },
  {
    id: 3,
    type: 'project',
    category: '사이드 프로젝트',
    title: '4tfolio',
    subject: '여행',
    introduction: '프로젝트 소개 ~~',
    retrospect:
      '초기 브랜딩은 모든 팀원들이 함께 참여하면서 친근감 있는 캐릭터를 어떻게 잡을까 고민했던 것 같아요. 그 가운데 고양이 캐릭터가 탄생했습니다. 그 가운데 고양이 캐릭터가 탄생했습니다.',
    period: [new Date(2023 - 12 - 21), new Date(2023 - 12 - 28)],
    thumbnail: 'https://dummyimage.com/100x100/74afe3/fff',
    teamName: 'team4',
    members: [
      {
        userId: 12,
        name: '김스팩',
        userProfile: 'https://dummyimage.com/100x100/74afe3/fff',
        position: 'PM',
        isLeader: true,
      },
      {
        userId: 13,
        name: '박스팩',
        userProfile: 'https://dummyimage.com/100x100/74afe3/fff',
        position: '프론트엔드',
      },
    ],
    skills: ['React', 'Typescript'],
    tags: ['교육'],
  },
  {
    id: 4,
    type: 'project',
    category: '사이드 프로젝트',
    title: '4tfolio',
    subject: '여행',
    introduction: '프로젝트 소개 ~~',
    retrospect:
      '초기 브랜딩은 모든 팀원들이 함께 참여하면서 친근감 있는 캐릭터를 어떻게 잡을까 고민했던 것 같아요. 그 가운데 고양이 캐릭터가 탄생했습니다. 그 가운데 고양이 캐릭터가 탄생했습니다.',
    period: [new Date(2023 - 12 - 21), new Date(2023 - 12 - 28)],
    thumbnail: 'https://dummyimage.com/100x100/74afe3/fff',
    teamName: 'team4',
    members: [
      {
        userId: 12,
        name: '김스팩',
        userProfile: 'https://dummyimage.com/100x100/74afe3/fff',
        position: 'PM',
        isLeader: true,
      },
      {
        userId: 13,
        name: '박스팩',
        userProfile: 'https://dummyimage.com/100x100/74afe3/fff',
        position: '프론트엔드',
      },
    ],
    skills: ['React', 'Typescript'],
    tags: ['교육'],
  },
];
