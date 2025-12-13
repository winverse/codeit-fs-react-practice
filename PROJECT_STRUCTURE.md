# React 학습 플레이그라운드

주제별 실습으로 React를 마스터하는 학습 프로젝트입니다.

## 📁 프로젝트 구조

```
src/
├── App.jsx                 # 메인 애플리케이션 & 네비게이션
├── App.module.css
├── main.jsx
├── index.css               # 글로벌 스타일
│
├── components/             # 재사용 가능한 공통 컴포넌트
│   ├── Button.jsx
│   └── Button.module.css
│
├── features/               # 각 학습 주제별 실습 컴포넌트
│   ├── Welcome.jsx
│   ├── Welcome.module.css
│   ├── Placeholder.jsx
│   └── Placeholder.module.css
│
├── hooks/                  # 커스텀 훅 (필요시 추가)
│
└── styles/                 # 공통 스타일 유틸리티 (필요시 추가)
```

## 🚀 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 📚 학습 주제

- **JSX 기초** - JSX 문법과 기본 사용법
- **컴포넌트** - 함수형 컴포넌트 생성 및 구성
- **Props** - 부모-자식 컴포넌트 간 데이터 전달
- **State** - useState를 활용한 상태 관리
- **이벤트 처리** - 사용자 인터랙션 다루기
- **리스트 렌더링** - 배열 데이터 렌더링 및 key 사용
- **폼 다루기** - 입력 폼 제어 및 검증
- **Hooks** - useEffect 및 기타 React Hooks

## 💡 사용 방법

1. 원하는 학습 주제 버튼을 클릭합니다
2. 해당 주제의 실습 예제가 표시됩니다
3. 코드를 수정하며 React의 동작을 이해합니다

## 🎯 강의 내용 추가 방법

강의 주제와 내용을 전달하면, 해당 주제에 맞는 실습 컴포넌트를 `src/features/` 폴더에 추가합니다.
