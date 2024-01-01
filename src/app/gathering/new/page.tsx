'use client';

import SingleSection from './(components)/section/SingleSection';
import MultipleSection from './(components)/section/MultipleSection';
import Radio from './(components)/input/Radio';
import ComboBox from './(components)/input/ComboBox';
import ImageSection from './(components)/section/ImageSection';
import Counter from './(components)/input/Counter';
import Button1 from '../(components)/button/Button1';
import Input from './(components)/input/Input';
import Textarea from './(components)/input/Textarea';

const CreateGatheringPage = () => {
  return (
    <>
      <header className="flex flex-col justify-center w-full h-[130px] px-[20%] bg-background-blue">
        <p className=" text-neutral-50">
          나만의 프로젝트를 스팩폴리오와 함께해요
        </p>
        <h2 className="text-2xl">프로젝트 생성</h2>
      </header>
      <main className="flex flex-col w-full px-[20%] min-h-screen">
        <div className="w-full h-3 my-7 bg-primary-10 rounded-md">
          <div className="w-[30%] h-3 bg-primary-100 rounded-md"></div>
        </div>
        <div>
          ⭐️{' '}
          <select
            className="border border-neutral-30 rounded-sm"
            name="post"
            id="post-select"
          >
            <option value="project">프로젝트</option>
            <option value="study">스터디</option>
          </select>
          <GatheringForm />
        </div>
      </main>
    </>
  );
};

export default CreateGatheringPage;

const GatheringForm = () => {
  return (
    <form className="flex flex-col gap-[80px] mt-10">
      <SingleSection title="유형*">
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

      <SingleSection title="프로젝트 이름">
        <Input placeholder="직관적인 프로젝트명을 사용하면 많은 사람들이 볼 수 있어요. (20자 이내)" />
      </SingleSection>

      <SingleSection title="프로젝트 분야*">
        <Radio
          name="project-field"
          radios={[
            { id: 'side', value: '사이드 프로젝트' },
            { id: 'nework', value: '네트워킹' },
            { id: 'hackerton', value: '해커톤' },
            { id: 'competition', value: '공모전' },
          ]}
        />
      </SingleSection>

      <SingleSection title="프로젝트 요약">
        <Textarea placeholder="어떤 프로젝트인지 이해하기 쉽도록 명확하게 작성해주세요. (60자 이내)" />
      </SingleSection>

      <SingleSection title="프로젝트 설명*">
        <Textarea placeholder="프로젝트 동기, 서비스 기획 등 자세한 설명으로 지원율을 높여보세요!" />
      </SingleSection>

      <MultipleSection title="프로젝트 기간*">
        <ComboBox>
          <ComboBox.Date placeholder="시작일" />
        </ComboBox>
        <ComboBox>
          <ComboBox.Date placeholder="마감일" />
        </ComboBox>
      </MultipleSection>

      <MultipleSection title="모임일정*">
        <ComboBox>
          <ComboBox.Select selectName="every" />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select selectName="day" />
        </ComboBox>
      </MultipleSection>

      <MultipleSection title="모임지역*">
        <ComboBox>
          <ComboBox.Select selectName="way" />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select selectName="location" />
        </ComboBox>
      </MultipleSection>

      <ImageSection title="팀 프로필">
        <ImageSection.SquareImage />
      </ImageSection>

      <SingleSection title="팀 이름">
        <Input placeholder="2-8글자 이내로 입력해주세요" />
      </SingleSection>

      <ImageSection title="프로젝트 팀원">
        <ImageSection.CircleImage />
      </ImageSection>

      <MultipleSection title="모집인원*">
        <ComboBox>
          <ComboBox.Select selectName="job" />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select selectName="position" />
        </ComboBox>
        <Counter />
        <Button1 content="추가" />
      </MultipleSection>

      <div className="h-32 border">이런사람을 선호해요!</div>

      <MultipleSection title="기술스택*">
        <ComboBox>
          <ComboBox.Select selectName="imsi" />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select selectName="imsi" />
        </ComboBox>
      </MultipleSection>

      <MultipleSection title="모집기간*">
        <ComboBox>
          <ComboBox.Select selectName="imsi" />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select selectName="imsi" />
        </ComboBox>
      </MultipleSection>

      <MultipleSection title="연락방법*">
        <ComboBox>
          <ComboBox.Select selectName="imsi" />
        </ComboBox>
        <Input placeholder="링크주소" />
      </MultipleSection>

      <SingleSection title="키워드 설정">
        <Input placeholder="#키워드를 입력하면 자동으로 활성화됩니다." />
      </SingleSection>

      <div className="flex justify-center gap-10">
        <Button1 content="임시저장" />
        <Button1 content="등록하기" />
      </div>
    </form>
  );
};
