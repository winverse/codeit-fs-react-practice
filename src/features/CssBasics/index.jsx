import styles from './CssBasics.module.css';
import Exercise from './Exercise';

export default function CssBasics() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>🎨 CSS 스타일 적용</h2>
      </div>

      <div className={styles.goal}>
        <h3 className={styles.goalTitle}>🎯 목표</h3>
        <p className={styles.goalText}>
          CSS 파일을 import하고 className을 사용하여 스타일을 적용하세요:
        </p>
        <ul className={styles.requirements}>
          <li>TodoApp.css 파일을 import 하기</li>
          <li>각 요소에 적절한 className 추가하기</li>
          <li>스타일이 올바르게 적용되는지 확인하기</li>
        </ul>
      </div>

      <div className={styles.preview}>
        <h3 className={styles.previewTitle}>👀 현재 모습</h3>
        <div className={styles.previewBox}>
          <Exercise />
        </div>
      </div>

      <div className={styles.fileBox}>
        <div className={styles.fileHeader}>
          <span className={styles.fileIcon}>📁</span>
          <span className={styles.fileName}>작업 파일</span>
        </div>
        <code className={styles.filePath}>
          src/features/CssBasics/Exercise.jsx
        </code>
      </div>

      <div className={styles.hint}>
        <p>
          💡 CSS 파일을 <code>import './TodoApp.css'</code>로 불러오고, HTML
          요소에 <code>className</code>을 추가하세요!
        </p>
      </div>
    </div>
  );
}
