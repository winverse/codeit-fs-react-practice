// ✋ 여기서 JSX 실습을 진행하세요!
// 아래 주석을 보고 코드를 작성해보세요.

function Exercise() {
  return (
    // TODO 1: 최상위 요소가 하나인지 확인하세요
    // TODO 2: <input /> 태그가 셀프 클로징 형태인지 확인하세요
    // TODO 3: <ul>에 className="todo-list"를 추가하세요

    // 👇 여기부터 코드를 작성하세요
    <div>
      <h1>오늘의 할 일</h1>
      {/* 할 일 입력 섹션 */}
      <section>
        <input type="text" placeholder="새로운 할 일을 입력하세요" />
        <button>추가</button>
      </section>
      {/* 할 일 목록 섹션 */}
      <section>
        <ul>
          <li>리액트 기초 배우기</li>
          <li>JSX 규칙 이해하기</li>
        </ul>
      </section>
    </div>
    // 👆 여기까지
  );
}

export default Exercise;
