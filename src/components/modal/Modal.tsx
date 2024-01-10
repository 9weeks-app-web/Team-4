import Image from 'next/image';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
}

interface ModalUIProps {
  children: ReactNode;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
}

const Modal = ({ children, isOpen, setOpen, title }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <ModalUI setOpen={setOpen} title={title}>
      {children}
    </ModalUI>,
    document.getElementById('modal') as HTMLDivElement,
  );
};

export default Modal;

const ModalUI = ({ children, setOpen, title }: ModalUIProps) => {
  return (
    <div
      className="absolute top-0 flex flex-col items-center w-full h-full backdrop-blur-sm z-50"
      onClick={() => setOpen(prev => !prev)}
    >
      <div
        className="sticky top-[50vh] -translate-y-[50%] min-w-[945px] p-[34px] bg-neutral-0 border border-neutral-10 rounded-xl"
        onClick={e => e.stopPropagation()}
      >
        <header className="flex justify-between text-[22px] font-semibold">
          {title}
          <Image
            className="cursor-pointer"
            src="/images/gathering/x.svg"
            width={32}
            height={32}
            alt="x"
            onClick={() => setOpen(prev => !prev)}
          />
        </header>
        <div className="h-[1px] bg-stroke-10 mt-[13px] mb-11"></div>
        {children}
      </div>
    </div>
  );
};
