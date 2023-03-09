import styles from './ProfessionalImage.module.css';
import photo from '../../../assets/images/professionalAvatar.jpg';
import { ChangeEvent, useState } from 'react';

const ProfessionalImage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [proImage, setProImage] = useState('');

  const imageClick = () => {
    setOpenModal(true);
  };

  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedImage = URL.createObjectURL(e.target.files[0]);
      setProImage(uploadedImage);
    }
  };

  return (
    <div className={styles.imgDiv}>
      <img
        src={proImage || photo}
        alt="profile"
        className={styles.resumePhoto}
        onClick={imageClick}
        style={{ filter: openModal ? 'blur(8px)' : 'none' }}
      />
      <dialog open={openModal} onBlur={() => setOpenModal(false)} tabIndex={-1}>
        <input type="file" onChange={uploadImage} />
      </dialog>
    </div>
  );
};

export default ProfessionalImage;
