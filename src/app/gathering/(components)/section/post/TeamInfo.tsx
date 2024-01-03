import Image from 'next/image';

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
    profileImg: 'https://dummyimage.com/100x100/74afe3/fff',
    name: '기세준',
    spectrumImg: 'https://dummyimage.com/100x100/74afe3/fff',
    position: '프로덕트 매니저',
    isLeader: true,
  },
  {
    profileImg: 'https://dummyimage.com/100x100/74afe3/fff',
    name: '김수진',
    spectrumImg: 'https://dummyimage.com/100x100/74afe3/fff',
    position: 'UXUI 디자인',
    isLeader: false,
  },
  {
    profileImg: 'https://dummyimage.com/100x100/74afe3/fff',
    name: '박창협',
    spectrumImg: 'https://dummyimage.com/100x100/74afe3/fff',
    position: '프론트엔드',
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
    <div className="flex flex-col gap-4 text-neutral-30 ">
      <div className="px-4 py-2 border border-neutral-30 rounded-md">
        {teamName}
      </div>
      <div className="flex gap-4 px-4 py-2 border border-neutral-30 rounded-md">
        <div className="flex flex-col gap-2">
          <div>팀 리더</div>
          <div>팀 멤버</div>
        </div>
        <div className="flex flex-col gap-2">
          {members?.map(({ profileImg, name, spectrumImg, position }) => (
            <div key={name} className="flex gap-4">
              <Image
                className="rounded-[50%]"
                src={profileImg}
                alt="member profile"
                width={24}
                height={24}
              />
              <span>{name}</span>
              <Image
                className="rounded-[50%]"
                src={spectrumImg}
                alt="member profile"
                width={24}
                height={24}
              />
              <span>{position}</span>
            </div>
          ))}
        </div>
      </div>
      {postType === 'recruit' && (
        <div>
          <p className="pb-2 text-lg">*이런 사람을 선호해요!</p>
          <div className="w-[40%] aspect-square border border-neutral-30 rounded-md">
            6각 그래프
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamInfo;
