const Details = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex justify-center items-center mr-2 w-12 h-12 border rounded-full"></div>
        <div>
          <div className="flex">
            <div className="mr-2">하으니</div>
            <div>뱃지</div>
          </div>
          <div className="flex">
            <div>UX/UI디자이너</div>
            <div>・약 2시간 전</div>
          </div>
        </div>
      </div>
      <div className=" bg-neutral-0  border-neutral-30 rounded-2xl my-4">
        <div className=" font-bold text-xl mb-4">
          부트캠프 객관적인 현실 궁금합니다.
        </div>

        <div className=" mb-8">
          개발과 무관한 전공이고, 대학교 동아리에서 창업 경진대회 준비를
          하다가개발에 관심히 생겨 이후 독학 중입니다.말이 독학이지 클론 코딩
          몇번 해본게 전부라,현재 개발자 취업 준비 중이라고 제 입으로 말하기도
          부끄러운 상태입니다.내년 안으로 취업이 목표라 여러 생각들이 많아,
          현직자 분들이 많이 모여있는 곳에 질문을 드립니다.1. 부트캠프를
          수강하려 하는데, 정말 98% 수료율, 99% 취업률 등이 진실인가요?
          부트캠프를 수강하신 선배님들 입장에서는 이러한 수치가 정말인지?
          부트캠프 전반적인 분위기가 어떤지 궁금합니다.2. 부트캠프는 배민 네이버
          사피 등 대기업에서 운영하는 것이 아니면 절대 가지마라고 하던데
          정말인가요? 사실 일년안으로 개발자 취업을 생각중이라 올해안에 꼭
          부트캠프에 입학을 희망하고 있습니다. 대기업에서 연계 운영하는
          부트캠프의 경우 탈락의 위험성도 생각을 안할 수가 없어 조금 불안한게
          사실인데 위의 부트캠프들 아니면 절대 가지 않는게 맞을까요? 3. 현재
          오프라인 부트캠프 위주로 생각하고 있는데 오프라인 부트캠프는 위코드,
          바닐라코딩 두개가 유명하더군요. 혹시 두개 들어보신 선배님들이 있다면
          전체적인 분위기는 어떤지, 어떻게 생각하시는지 알려주시면
          감사하겠습니다. 그외 부트캠프를 통해서 비전공자 개발자 취업에 성공하신
          개발자 분들이 있다면 지혜를 나눠주시면 좋을 것 같습니다. 부트캠프
          고르는 팁 등등 알려주시면 내년도 등록시에 참고하겠습니다.
        </div>
        <div className="flex justify-between mb-4">
          <div>공유하기</div>
          <div>신고하기</div>
        </div>
        <div className="flex justify-between mb-4 bg-primary-10 rounded-xl p-4">
          <div className="flex">
            <div className="flex justify-center items-center mr-2 w-12 h-12 border rounded-full"></div>
            <div>
              <div className="flex">
                <div className="mr-2">하으니</div>
                <div>뱃지</div>
              </div>
              <div className="flex">
                <div>UX/UI디자이너</div>
              </div>
            </div>
          </div>

          <button className="bg-primary-80 rounded-xl text-neutral-0 p-2">
            + 팔로우
          </button>
        </div>
        <div className="flex justify-around border rounded-2xl border-neutral-30 p-4 mb-12">
          <div>코맨트</div>
          <div>좋아요</div>
          <div>뷰</div>
          <div>스크랩</div>
        </div>
        <div className="flex mb-12 ">
          <div className="flex justify-center items-center mr-2 w-12 h-12 border rounded-full mb-4"></div>
          <div className="w-full h-8">
            <input
              type="text"
              placeholder="댓글을 입력하세요"
              className="border p-2 w-full rounded-2xl"
            />
          </div>
        </div>
        <div className="flex mb-3">
          <div className="flex justify-center items-center mr-2 w-12 h-12 border rounded-full"></div>
          <div>
            <div className="flex">
              <div className="mr-2">하으니</div>
              <div>뱃지</div>
            </div>
            <div className="flex">
              <div>UX/UI디자이너</div>
              <div>・약 2시간 전</div>
            </div>
          </div>
        </div>
        <div className="ml-12">
          <p className="mb-4">
            취업률, 수강률은 케바케라는 점 다시 한번 강조 드리면서 일단 부트텐트
            사이트에 가셔서 본인에게 맞는 부트캠프를 찾아보는게 좋을 것
            같습니다.
          </p>

          <div className="flex">
            <div className="mr-3">좋아요</div>
            <div>댓글달기</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
