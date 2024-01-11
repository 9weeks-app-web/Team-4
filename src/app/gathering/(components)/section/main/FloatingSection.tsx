'use client';

import { useState } from 'react';
import clsx from 'clsx';
import ButtonRound from '../../button/ButtonRound';

const FloatingSection = () => {
  const [toggleButton, setToggleButton] = useState(false);

  return (
    <div
      className={clsx(
        'fixed',
        'right-[50px]',
        'bottom-[50px]',
        'w-20',
        'h-20',
        'bg-no-repeat',
        'bg-center',
        'rounded-[50%]',
        'cursor-pointer',
        'z-10',
        toggleButton
          ? [
              'bg-x',
              'bg-neutral-0',
              'hover:bg-neutral-5',
              'active:bg-neutral-10',
              'shadow-[0_14px_47px_0_rgba(0,0,0,0.14)]',
            ]
          : [
              'bg-pencil',
              'bg-neutral-70',
              'hover:bg-neutral-80',
              'active:bg-neutral-90',
            ],
      )}
      onClick={() => setToggleButton(prev => !prev)}
    >
      {toggleButton && (
        <div className="flex flex-col gap-4 fixed right-[50px] bottom-[150px] animate-stretch">
          <ButtonRound
            content="회고 작성하기"
            theme="neutral"
            link="/gathering/retrospect/new/"
            style={['w-full', 'h-20']}
          />
          <ButtonRound
            content="스터디 만들기"
            theme="neutral"
            link="/gathering/study/new/"
            style={['w-full', 'h-20']}
          />
          <ButtonRound
            content="프로젝트 만들기"
            theme="neutral"
            link="/gathering/project/new/"
            style={['w-full', 'h-20']}
          />
        </div>
      )}
    </div>
  );
};

export default FloatingSection;
