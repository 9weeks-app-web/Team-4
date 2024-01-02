'use client';

import { useEffect, useState } from 'react';

interface ModalWrapperProps {
  width?: string;

  onCloseModal: () => void;
  unmountCleanUp?: () => void;
  children: React.ReactNode;
  isWrapperNoPadding?: boolean;
}

const ModalWrapper = ({
  width = 'w-[776px]',
  onCloseModal,
  unmountCleanUp,
  children,
  isWrapperNoPadding,
}: ModalWrapperProps) => {
  const [startOutside, setStartOutside] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setStartOutside(true);
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && startOutside) {
      onCloseModal();
    }
    setStartOutside(false);
  };
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
      unmountCleanUp && unmountCleanUp();
    };
  }, [unmountCleanUp]);
  return (
    <>
      <div className="fixed z-[9999] inset-0 bg-[rgba(0,0,0,0.3)]" />
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="fixed z-[99999] inset-0 flex overscroll-none overflow-y-auto py-[40px] px-[35px]"
      >
        <div
          className={`m-auto relative ${width} max-w-[1200px] min-h-fit shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] bg-neutral-0 rounded-2xl border border-solid border-[rgba(230,230,230,1)] ${
            !isWrapperNoPadding ? 'p-6' : 'p-0 overflow-hidden'
          }`}
        >
          <>{children}</>
        </div>
      </div>
    </>
  );
};

export default ModalWrapper;
