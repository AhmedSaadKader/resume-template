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
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillTwitterCircle />
            <AiOutlineFacebook />
          </div>
        </div>
        <div className={styles.educationDiv}>
          <h2 className={styles.educationTitle}>Education</h2>
          <li>School: Degree Date</li>
          <li>School: Degree Date</li>
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
        <h2>Skills</h2>
        <h2>Professional Experience</h2>
      </div>
    </div>
  );
};

export default Resume;
