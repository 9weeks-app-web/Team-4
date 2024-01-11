const useScroll = () => {
  const moveToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return { moveToSection };
};

export default useScroll;
