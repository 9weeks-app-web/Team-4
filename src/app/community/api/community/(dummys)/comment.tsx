import { CommentType } from '@/types/comment';
const DummyComment: CommentType[] = [
  {
    id: 1,
    profileImage: '/images/community/Ellipse_2.png',
    major: 'UI/UX 디자이너',
    nickname: '하으니',
    badgeIamge: '/images/community/badge5.png',
    content: '정말 좋은 게시물이에요!',
    createdAt: new Date('2024-01-10T12:31:00'),
    like: false,
  },
  {
    id: 2,
    profileImage: '/images/community/Ellipse_1.png',
    major: '개발자',
    nickname: '코딩마스터',
    badgeIamge: '/images/community/badge3.png',
    content: '좋아요!',
    createdAt: new Date('2023-04-10T15:38:00'),
    like: false,
  },
  {
    id: 3,
    profileImage: '/images/community/Ellipse_3.png',
    major: '디자이너',
    nickname: '디자인마법사',
    badgeIamge: '/images/community/badge2.png',
    content: '멋져요!',
    createdAt: new Date('2024-01-10T19:31:00'),
    like: false,
  },
  {
    id: 4,
    profileImage: '/images/community/Ellipse_4.png',
    major: '마케터',
    nickname: '마케팅의 달인',
    badgeIamge: '/images/community/badge4.png',
    content: '핵심 포인트 감사합니다!',
    createdAt: new Date('2023-09-10T20:31:00'),
    like: false,
  },
];

const SubDummyComment: CommentType[] = [
  {
    id: 1,
    profileImage: '/images/community/Ellipse_5.png',
    major: '웹 디자이너',
    nickname: '웹디자인의 달인',
    badgeIamge: '/images/community/badge2.png',
    content: '핵심 포인트 감사합니다!',
    createdAt: new Date('2023-08-19T08:40:00'),
    like: false,
  },
  {
    id: 2,
    profileImage: '/images/community/Ellipse_6.png',
    major: '프론트엔드 개발자',
    nickname: '코딩의 마술사',
    badgeIamge: '/images/community/badge1.png',
    content: '좋은 아이디어에 감사합니다!',
    createdAt: new Date('2023-11-10T19:21:00'),
    like: false,
  },
];
export { DummyComment, SubDummyComment };
