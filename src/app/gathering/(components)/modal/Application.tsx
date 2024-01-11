import Image from 'next/image';
import { Children } from 'react';
import ButtonBasic from '../button/ButtonBasic';

const DUMMY = ['백엔드', '프론트엔드'];

const Application = () => {
  return (
    <div className="flex flex-col gap-12 items-center text-neutral-60 text-lg font-medium">
      <div className="flex flex-col gap-8 w-full">
        {Children.toArray(
          DUMMY.map(position => (
            <div className="flex items-center gap-6">
              <input id={position} className="w-6 h-6" type="checkbox" />
              <label htmlFor={position}>{position}</label>
            </div>
          )),
        )}
      </div>
      <ButtonBasic content="신청하기" theme="neutral" style={['w-[400px]']} />
    </div>
  );
};

export default Application;
