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
      {/* <div className={styles.sideInfo}> */}
      <div className={styles.mainInfo}>
        {/* <ProfessionalImage /> */}
        <FullName />
        <Links />
        <hr />
        <Summary />
        <hr />
        <Skills />
        <hr />
        <Experience />
        <hr />
        <Education />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Resume;
