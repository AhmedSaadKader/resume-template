import styles from './Education.module.css';

const Education = () => {
  return (
    <div className={styles.educationDiv}>
      <h2 className={styles.educationTitle}>Education</h2>
      <div className={styles.educationList}>
        <li>Udacity: Advanced Front End Web Development, March 2023</li>
        <li>Udacity: Professional Front End Web Development, March 2022</li>
        <li>Udacity: Challenger Web Development, Jan 2022</li>
        <li>The Odin Project</li>
        <li>German University In Cairo: B.Sc. Pharmacy and Biotechnology, Sep 2012</li>
      </div>
    </div>
  );
};

export default Education;
