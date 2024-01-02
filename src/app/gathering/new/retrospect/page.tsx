'use client';

import SingleSection from '../(components)/section/SingleSection';
import MultipleSection from '../(components)/section/MultipleSection';
import Radio from '../(components)/input/Radio';
import ComboBox from '../(components)/input/ComboBox';
import ImageSection from '../(components)/section/ImageSection';
import Counter from '../(components)/input/Counter';
import Button1 from '../../(components)/button/Button1';
import Input from '../(components)/input/Input';
import Textarea from '../(components)/input/Textarea';
import Button2 from '../../(components)/button/Button2';

const CreateGatheringPage = () => {
  return (
    <>
      <header className="flex flex-col justify-center w-full h-[130px] px-[20%] bg-background-blue">
        <p className=" text-neutral-50">
          나만의 프로젝트를 스팩폴리오에 소개해요
        </p>
        <h2 className="text-2xl">회고 작성</h2>
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
          <div className="flex gap-4 h-[50px] mt-10">
            <Input placeholder="불러온 프로젝트 이름" />
            <button className="w-[20%] mr-[300px] bg-neutral-20 rounded-md">
              불러오기
            </button>
          </div>
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

      <MultipleSection title="프로젝트 기간*">
        <ComboBox>
          <ComboBox.Date placeholder="시작일" />
        </ComboBox>
        <ComboBox>
          <ComboBox.Date placeholder="마감일" />
        </ComboBox>
      </MultipleSection>

      <SingleSection title="팀 이름">
        <Input placeholder="2-8글자 이내로 입력해주세요" />
      </SingleSection>

      <ImageSection title="프로젝트 팀원">
        <ImageSection.CircleImage />
      </ImageSection>

      <SingleSection title="프로젝트 소개*">
        <Textarea placeholder="어떤 프로젝트인지 이해하기 쉽도록 명확하게 작성해주세요. (60자 이내)" />
      </SingleSection>

      <SingleSection title="프로젝트 회고*">
        <Textarea placeholder="프로젝트 진행과정 중, 좋았던 점/ 아쉬운 점, 최종 결과물, 앞으로의 계획 등을 작성해보세요!" />
      </SingleSection>

      <ImageSection title="대표 이미지*">
        <ImageSection.SquareImage />
      </ImageSection>

      <SingleSection title="프로젝트 링크">
        <Input placeholder="앱스토어/구글스토어의 링크, 프로토타입 링크 등을 첨부해주세요." />
      </SingleSection>

      <MultipleSection title="기술스택*">
        <ComboBox>
          <ComboBox.Select selectName="imsi" />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select selectName="imsi" />
        </ComboBox>
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
