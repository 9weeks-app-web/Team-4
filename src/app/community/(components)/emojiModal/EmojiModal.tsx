import React, { useEffect, useRef } from 'react';
import Emoji from '../../(components)/imageComponents/Emoji';

interface EmojiModalProps {
  showEmojiModal: boolean;
  onClick: () => void;
}

const EmojiModal: React.FC<EmojiModalProps> = ({ showEmojiModal, onClick }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClick();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [onClick]);

  return (
    <>
      {showEmojiModal && (
        <div
          ref={modalRef}
          className="flex justify-between border border-neutral-5 bg-neutral-0 w-[232px] h-[56px] px-4 py-3 rounded-xl absolute top-[-130%] shadow-md"
        >
          <Emoji icon={'heart.png'} onClick={onClick} />
          <Emoji icon={'cry.png'} onClick={onClick} />
          <Emoji icon={'thumb.png'} onClick={onClick} />
          <Emoji icon={'fire.png'} onClick={onClick} />
          <Emoji icon={'hand.png'} onClick={onClick} />
        </div>
      )}
    </>
  );
};

export default EmojiModal;
