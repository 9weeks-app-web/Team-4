import Image from 'next/image';
import { Children } from 'react';
import ButtonBasic from '../button/ButtonBasic';

const Addition = () => {
  return (
    <div className="flex flex-col gap-12 items-center text-neutral-60 text-lg font-medium">
      <div className="flex flex-col gap-8 w-full">
        <label className="flex items-center gap-3">
          <input className="w-6 h-6" type="checkbox" />
          전체선택
        </label>
        {Children.toArray(
          Array.from({ length: 4 }).map((_, i) => (
            <div className="flex items-center gap-4">
              <input id={String(i)} className="w-6 h-6" type="checkbox" />
              <label htmlFor={String(i)} className="flex items-center gap-3">
                <Image
                  src="/images/gathering/profile.svg"
                  width={48}
                  height={48}
                  alt="profile"
                />
                내가팔로잉하는사람{i + 1}
              </label>
            </div>
          )),
        )}
      </div>
      <ButtonBasic content="추가하기" theme="neutral" style={['w-[400px]']} />
    </div>
  );
};

export default Addition;
