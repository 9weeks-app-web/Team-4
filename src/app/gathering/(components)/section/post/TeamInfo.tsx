'use client';

import Image from 'next/image';
import Radar from '@/components/chart/Radar';
import ButtonSmall from '../../button/ButtonSmall';

interface TeamInfoProps {
  teamName: string;
  members?: {
    profileImg: string;
    name: string;
    spectrumImg: string;
    position: string;
    isLeader: boolean;
  }[];
  preference?: {};
  postType: 'recruit' | 'retrospect';
}

const MEMBERS = [
  {
    profileImg: '/images/gathering/profile.svg',
    name: '기세준',
    spectrumImg: '/images/gathering/spectrum2.svg',
    position: '프로덕트 매니저',
    isLeader: true,
  },
  {
    profileImg: '/images/gathering/profile.svg',
    name: '김수진',
    spectrumImg: '/images/gathering/spectrum3.svg',
    position: 'UXUI 디자인',
    isLeader: false,
  },
  {
    profileImg: '/images/gathering/profile.svg',
    name: '박창협',
    spectrumImg: '/images/gathering/spectrum.svg',
    position: '프론트엔드',
    isLeader: false,
  },
  {
    profileImg: '/images/gathering/profile.svg',
    name: '서유빈',
    spectrumImg: '/images/gathering/spectrum4.svg',
    position: '백엔드',
    isLeader: false,
  },
];

const TeamInfo = ({
  teamName,
  members = MEMBERS,
  preference,
  postType,
}: TeamInfoProps) => {
  return (
    <div className="flex flex-col gap-4 text-neutral-40 ">
      <div className="px-4 py-2 border border-neutral-10 rounded-md">
        {teamName}
      </div>
      <div className="flex gap-[30px] px-4 py-2 border border-neutral-10 rounded-md">
        <div className="flex flex-col gap-2">
          <span>팀 리더</span>
          <span>팀 멤버</span>
        </div>
        <div className="flex flex-col gap-2">
          {members?.map(
            ({ profileImg, name, spectrumImg, position, isLeader }, i) => (
              <div
                key={name}
                className="flex items-center gap-3 text-neutral-40"
              >
                <Image
                  className="rounded-[50%]"
                  src={profileImg}
                  alt="profile"
                  width={24}
                  height={24}
                />
                <span>{name}</span>
                <Image
                  className="rounded-[50%]"
                  src={spectrumImg}
                  alt="spectrum"
                  width={20}
                  height={24}
                />
                <span className="min-w-28 ml-4">{position}</span>
                {isLeader || (
                  <>
                    <span className="w-8 text-neutral-50 font-medium mr-4">
                      {i === 1 && '1 / 1'}
                      {i === 2 && '1 / 2'}
                      {i === 3 && '1 / 3'}
                    </span>
                    {i === 1 ? (
                      <ButtonSmall
                        content="완료"
                        theme="neutral"
                        style={['cursor-not-allowed']}
                      />
                    ) : (
                      <ButtonSmall content="지원" />
                    )}
                  </>
                )}
              </div>
            ),
          )}
        </div>
      </div>
      {postType === 'recruit' && (
        <div>
          <div className="mt-8 mb-7 text-lg">*이런 사람을 선호해요!</div>
          <div className="w-[474px] p-[50px] aspect-square border border-neutral-10 rounded-md">
            <Radar />
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamInfo;
