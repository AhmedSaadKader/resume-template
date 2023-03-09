import styles from './Experience.module.css';

const Experience = () => {
  return (
    <div className={styles.experienceDiv}>
      <h2>Professional Experience</h2>
      <div className={styles.experience}>
        <div className={styles.expDate}>Date from - Date to</div>
        <div className={styles.expCompany}>Who you did this for</div>
        <div className={styles.expTitle}>Your title</div>
        <div className={styles.expResponsiblities}>What you did / responsibilities</div>
      </div>
    </div>
  );
};

export default Experience;
