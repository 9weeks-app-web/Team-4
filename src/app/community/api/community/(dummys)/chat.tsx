import { ChatCard } from '@/app/community/types/chat';

const ChatDummy: ChatCard[] = [
  {
    id: 1,
    tag: 'UX/UI',
    title: '서비스 기획하는 사람들',
    people: 999,
    content: 'UX/UI 서비스 기획을 하는 사람들의 모임입니다.',
    involved: '참여중',
    contents: [
      {
        id: '루나',
        content: '내일부터 출근 안 해서 오늘 아니면 내년이에요',
        date: new Date(),
        profileImg: '/images/community/Ellipse_1.png',
      },
      {
        id: '저스틴',
        content: '아하',
        date: new Date(),
        profileImg: '/images/community/Ellipse_2.png',
      },
      {
        id: '사벤져스',
        content: '그렇군요',
        date: new Date(),
        profileImg: '/images/community/Ellipse_3.png',
      },
    ],
  },
  {
    id: 2,
    tag: '서비스 기획',
    title: '기획은 어려워',
    people: 258,
    involved: '참여중',
    content: '기획은 어려운 일이지만 즐거운 일이기도 합니다.',
    contents: [
      {
        id: '저스틴',
        content: '기획이 어렵네요',
        date: new Date(),
        profileImg: '/images/community/Ellipse_1.png',
      },
      {
        id: '사벤져스',
        content: '그렇군요',
        date: new Date(),
        profileImg: '/images/community/Ellipse_2.png',
      },
      {
        id: '기획러',
        content: '맞습니다요',
        date: new Date(),
        profileImg: '/images/community/Ellipse_3.png',
      },
    ],
  },
  {
    id: 3,
    tag: '웹 디자인',
    title: '웹 디자인 고수들의 모임',
    people: 500,
    involved: '둘러보기',
    content: '웹 디자인 분야에서 경험이 풍부한 분들과의 소통 공간입니다.',
    contents: [
      {
        id: '웹디자이너1',
        content: '웹 디자인에 관한 이야기 나누실래요?',
        date: new Date(),
        profileImg: '/images/community/Ellipse_1.png',
      },
      {
        id: '웹디자이너2',
        content: '네, 어떤 주제로 이야기 할까요?',
        date: new Date(),
        profileImg: '/images/community/Ellipse_1.png',
      },
      {
        id: '웹디자이너3',
        content: '최신 트렌드에 대해서 얘기해봐도 좋을 것 같아요!',
        date: new Date(),
        profileImg: '/images/community/Ellipse_3.png',
      },
    ],
  },
  {
    id: 4,
    tag: '편집 디자인',
    involved: '둘러보기',
    title: '편집 디자인 감상 모임',
    people: 350,
    content: '편집 디자인에 대한 감상을 공유하고 함께 성장해봐요.',
    contents: [
      {
        id: '편집디자이너1',
        content: '편집 디자인에 대한 감상을 공유해보세요.',
        date: new Date(),
        profileImg: '/images/community/Ellipse_2.png',
      },
      {
        id: '편집디자이너2',
        content: '최근에 읽은 편집 디자인 책 추천 좀 해주세요!',
        date: new Date(),
        profileImg: '/images/community/Ellipse_3.png',
      },
      {
        id: '편집디자이너3',
        content: '편집 디자인 툴 중에서 어떤 것을 주로 사용하시나요?',
        date: new Date(),
        profileImg: '/images/community/Ellipse_1.png',
      },
    ],
  },
  {
    id: 7,
    tag: 'UX/UI',
    title: 'UX/UI 디자인 트렌드 2024',
    people: 120,
    involved: '둘러보기',
    content: '2024년의 UX/UI 디자인 트렌드에 대해 함께 알아봐요.',
    contents: [
      {
        id: '유디',
        content: '최근의 UX/UI 디자인 트렌드에 대해 어떻게 생각하시나요?',
        date: new Date(),
        profileImg: '/images/community/Ellipse_2.png',
      },
      {
        id: '질문러',
        content: '새로운 도구나 기술에 대한 의견을 공유해주세요.',
        date: new Date(),
        profileImg: '/images/community/Ellipse_3.png',
      },
      {
        id: '포토',
        content: '포토샵 대신 사용하는 다른 툴이 있을까요?',
        date: new Date(),
        profileImg: '/images/community/Ellipse_1.png',
      },
    ],
  },
  {
    id: 8,
    tag: '편집 디자인',
    title: '편집 디자인 고수들의 소소한 이야기',
    people: 180,
    involved: '참여중',
    content: '편집 디자인 분야에서 오랜 경력을 가진 분들의 이야기를 들어봐요.',
    contents: [
      {
        id: '초고수',
        content: '편집 디자인에서 자주 사용하는 색상 조합이 있을까요?',
        date: new Date(),
        profileImg: '/images/community/Ellipse_1.png',
      },
      {
        id: '편디',
        content: '최근에 시도해본 효과 중에 재미있는 것이 있었나요?',
        date: new Date(),
        profileImg: '/images/community/Ellipse_3.png',
      },
      {
        id: '경력15년차',
        content: '추천하는 편집 디자인 관련 온라인 강의가 있으면 알려주세요.',
        date: new Date(),
        profileImg: '/images/community/Ellipse_3.png',
      },
    ],
  },
  {
    id: 9,
    tag: '웹 디자인',
    title: '웹 디자인 초보자 모임',
    people: 90,
    involved: '참여중',
    content: '웹 디자인을 처음 시작하는 분들끼리 서로 도움을 주고 받아요.',
    contents: [
      {
        id: '왕초보',
        content:
          '웹 디자인을 처음 시작하시나요? 어떤 언어부터 공부해야 할까요?',
        date: new Date(),
        profileImg: '/images/community/Ellipse_2.png',
      },
      {
        id: '김웹디',
        content: '좋은 디자인을 위한 웹사이트 추천이 있을까요?',
        date: new Date(),
        profileImg: '/images/community/Ellipse_1.png',
      },
      {
        id: '이디디',
        content: '웹 디자인에서 자주 발생하는 실수와 해결법을 공유해주세요.',
        date: new Date(),
        profileImg: '/images/community/Ellipse_1.png',
      },
    ],
  },
  {
    id: 10,
    tag: '서비스 기획',
    title: '서비스 기획 입문자 모임',
    people: 120,
    involved: '참여중',
    content: '서비스 기획에 관심 있는 입문자들끼리 모여 공부하고 나눠요.',
    contents: [
      {
        id: '이기획',
        content: '서비스 기획에 관심을 가지고 있는데, 어떻게 시작해야 할까요?',
        date: new Date(),
        profileImg: '/images/community/Ellipse_3.png',
      },
      {
        id: '서비스센터',
        content: '서비스 기획자로서 성공적인 경력을 쌓는 팁이 있을까요?',
        date: new Date(),
        profileImg: '/images/community/Ellipse_3.png',
      },
      {
        id: '박서비',
        content: '좋은 서비스 기획을 위한 책이나 자료를 추천해주세요.',
        date: new Date(),
        profileImg: '/images/community/Ellipse_1.png',
      },
    ],
  },
];

export default ChatDummy;
