import { CommentType } from '@/types/comment';
const DummyComment: CommentType[] = [
  {
    id: 1,
    profileImage: 'https://dummyimage.com/600x400/f078b0/ffffff&text=+',
    major: 'UI/UX 디자이너',
    nickname: '하으니',
    badgeIamge: '/images/community/badge.png',
    content: '정말 좋은 게시물이에요!',
    createdAt: new Date(),
    like: false,
  },
  {
    id: 2,
    profileImage: 'https://dummyimage.com/600x400/78f0b0/ffffff&text=+',
    major: '개발자',
    nickname: '코딩마스터',
    badgeIamge: '/images/community/badge.png',
    content: '좋아요!',
    createdAt: new Date(),
    like: false,
  },
  {
    id: 3,
    profileImage: 'https://dummyimage.com/600x400/78b0f0/ffffff&text=+',
    major: '디자이너',
    nickname: '디자인마법사',
    badgeIamge: '/images/community/badge.png',
    content: '멋져요!',
    createdAt: new Date(),
    like: false,
  },
  {
    id: 4,
    profileImage: 'https://dummyimage.com/600x400/f0e878/ffffff&text=+',
    major: '마케터',
    nickname: '마케팅의 달인',
    badgeIamge: '/images/community/badge.png',
    content: '핵심 포인트 감사합니다!',
    createdAt: new Date(),
    like: false,
  },
];

const SubDummyComment: CommentType[] = [
  {
    id: 1,
    profileImage: 'https://dummyimage.com/600x400/f0e878/ffffff&text=+',
    major: '웹 디자이너',
    nickname: '웹디자인의 달인',
    badgeIamge: '/images/community/badge.png',
    content: '핵심 포인트 감사합니다!',
    createdAt: new Date(),
    like: false,
  },
  {
    id: 2,
    profileImage: 'https://dummyimage.com/600x400/f0e878/ffffff&text=+',
    major: '프론트엔드 개발자',
    nickname: '코딩의 마술사',
    badgeIamge: '/images/community/badge.png',
    content: '좋은 아이디어에 감사합니다!',
    createdAt: new Date(),
    like: false,
  },
];
export { DummyComment, SubDummyComment };
