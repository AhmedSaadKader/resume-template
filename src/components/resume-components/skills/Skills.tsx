import styles from './Skills.module.css';

const Skills = () => {
  return (
    <div className={styles.skillsDiv}>
      <h2>Skills</h2>
      <div className={styles.skillsGrid}>
        <div>React Front End</div>
        <div>Node / Express Back End</div>
        <div>Javascript</div>
        <div>Typescript</div>
        <div>Postgresql</div>
        <div>MongoDB</div>
      </div>
    </div>
  );
};

export default Skills;
