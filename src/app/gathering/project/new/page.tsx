'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import clsx from 'clsx';
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

export const PercentContext = createContext<{
  items: number;
  count: number;
  setter: Dispatch<SetStateAction<number>>;
} | null>(null);

const CreateProjectPage = () => {
  const router = useRouter();
  const [count, setCount] = useState(1);

  const changePage = (type: string) => {
    const path = type === '프로젝트' ? 'project' : 'study';

    router.push(`/gathering/${path}/new`);
  };

  return (
    <>
      <PercentContext.Provider value={{ items: 13, count, setter: setCount }}>
        <header className="flex flex-col justify-center w-full h-[130px] px-[calc((100%-1200px)/2)] font-semibold bg-background-blue">
          <p className="text-[23px] text-neutral-40">
            나만의 프로젝트를 스팩폴리오와 함께해요
          </p>
          <h2 className="mt-[3px] text-[28px]">프로젝트 생성</h2>
        </header>
        <main className="flex flex-col w-full px-[calc((100%-1200px)/2)] min-h-screen">
          <div className="w-full h-3 my-7 bg-primary-10 rounded-md">
            <div
              className={clsx(
                'h-3',
                'bg-primary-100',
                'rounded-md',
                'transition-all',
                'duration-1000',
                count === 1 && 'w-[10%]',
                count === 2 && 'w-[20%]',
                count === 3 && 'w-[30%]',
                count === 4 && 'w-[40%]',
                count === 5 && 'w-[50%]',
                count === 6 && 'w-[60%]',
                count === 7 && 'w-[70%]',
                count === 8 && 'w-[80%]',
                count === 9 && 'w-[90%]',
                count >= 10 && 'w-[100%]',
              )}
            />
          </div>
          <div>
            <div className="flex gap-2 w-[120px]">
              <Image
                src="/images/gathering/star.svg"
                width={22}
                height={22}
                alt="start"
              />
              <ComboBox>
                <ComboBox.SelectSimple
                  selectName="post-type"
                  options={['프로젝트', '프로젝트', '스터디']}
                  setter={changePage}
                />
              </ComboBox>
            </div>
            <GatheringForm />
          </div>
        </main>
      </PercentContext.Provider>
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
      <SingleSection title="프로젝트 요약">
        <MyMarkdownEditor
          value={summary}
          onChange={setSummary}
          placeholder="어떤 프로젝트인지 이해하기 쉽도록 명확하게 작성해주세요.(60자 이내)"
        />
      </SingleSection>
      <SingleSection title="프로젝트 설명" required>
        <MyMarkdownEditor
          value={description}
          onChange={setDescription}
          placeholder="프로젝트 동기, 서비스 기획 등 자세한 설명으로 지원율을 높여보세요!"
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
      <MultipleSection title="모임 일정" required style={['max-w-[790px]']}>
        <ComboBox>
          <ComboBox.Select
            selectName="every"
            options={['주기', '매주', '매일']}
          />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select
            selectName="day"
            options={['요일', '월', '화', '수', '목', '금', '토', '일']}
          />
        </ComboBox>
      </MultipleSection>
      <MultipleSection title="모임 지역" required style={['max-w-[790px]']}>
        <ComboBox>
          <ComboBox.Select
            selectName="way"
            options={['모임 방법', '온/오프라인', '오프라인', '온라인']}
          />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select
            selectName="location"
            options={[
              '지역',
              '서울특별시',
              '경기도',
              '인천광역시',
              '대전광역시',
              '세종특별자치시',
              '충청북도',
              '충청남도',
              '부산광역시',
              '대구광역시',
              '경상북도',
              '경상남도',
              '울산광역시',
              '광주광역시',
              '전라남도',
              '전라북도',
              '제주도',
            ]}
          />
        </ComboBox>
      </MultipleSection>
      <ImageSection title="팀 프로필">
        <ImageSection.SquareImage />
      </ImageSection>
      <SingleSection title="팀 이름">
        <Input
          placeholder="2-8글자 이내로 입력해주세요"
          style={['min-h-[54px]']}
        />
      </SingleSection>
      <ImageSection title="프로젝트 팀원">
        <ImageSection.CircleImage />
      </ImageSection>
      <MultipleSection title="모집인원" required>
        <ComboBox>
          <ComboBox.Select
            selectName="job"
            options={['분야', '기획', '디자인', '개발']}
          />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select
            selectName="position"
            options={[
              '세부분야',
              '브랜딩',
              'UXUI 디자인',
              '3D 디자인',
              '그래픽 디자인',
              '편집 디자인',
              '웹 디자인',
              '영상 디자인',
              '제품 디자인',
              '캐릭터 디자인',
            ]}
          />
        </ComboBox>
        <Counter />
        <ButtonBasic
          content="추가"
          style={['min-w-[103px]']}
          theme="neutral"
          link=""
        />
      </MultipleSection>
      <ChartSection />
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
      <MultipleSection title="모집 기간" required>
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
      <section>
        <h3 className="relative w-fit text-[26px] font-bold mb-[27px]">
          연락 방법
          <span className="absolute -right-2 top-0 text-system-warning text-sm font-medium">
            *
          </span>
        </h3>
        <div className="flex gap-[30px] w-full">
          <div className="min-w-[380px]">
            <ComboBox>
              <ComboBox.Select
                selectName="imsi"
                options={['오픈채팅', '이메일', '전화번호', '카카오톡 아이디']}
              />
            </ComboBox>
          </div>
          <div className="w-full">
            <Input placeholder="링크주소" />
          </div>
        </div>
      </section>
      <SingleSection title="태그 설정">
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
