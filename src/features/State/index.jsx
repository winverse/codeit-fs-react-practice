import styles from './State.module.css';
import Exercise from './Exercise';

export default function State() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>🔄 State</h2>
      </div>

      <div className={styles.goal}>
        <h3 className={styles.goalTitle}>🎯 목표</h3>
        <p className={styles.goalText}>
          useState를 사용하여 컴포넌트의 상태를 관리하고, 사용자 입력에 반응하는
          기능을 구현하세요:
        </p>
        <ul className={styles.requirements}>
          <li>
            <code>useState</code>로 todos와 inputText state 생성
          </li>
          <li>
            input의 <code>value</code>, <code>onChange</code> 연결하여 제어
            컴포넌트 만들기
          </li>
          <li>
            <code>form</code>의 <code>onSubmit</code>과{' '}
            <code>handleSubmit</code>으로 할 일 추가 기능 구현
          </li>
          <li>
            Enter 키 처리 시 한글 입력 중(
            <code>isComposing</code>) 체크
          </li>
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
        <code className={styles.filePath}>src/features/State/Exercise.jsx</code>
      </div>

      <div className={styles.hint}>
        <p>
          💡 State가 변경되면 React가 자동으로 리렌더링해요!{' '}
          <code>setTodos</code>로 배열을 업데이트할 때는 불변성을 지켜주세요:{' '}
          <code>[...prev, newItem]</code>
        </p>
      </div>
    </div>
  );
}
