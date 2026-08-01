// ✋ State를 사용해보세요!

// TODO 1: useState를 import 하세요
// 힌트: import { useState } from 'react';

import './App.css';

function Panel({ children }) {
  return <section className="panel">{children}</section>;
}

function App() {
  // TODO 2: todos state를 만드세요
  // 힌트: const [todos, setTodos] = useState(['리액트 기초 배우기', 'State 이해하기']);
  const todos = ['리액트 기초 배우기', 'State 이해하기'];

  // TODO 3: inputText state를 만드세요
  // 힌트: const [inputText, setInputText] = useState('');

  // TODO 4: input 값이 바뀔 때마다 상태 업데이트하는 함수
  // 힌트: const handleInputChange = (event) => { setInputText(event.target.value); }

  // TODO 5: 한글 조합 중 Enter 키로 폼이 제출되지 않게 하세요
  const handleInputKeyDown = (event) => {
    if (event.nativeEvent.isComposing && event.key === 'Enter') {
      event.preventDefault();
    }
  };

  // TODO 6: 폼 제출 시 todos를 업데이트하는 함수
  // 힌트:
  // - event.preventDefault()
  // - inputText.trim() === '' 체크
  // - setTodos((prev) => [...prev, inputText.trim()])
  // - setInputText('')
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="app-container">
      <h1 className="title">오늘의 할 일</h1>

      <Panel>
        <form className="input-container" onSubmit={handleSubmit}>
          <label className="visually-hidden" htmlFor="todo-input">
            새 할 일
          </label>
          <input
            id="todo-input"
            name="todo"
            type="text"
            className="todo-input"
            placeholder="새로운 할 일을 입력하세요"
            // TODO 7: value={inputText} 추가
            // TODO 8: onChange={handleInputChange} 추가
            // TODO 9: onKeyDown={handleInputKeyDown} 추가
          />
          <button type="submit" className="add-button">
            추가
          </button>
        </form>
      </Panel>

      <Panel>
        <ul className="todo-list">
          {todos.map((todoText, index) => (
            <li key={index} className="todo-item">
              {todoText}
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

export default App;
