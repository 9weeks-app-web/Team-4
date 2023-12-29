import { User } from "@/types/user";

export const users: User[] = [
  {
    id: 0,
    profileImage: '',
    nickname: '호돌이',
    email: 'hodol@gmail.com',
    password: 'hodol222!',
    phone: '010-1234-5678',
    character: {
      major: {
        position: '서비스기획',
        ability: 0,
      },
      minor: {
        position: 'UXUI디자인',
        ability: 0,
      },
    },
    introduction: '안녕하세요',
    skils: ['피그마', 'XD'],
    interest: ['디자인', '기획'],
    keyword: {},
    activity: [
      {
        title: '스나이퍼팩 토리 웹/앱 개발자 인턴형 프로그램 참여',
        startDate: new Date('2023-11-10'),
        endDate: new Date('2023-12-28'),
      },
    ],
    contactTime: {
      start: '',
      end: '',
    },
    badge: [],
    notification: {
      gathering: {
        type: '프로젝트',
        filed: '디자인',
        posititon: '디자이너',
      },
      site: true,
      mail: false,
      eMail: 'hodol@gmail.com',
    },
  },
];


