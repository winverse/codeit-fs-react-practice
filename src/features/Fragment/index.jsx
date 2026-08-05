import styles from './Fragment.module.css';
import Exercise from './Exercise';

export default function Fragment() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>🧩 Fragment</h2>
      </div>

      <div className={styles.goal}>
        <h3 className={styles.goalTitle}>🎯 목표</h3>
        <p className={styles.goalText}>
          Fragment를 사용하여 불필요한 DOM 노드 없이 여러 요소를 그룹화하세요:
        </p>
        <ul className={styles.requirements}>
          <li>
            TodoItems 컴포넌트에서 <code>div</code>를{' '}
            <code>&lt;&gt;...&lt;/&gt;</code>로 변경
          </li>
          <li>
            HTML 구조가 <code>&lt;ul&gt; → &lt;li&gt;</code>가 되도록 유지
          </li>
          <li>개발자 도구(F12)로 DOM 구조 비교해보기</li>
        </ul>
      </div>

      <div className={styles.fileBox}>
        <div className={styles.fileHeader}>
          <span className={styles.fileIcon}>📁</span>
          <span className={styles.fileName}>작업 파일</span>
        </div>
        <code className={styles.filePath}>
          src/features/Fragment/Exercise.jsx
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
          💡 Fragment는 DOM에 흔적을 남기지 않아요!{' '}
          <code>&lt;&gt;...&lt;/&gt;</code> 또는{' '}
          <code>&lt;Fragment&gt;...&lt;/Fragment&gt;</code>로 사용하세요.
        </p>
      </div>
    </div>
  );
}
