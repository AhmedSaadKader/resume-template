import styles from './Links.module.css';
import { MdAlternateEmail } from 'react-icons/md';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineFacebook,
  AiOutlinePhone
} from 'react-icons/ai';

const Links = () => {
  return (
    <div className={styles.linksDiv}>
      <div className={styles.email}>
        <MdAlternateEmail />
        <div>Professional Email</div>
      </div>
      <div className={styles.phone}>
        <AiOutlinePhone />
        <div>Phone number</div>
      </div>
      <div className={styles.otherLinks}>
        <AiFillLinkedin size={25} />
        <AiFillGithub size={25} />
        <AiFillTwitterCircle size={25} />
        <AiOutlineFacebook size={25} />
      </div>
    </div>
  );
};

export default Links;
