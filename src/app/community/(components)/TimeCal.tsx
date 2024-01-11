import React from 'react';

interface TimeCalProps {
  createdAt: Date;
}

const TimeCal: React.FC<TimeCalProps> = ({ createdAt }) => {
  const calculateTimeDifference = (): string => {
    const currentTime = new Date();
    const differenceInSeconds = Math.floor(
      (currentTime.getTime() - createdAt.getTime()) / 1000,
    );

    if (differenceInSeconds < 60) {
      return `${differenceInSeconds}초 전`;
    }

    const differenceInMinutes = Math.floor(differenceInSeconds / 60);

    if (differenceInMinutes < 60) {
      return `${differenceInMinutes}분 전`;
    }

    const differenceInHours = Math.floor(differenceInMinutes / 60);

    if (differenceInHours === 1) {
      return '한 시간 전';
    }

    const differenceInDays = Math.floor(differenceInHours / 24);

    if (differenceInDays < 7) {
      return `${differenceInDays}일 전`;
    }

    const differenceInWeeks = Math.floor(differenceInDays / 7);

    if (differenceInWeeks < 4) {
      return `${differenceInWeeks}주 전`;
    }

    const differenceInMonths = Math.floor(differenceInDays / 30);

    if (differenceInMonths < 12) {
      return `${differenceInMonths}달 전`;
    }

    const differenceInYears = Math.floor(differenceInDays / 365);

    return `${differenceInYears}년 전`;
  };

  return <div>{calculateTimeDifference()}</div>;
};

export default TimeCal;
