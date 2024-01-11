import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '모임 페이지',
  description: '모임 페이지입니다.',
};

const GatheringLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default GatheringLayout;
