import { useState } from 'react';
import styles from './App.module.css';
import Welcome from './features/Welcome';
import JsxBasics from './features/JsxBasics';
import CssBasics from './features/CssBasics';
import JsxWithJs from './features/JsxWithJs';
import Props from './features/Props';
import Fragment from './features/Fragment';
import Children from './features/Children';
import State from './features/State';
import RefState from './features/RefState';
import ImageUsage from './features/ImageUsage';
import CssModule from './features/CssModule';
import ClsxUsage from './features/ClsxUsage';

const sections = [
  { id: 'jsx', label: 'JSX 기초', component: JsxBasics },
  { id: 'css', label: 'CSS 스타일', component: CssBasics },
  { id: 'jsxjs', label: 'JSX+JavaScript', component: JsxWithJs },
  { id: 'props', label: 'Props', component: Props },
  { id: 'fragment', label: 'Fragment', component: Fragment },
  { id: 'children', label: 'Children', component: Children },
  { id: 'state', label: 'State', component: State },
  { id: 'refstate', label: '참조형 State', component: RefState },
  { id: 'image', label: '이미지 사용', component: ImageUsage },
  { id: 'cssmodule', label: 'CSS Module', component: CssModule },
  { id: 'clsx', label: 'clsx', component: ClsxUsage },
];

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const activeItem = sections.find((section) => section.id === activeSection);
  const ActiveSection = activeItem?.component;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <a href="/">⚛️ React 학습 플레이그라운드</a>
        </h1>
        <p className={styles.subtitle}>주제별 실습으로 React 마스터하기</p>
      </header>

      <nav className={styles.navigation}>
        {sections.map((section) => (
          <button
            key={section.id}
            className={`${styles.navButton} ${
              activeSection === section.id ? styles.active : ''
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <main className={styles.content}>
        {ActiveSection ? <ActiveSection /> : <Welcome />}
      </main>
    </div>
  );
}

export default App;
