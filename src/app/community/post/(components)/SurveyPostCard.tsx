'use client';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const SurveyPostCard = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div className="text-neutral-60 font-medium ">
      <input
        type="text"
        id="title"
        placeholder="설문조사 제목을 입력해주세요(20자 이내)"
        className="w-full border h-[52px] px-[14px] py-3 rounded-xl mb-5"
      />
      <textarea
        id="description"
        placeholder="본문 내용을 작성해주세요."
        className="w-full h-[293px] border p-[14px] rounded-xl mb-[30px]"
      />
      <div className="flex items-center mb-[30px]">
        <p className="mr-5 text-xl">설문 기간</p>
        <div className="mr-[30px]">
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            dateFormat="yyyy.MM.dd"
            showIcon
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.46967 8.46967C5.76256 8.17678 6.23744 8.17678 6.53033 8.46967L12 13.9393L17.4697 8.46967C17.7626 8.17678 18.2374 8.17678 18.5303 8.46967C18.8232 8.76256 18.8232 9.23744 18.5303 9.53033L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967Z"
                  fill="#999999"
                />
              </svg>
            }
            placeholderText="시작일"
          />
        </div>
        <div>
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            dateFormat="yyyy.MM.dd"
            showIcon
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.46967 8.46967C5.76256 8.17678 6.23744 8.17678 6.53033 8.46967L12 13.9393L17.4697 8.46967C17.7626 8.17678 18.2374 8.17678 18.5303 8.46967C18.8232 8.76256 18.8232 9.23744 18.5303 9.53033L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967Z"
                  fill="#999999"
                />
              </svg>
            }
            placeholderText="종료일"
          />
        </div>
      </div>
      <div className="flex items-center mb-[59px]">
        <p className="mr-5 text-xl">소요 시간</p>
        <select className="w-[120px] h-[50px] mr-[30px] border border-neutral-10 text-neutral-40  rounded-xl p-3">
          <option value="1">1분</option>
          <option value="3">3분</option>
          <option value="5">5분</option>
          <option value="7">7분</option>
        </select>
        <p className="mr-5 text-xl">참여 대상</p>
        <select className="w-[120px] h-[50px] border border-neutral-10 text-neutral-40  rounded-xl p-3">
          <option value="누구나">누구나</option>
          <option value="청소년">청소년</option>
          <option value="대학생">대학생</option>
          <option value="직장인">직장인</option>
        </select>
      </div>
      <div className=" mb-[54px]">
        <p className="5 text-xl mb-[18px]">설문 링크</p>
        <input
          type="text"
          id="title"
          placeholder="URL 형식의 설문 링크를 첨부해주세요."
          className="w-full h-[52px] px-[14px] py-3 border rounded-xl border-neutral-10 "
        />
      </div>
    </div>
  );
};
export default SurveyPostCard;
