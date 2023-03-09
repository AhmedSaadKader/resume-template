import styles from './Education.module.css';

const Education = () => {
  return (
    <div className={styles.educationDiv}>
      <h2 className={styles.educationTitle}>Education</h2>
      <div className={styles.educationList}>
        <li>School: Degree Date xxxxxxxxxxxxxxxx</li>
        <li>School: Degree Date</li>
      </div>
    </div>
  );
};

export default Education;
