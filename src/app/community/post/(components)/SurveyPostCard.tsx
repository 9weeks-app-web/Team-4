const SurveyPostCard = () => {
  return (
    <div className="text-neutral-60">
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
        <p className="mr-5">설문 기간</p>
        <input
          type="text"
          id="title"
          placeholder="시작일"
          className="w-[380px] h-[50px] mr-[30px] border border-neutral-10 text-neutral-40 rounded-xl p-4"
        />
        <input
          type="text"
          id="title"
          placeholder="마감일"
          className="w-[380px] h-[50px] border border-neutral-10 text-neutral-40 rounded-xl p-4"
        />
      </div>
      <div className="flex items-center mb-[59px]">
        <p className="mr-5">소요 시간</p>
        <select className="w-[120px] h-[50px] mr-[30px] border border-neutral-10 text-neutral-40  rounded-xl p-3">
          <option value="1">1분</option>
          <option value="2">2분</option>
          <option value="3">3분</option>
          <option value="4">4분</option>
        </select>
        <select className="w-[120px] h-[50px] border border-neutral-10 text-neutral-40  rounded-xl p-3">
          <option value="남녀공통">남녀공통</option>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </div>
      <div>
        <p>설문 링크</p>
        <input
          type="text"
          id="title"
          placeholder="URL 형식의 설문 링크를 첨부해주세요."
          className="w-full h-[52px] "
        />
      </div>
    </div>
  );
};
export default SurveyPostCard;
