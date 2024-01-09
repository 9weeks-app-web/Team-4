'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import MyMarkdownEditor from '@/app/community/(components)/MarkDownEditor';
import SingleSection from '../../(components)/section/create/SingleSection';
import MultipleSection from '../../(components)/section/create/MultipleSection';
import ImageSection from '../../(components)/section/create/ImageSection';
import Radio from '../../(components)/input/Radio';
import ComboBox from '../../(components)/input/ComboBox';
import Counter from '../../(components)/input/Counter';
import Input from '../../(components)/input/Input';
import ButtonBasic from '../../(components)/button/ButtonBasic';
import ChartSection from '../../(components)/section/create/ChartSection';
import 'react-datepicker/dist/react-datepicker.css';

const CreateProjectPage = () => {
  return (
    <>
      <header className="flex flex-col justify-center w-full h-[130px] px-[calc((100%-1200px)/2)] font-semibold bg-background-blue">
        <p className="text-[23px] text-neutral-40">
          나만의 프로젝트를 스팩폴리오에 소개해요
        </p>
        <h2 className="mt-[3px] text-[28px]">회고 작성</h2>
      </header>
      <main className="flex flex-col w-full px-[calc((100%-1200px)/2)] min-h-screen">
        <div className="w-full h-3 my-7 bg-primary-10 rounded-md">
          <div className="w-[30%] h-3 bg-primary-100 rounded-md"></div>
        </div>
        <div>
          <div className="flex gap-2 w-[120px] font-semibold text-neutral-50">
            <Image
              src="/images/gathering/star.svg"
              width={22}
              height={22}
              alt="start"
            />
            <span>프로젝트</span>
          </div>
          <div className="flex gap-[30px] max-w-[995px] mt-7">
            <Input placeholder="불러올 프로젝트 이름" style={['h-[54px]']} />
            <ButtonBasic
              content="불러오기"
              theme="neutral"
              style={['min-w-[175px]', 'py-2', 'h-[54px]', 'leading-[0px]']}
            />
          </div>
          <GatheringForm />
        </div>
      </main>
    </>
  );
};

export default CreateProjectPage;

const GatheringForm = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');

  return (
    <form
      className="flex flex-col gap-12 mt-12"
      onSubmit={e => e.preventDefault()}
    >
      <SingleSection title="유형" required style={['max-w-[800px]']}>
        <Radio
          name="project-type"
          radios={[
            { id: 'side', value: '사이드 프로젝트' },
            { id: 'nework', value: '네트워킹' },
            { id: 'hackerton', value: '해커톤' },
            { id: 'competition', value: '공모전' },
          ]}
        />
      </SingleSection>
      <SingleSection title="프로젝트 이름" required>
        <Input
          placeholder="직관적인 프로젝트명을 사용하면 많은 사람들이 볼 수 있어요. (20자 이내)"
          style={['min-h-[54px]']}
        />
      </SingleSection>
      <SingleSection title="프로젝트 분야" required style={['max-w-[900px]']}>
        <Radio
          name="project-field"
          radios={[
            { id: '공유서비스', value: '공유서비스' },
            { id: '금융/핀테크', value: '금융/핀테크' },
            { id: '이커머스', value: '이커머스' },
            { id: '게임', value: '게임' },
            { id: '뉴스/정보', value: '뉴스/정보' },
            { id: '여행/항공', value: '여행/항공' },
            { id: '육아/출산', value: '육아/출산' },
            { id: '부동산/인테리어', value: '부동산/인테리어' },
            { id: '교육', value: '교육' },
            { id: '의료/병원', value: '의료/병원' },
            { id: '모빌리티(교통)', value: '모빌리티(교통)' },
            { id: '헬스/스포츠', value: '헬스/스포츠' },
            { id: '뷰티/패션', value: '뷰티/패션' },
            { id: '데이트/결혼', value: '데이트/결혼' },
            { id: '소셜네트워크', value: '소셜네트워크' },
            { id: '기타', value: '기타' },
          ]}
        />
      </SingleSection>
      <MultipleSection title="프로젝트 기간" required>
        <div>
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
            toggleCalendarOnIconClick
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
            toggleCalendarOnIconClick
            placeholderText="종료일"
          />
        </div>
      </MultipleSection>
      <SingleSection title="팀 이름">
        <Input
          placeholder="2-8글자 이내로 입력해주세요"
          style={['min-h-[54px]']}
        />
      </SingleSection>
      <ImageSection title="프로젝트 팀원">
        <ImageSection.CircleImage />
      </ImageSection>
      <SingleSection title="프로젝트 소개" required>
        <MyMarkdownEditor
          value={summary}
          onChange={setSummary}
          placeholder="어떤 프로젝트인지 이해하기 쉽도록 명확하게 작성해주세요.(60자 이내)"
        />
      </SingleSection>
      <SingleSection title="프로젝트 회고" required>
        <MyMarkdownEditor
          value={description}
          onChange={setDescription}
          placeholder="프로젝트 진행과정 중 좋았던 점/ 아쉬운 점, 최종 결과물, 앞으로의 계획 등을 작성해보세요!"
        />
      </SingleSection>
      <ImageSection title="대표 이미지" required>
        <ImageSection.SquareImage
          subTitle="*대표이미지는 썸네일로 활용돼요.(4:3 비율)"
          ratio="4/3"
        />
      </ImageSection>
      <SingleSection title="프로젝트 링크">
        <Input
          placeholder="앱스토어/구글스토어의 링크, 프로토타입 링크 등을 첨부해주세요."
          style={['min-h-[54px]']}
        />
      </SingleSection>
      <MultipleSection title="기술 스택" required style={['max-w-[790px]']}>
        <ComboBox>
          <ComboBox.Select
            selectName="imsi"
            options={['분야', '개발', '디자인']}
          />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select
            selectName="imsi"
            options={[
              '프로그램',
              'Figma',
              'Adobe XD',
              'Photoshop',
              'Illustrator',
              'Indesign',
              'AfterEffects',
              'Premiere Pro',
              'Blender',
              'Cinema 4D',
              'Maya',
            ]}
          />
        </ComboBox>
      </MultipleSection>
      <SingleSection title="키워드 설정">
        <Input placeholder="#키워드 + Enter" style={['min-h-[54px]']}>
          <Input.Tag />
        </Input>
      </SingleSection>
      <div className="flex  justify-center gap-[29px] w-full my-20">
        <ButtonBasic
          content="임시저장"
          theme="neutral"
          style={['min-w-[278px]']}
        />
        <ButtonBasic content="등록하기" style={['w-full']} />
      </div>
    </form>
  );
};
