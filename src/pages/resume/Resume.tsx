import styles from './Resume.module.css';
import photo from '../../assets/images/professionalAvatar.jpg';
import { MdAlternateEmail } from 'react-icons/md';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineFacebook,
  AiOutlinePhone
} from 'react-icons/ai';

const Resume = () => {
  return (
    <div className={styles.resumePage}>
      <div className={styles.sideInfo}>
        <div className={styles.imgDiv}>
          <img src={photo} alt="profile" className={styles.resumePhoto} />
        </div>
        <div className={styles.linksDiv}>
          <div className={styles.email}>
            <MdAlternateEmail />
            <div>Professional Email</div>
          </div>
          <div className={styles.phone}>
            <AiOutlinePhone />
            <div>Phone number</div>
          </div>
          <div className={styles.other}>
            <AiFillLinkedin size={25} />
            <AiFillGithub size={25} />
            <AiFillTwitterCircle size={25} />
            <AiOutlineFacebook size={25} />
          </div>
        </div>
        <hr />
        <div className={styles.educationDiv}>
          <h2 className={styles.educationTitle}>Education</h2>
          <div className={styles.educationList}>
            <li>School: Degree Date xxxxxxxxxxxxxxxx</li>
            <li>School: Degree Date</li>
          </div>
        </div>
      </div>
      <div className={styles.mainInfo}>
        <div className={styles.fullNameDiv}>
          <h1>Full Name</h1>
        </div>
        <div>
          <h2>Professional Summary</h2>
          <div className={styles.summary}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius minus mollitia quod nobis
            excepturi delectus exercitationem, fuga perspiciatis, aspernatur at atque sit
            necessitatibus quas iure error ratione. Fugiat, suscipit explicabo.
          </div>
        </div>
        <hr />
        <div>
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
        <hr />
        <h2>Professional Experience</h2>
      </div>
    </div>
  );
};

export default Resume;
