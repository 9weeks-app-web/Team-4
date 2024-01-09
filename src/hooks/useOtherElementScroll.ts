import { RefObject, useEffect } from 'react';

const useOtherElementScroll = (content: RefObject<HTMLDivElement>) => {
  const moveToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (content && content.current && element) {
      content.current.scrollTo({
        top: element.offsetTop - 300,
        behavior: 'smooth',
      });
    }
  };
  return { moveToSection };
};

export default useOtherElementScroll;
