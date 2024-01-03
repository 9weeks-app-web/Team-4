'use client';

import SingleSection from '../../(components)/section/create/SingleSection';
import MultipleSection from '../../(components)/section/create/MultipleSection';
import ImageSection from '../../(components)/section/create/ImageSection';
import ComboBox from '../../(components)/input/ComboBox';
import Counter from '../../(components)/input/Counter';
import Input from '../../(components)/input/Input';
import Textarea from '../../(components)/input/Textarea';
import ButtonBasic from '../../(components)/button/ButtonBasic';

const CreateGatheringPage = () => {
  return (
    <>
      <header className="flex flex-col justify-center w-full h-[130px] px-[20%] bg-background-blue">
        <p className=" text-neutral-50">
          나만의 스터디를 스팩폴리오와 함께해요
        </p>
        <h2 className="text-2xl">스터디 생성</h2>
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
            <option value="study">스터디</option>
            <option value="project">프로젝트</option>
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
      <SingleSection title="프로젝트 이름">
        <Input placeholder="직관적인 프로젝트명을 사용하면 많은 사람들이 볼 수 있어요. (20자 이내)" />
      </SingleSection>
      <MultipleSection title="스터디 분야*">
        <ComboBox>
          <ComboBox.Select selectName="imsi" />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select selectName="imsi" />
        </ComboBox>
      </MultipleSection>
      <SingleSection title="스터디 요약">
        <Textarea placeholder="어떤 스터디인지 이해하기 쉽도록 명확하게 작성해주세요. (60자 이내)" />
      </SingleSection>
      <SingleSection title="스터디 설명*">
        <Textarea placeholder="스터디 동기, 서비스 기획 등 자세한 설명으로 지원율을 높여보세요!" />
      </SingleSection>
      <MultipleSection title="스터디 기간*">
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
      <ImageSection title="스터디 팀원">
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
        <ButtonBasic content="추가" />
      </MultipleSection>
      <div className="h-32 border">이런사람을 선호해요!</div>
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
        <ButtonBasic content="임시저장" />
        <ButtonBasic content="등록하기" />
      </div>
    </form>
  );
};
