import styles from './RefState.module.css';
import Exercise from './Exercise';

export default function RefState() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>🔗 참조형 State (불변성)</h2>
      </div>

      <div className={styles.goal}>
        <h3 className={styles.goalTitle}>🎯 목표</h3>
        <p className={styles.goalText}>
          객체 배열 state의 불변성을 지키며 추가, 삭제, 수정 기능을 구현하세요:
        </p>
        <ul className={styles.requirements}>
          <li>
            <code>nanoid</code>로 고유 ID 생성, todos를 객체 배열로 변경
          </li>
          <li>
            <code>handleAddTodo</code>: 새 객체를 배열에 추가 (불변성 유지)
          </li>
          <li>
            <code>handleDelete</code>: <code>filter</code>로 삭제 (새 배열 생성)
          </li>
          <li>
            <code>handleToggle</code>: <code>map</code>으로 isDone 토글 (새 객체
            생성)
          </li>
          <li>
            TodoItem에 <code>onToggle</code>, <code>onDelete</code> props 전달
          </li>
        </ul>
      </div>

      <div className={styles.fileBox}>
        <div className={styles.fileHeader}>
          <span className={styles.fileIcon}>📁</span>
          <span className={styles.fileName}>작업 파일</span>
        </div>
        <code className={styles.filePath}>
          src/features/RefState/Exercise.jsx
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
          💡 참조형 state는 직접 수정 금지! 항상 <code>[...prev, newItem]</code>
          , <code>filter</code>, <code>map</code>으로 새 배열/객체를 만들어
          불변성을 지키세요.
        </p>
      </div>
    </div>
  );
}
