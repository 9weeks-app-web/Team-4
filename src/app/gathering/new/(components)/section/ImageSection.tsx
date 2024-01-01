'use client';

import { createContext, useContext, useState } from 'react';
import Image from 'next/image';
import Button1 from '@/app/gathering/(components)/button/Button1';

interface ImageSectionProps {
  children: React.ReactNode;
  title: string;
}

interface ImageSectionContextValue {
  imageSrc: string;
  handleChangeImage: HandleChangeImage;
}

type HandleChangeImage = (
  e: React.ChangeEvent<HTMLInputElement>,
) => Promise<unknown> | undefined;

const ImageSectionContext = createContext<ImageSectionContextValue | null>(
  null,
);

const ImageSection = ({ children, title }: ImageSectionProps) => {
  const [imageSrc, setImageSrc] = useState('');

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
      <section>
        <h3 className="text-2xl mb-[30px]">{title}</h3>
        {children}
      </section>
    </ImageSectionContext.Provider>
  );
};

export default ImageSection;

const SquareImage = () => {
  const context = useContext(ImageSectionContext);

  if (!context) {
    throw Error('No Context!');
  }

  return (
    <div className="flex">
      <Image
        className="bg-background-blue"
        src={context.imageSrc}
        alt="team profile"
        width={350}
        height={350}
      />
      <label
        className="self-end ml-4  text-neutral-60 border-neutral-30 rounded-md"
        htmlFor="sqaure-image"
      >
        <Button1 content="이미지 업로드" />
      </label>
      <input
        className="w-0 h-0"
        id="sqaure-image"
        type="file"
        accept="image/*"
        onChange={context.handleChangeImage}
      />
    </div>
  );
};

const CircleImage = () => {
  const context = useContext(ImageSectionContext);

  if (!context) {
    throw Error('No Context!');
  }

  return (
    <div className="flex">
      <Image
        className="rounded-[50%] bg-background-blue"
        src={context.imageSrc}
        alt="team profile"
        width={72}
        height={72}
      />
      <label
        className="self-end w-[72px] h-[72px] ml-8 bg-neutral-10 text-neutral-60 border-neutral-30 rounded-[50%]"
        htmlFor="circle-upload"
      >
        <div className="text-[70px] text-center leading-[62px]">+</div>
      </label>
      <input
        className="w-0 h-0"
        id="circle-upload"
        type="file"
        accept="image/*"
        onChange={context.handleChangeImage}
      />
    </div>
  );
};

ImageSection.SquareImage = SquareImage;
ImageSection.CircleImage = CircleImage;
