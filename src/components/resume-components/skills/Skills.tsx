import styles from './Skills.module.css';

const Skills = () => {
  return (
    <div className={styles.skillsDiv}>
      <h2>Skills</h2>
      <div className={styles.skillsGrid}>
        <div>Skill 1</div>
        <div>Skill 2</div>
        <div>Skill 3</div>
        <div>Skill 4</div>
        <div>Skill 5</div>
        <div>Skill 6</div>
      </div>
    </div>
  );
};

export default Skills;
