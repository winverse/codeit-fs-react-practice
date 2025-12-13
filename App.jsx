import { useState } from "react";
import styles from "./App.module.css";
import Welcome from "./features/Welcome";
import Placeholder from "./features/Placeholder";
import JsxBasics from "./features/JsxBasics";

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: "jsx", label: "JSX 기초" },
    { id: "components", label: "컴포넌트" },
    { id: "props", label: "Props" },
    { id: "state", label: "State" },
    { id: "events", label: "이벤트 처리" },
    { id: "lists", label: "리스트 렌더링" },
    { id: "forms", label: "폼 다루기" },
    { id: "hooks", label: "Hooks" },
  ];

  const renderContent = () => {
    if (!activeSection) {
      return <Welcome />;
    }

    // 각 섹션별 컴포넌트 렌더링
    switch (activeSection) {
      case "jsx":
        return <JsxBasics />;
      default:
        const sectionTitle = sections.find(
          (s) => s.id === activeSection
        )?.label;
        return <Placeholder title={sectionTitle} />;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          ⚛️ React 학습 플레이그라운드
        </h1>
        <p className={styles.subtitle}>
          주제별 실습으로 React 마스터하기
        </p>
      </header>

      <nav className={styles.navigation}>
        {sections.map((section) => (
          <button
            key={section.id}
            className={`${styles.navButton} ${
              activeSection === section.id
                ? styles.active
                : ""
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <main className={styles.content}>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
