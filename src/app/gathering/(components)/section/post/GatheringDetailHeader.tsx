'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ButtonBasic from '../../button/ButtonBasic';
import Modal from '@/components/modal/Modal';
import Application from '../../modal/Application';

interface GatheringDetailHeaderProps {
  title: string;
  type: string;
}

const GatheringDetailHeader = ({ title, type }: GatheringDetailHeaderProps) => {
  const router = useRouter();
  const [toggleBookmark, setToggleBookmark] = useState(false);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(prev => !prev);
  };

  return (
    <>
      <button
        className="absolute left-[calc((100%-1200px)/2-18px)] top-[100px] min-w-[40px] min-h-[40px] bg-[url(/images/gathering/left_arrow2.svg)] bg-no-repeat bg-center"
        onClick={() => router.back()}
      />
      <div className="flex justify-between mt-[130px]">
        <div className="flex flex-col justify-between">
          <h2 className="text-[28px] font-bold">{title}</h2>
          <p className="text-[23px] font-semibold text-neutral-40">{type}</p>
        </div>
        <div className="flex items-center gap-[25px]">
          <Image
            className="cursor-pointer"
            src={`/images/gathering/${
              toggleBookmark ? 'bookmark_fill' : 'bookmark'
            }.svg`}
            width={40}
            height={40}
            alt="bookmark"
            onClick={() => setToggleBookmark(prev => !prev)}
          />
          <ButtonBasic
            content="모집 신청하기"
            theme="neutral"
            style={['h-[50px]', 'leading-[0px]']}
            onClick={openModal}
          />
          <Modal isOpen={open} setOpen={setOpen} title="모집 신청">
            <Application />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default GatheringDetailHeader;
