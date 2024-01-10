'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { createContext, useContext, useState } from 'react';
import Modal from '@/components/modal/Modal';
import Addition from '../../modal/Addition';

interface ImageSectionProps {
  children: React.ReactNode;
  title: string;
  required?: boolean;
}

interface ImageSectionContextValue {
  imageSrc: string | undefined;
  handleChangeImage: HandleChangeImage;
}

type HandleChangeImage = (
  e: React.ChangeEvent<HTMLInputElement>,
) => Promise<unknown> | undefined;

const ImageSectionContext = createContext<ImageSectionContextValue | null>(
  null,
);

const ImageSection = ({
  children,
  title,
  required = false,
}: ImageSectionProps) => {
  const [imageSrc, setImageSrc] = useState<string>();

  const handleChangeImage: HandleChangeImage = e => {
    if (e.target.files === null) return;

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    return new Promise(
      resolve =>
        (reader.onloadend = () => {
          setImageSrc(String(reader.result));
        }),
    );
  };

  return (
    <ImageSectionContext.Provider value={{ imageSrc, handleChangeImage }}>
      <section className="relative text-[26px] font-bold mb-[27px]">
        <h3 className="relative w-fit text-[26px] font-bold mb-[27px]">
          {title}
          {required && (
            <span className="absolute -right-2 top-0 text-system-warning text-sm font-medium">
              *
            </span>
          )}
        </h3>
        {children}
      </section>
    </ImageSectionContext.Provider>
  );
};

export default ImageSection;

const SquareImage = ({
  subTitle,
  ratio,
}: {
  subTitle?: string;
  ratio?: string;
}) => {
  const context = useContext(ImageSectionContext);

  if (!context) {
    throw Error('No Context!');
  }

  return (
    <>
      {subTitle && (
        <div className="absolute top-10 text-neutral-30 text-[20px] font-medium">
          {subTitle}
        </div>
      )}
      <div className="flex">
        <Image
          className={clsx(
            'bg-background-blue',
            subTitle && [`aspect-[${ratio}]`, 'mt-5'],
          )}
          src={context.imageSrc || '/images/gathering/team_profile.svg'}
          alt="team profile"
          width={ratio ? 483 : 358}
          height={358}
        />
        <label
          className="self-end ml-[30px] text-neutral-60 border-neutral-30 rounded-md"
          htmlFor="sqaure-image"
        >
          <div className="px-[30px] py-[15px] text-[18px] rounded-[12px] font-medium text-neutral-60 bg-neutral-10 hover:text-neutral-0 hover:bg-primary-80 active:bg-primary-90 cursor-pointer">
            이미지 업로드
          </div>
        </label>
        <input
          className="w-0 h-0"
          id="sqaure-image"
          type="file"
          accept="image/*"
          onChange={context.handleChangeImage}
        />
      </div>
    </>
  );
};

const CircleImage = () => {
  const context = useContext(ImageSectionContext);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(prev => !prev);
  };

  if (!context) {
    throw Error('No Context!');
  }

  return (
    <div className="flex">
      <Image
        className="rounded-[50%] bg-background-blue aspect-square"
        src={context.imageSrc || '/images/gathering/profile.svg'}
        alt="team profile"
        width={72}
        height={72}
      />
      <div className="flex justify-center items-center w-[72px] h-[72px] ml-8 rounded-[50%] bg-background-blue cursor-pointer">
        <Image
          src="/images/gathering/blue_plus.svg"
          alt="plus"
          width={48}
          height={48}
          onClick={openModal}
        />
      </div>
      <Modal isOpen={open} setOpen={setOpen} title="모임 참여자">
        <Addition />
      </Modal>
    </div>
  );
};

ImageSection.SquareImage = SquareImage;
ImageSection.CircleImage = CircleImage;
