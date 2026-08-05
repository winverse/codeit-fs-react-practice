import styles from './Children.module.css';
import Exercise from './Exercise';

export default function Children() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>👶 Children</h2>
      </div>

      <div className={styles.goal}>
        <h3 className={styles.goalTitle}>🎯 목표</h3>
        <p className={styles.goalText}>
          props.children을 사용하여 레이아웃 컴포넌트를 재사용하세요:
        </p>
        <ul className={styles.requirements}>
          <li>
            Panel 컴포넌트에서 <code>children</code>을 받아 렌더링하기
          </li>
          <li>
            App에서 입력 섹션과 목록 섹션을 각각 <code>&lt;Panel&gt;</code>로
            감싸기
          </li>
          <li>샌드위치 비유: 빵(Panel)은 재사용, 속(children)은 변경</li>
        </ul>
      </div>

      <div className={styles.fileBox}>
        <div className={styles.fileHeader}>
          <span className={styles.fileIcon}>📁</span>
          <span className={styles.fileName}>작업 파일</span>
        </div>
        <code className={styles.filePath}>
          src/features/Children/Exercise.jsx
        </code>
      </div>

      <div className={styles.preview}>
        <h3 className={styles.previewTitle}>👀 현재 모습</h3>
        <div className={styles.previewBox}>
          <Exercise />
        </div>
      </div>

      <div className={styles.hint}>
        <p>
          💡 Panel은 레이아웃만 제공하고, 내용은 <code>children</code>으로
          받아요. Card, Modal 등에서 자주 사용됩니다!
        </p>
      </div>
    </div>
  );
}
