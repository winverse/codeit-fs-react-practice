import styles from "./JsxWithJs.module.css";
import Solution from "./Solution";
import Exercise from "./Exercise";

export default function JsxWithJs() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          🔗 JSX에서 JavaScript 사용하기
        </h2>
      </div>

      <div className={styles.goal}>
        <h3 className={styles.goalTitle}>🎯 목표</h3>
        <p className={styles.goalText}>
          중괄호 {"{}"} 를 사용하여 JSX 안에서 JavaScript를
          활용하세요:
        </p>
        <ul className={styles.requirements}>
          <li>
            변수 값 출력: <code>{"{title}"}</code> 형태로
            변수 사용하기
          </li>
          <li>
            함수 실행 결과 출력:{" "}
            <code>
              {"{new Date().toLocaleDateString()}"}
            </code>
          </li>
          <li>
            조건부 렌더링: 삼항 연산자로 할 일 유무에 따라
            다른 UI 표시
          </li>
        </ul>
      </div>

      <div className={styles.preview}>
        <h3 className={styles.previewTitle}>
          👀 현재 모습
        </h3>
        <div className={styles.previewBox}>
          <Exercise />
        </div>
      </div>

      <div className={styles.preview}>
        <h3 className={styles.previewTitle}>
          ✨ 완성 결과
        </h3>
        <div className={styles.previewBox}>
          <Solution />
        </div>
      </div>

      <div className={styles.fileBox}>
        <div className={styles.fileHeader}>
          <span className={styles.fileIcon}>📁</span>
          <span className={styles.fileName}>작업 파일</span>
        </div>
        <code className={styles.filePath}>
          src/features/JsxWithJs/Exercise.jsx
        </code>
      </div>

      <div className={styles.hint}>
        <p>
          💡 막히면 <code>Solution.jsx</code>를 확인하세요!
        </p>
      </div>
    </div>
  );
}
