import styles from './Resume.module.css';
import {
  ProfessionalImage,
  Links,
  Education,
  FullName,
  Summary,
  Skills,
  Experience
} from '../../components/resume-components';

const Resume = () => {
  return (
    <div className={styles.resumePage}>
      <div className={styles.sideInfo}>
        <ProfessionalImage />
        <Links />
        <hr />
        <Education />
      </div>
      <div className={styles.mainInfo}>
        <FullName />
        <Summary />
        <hr />
        <Skills />
        <hr />
        <Experience />
      </div>
    </div>
  );
};

export default Resume;
