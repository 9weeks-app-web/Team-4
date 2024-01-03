import SurveyCard from '../(components)/SurveyCard';

const Survey = () => {
  return (
    <div>
      <p className=" font-bold text-[28px] my-11">설문조사</p>
      <SurveyCard />
      <SurveyCard />
      <SurveyCard />
    </div>
  );
};

export default Survey;
