import styles from './Experience.module.css';

const Experience = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className={styles.experienceDiv}>
        <li className={styles.experience}>
          {/* March 2023
          <div className={styles.expCompany}> */}
          <a href="https://TheHiringSolutions.com" className={styles.expCompany}>
            TheHiringSolutions
          </a>
          <div>- React, Typescript</div>
          {/* </div> */}
          {/* <div className={styles.expTitle}>React Developer</div> */}
          {/* <div className={styles.expResponsiblities}>What you did / responsibilities</div> */}
        </li>
        <li>
          <a className={styles.expCompany} href="https://ahmedsaadkader.github.io/portfolio/">
            Personal Portfolio
          </a>
          <div>- React</div>
        </li>
        <li>
          <a
            className={styles.expCompany}
            href="https://github.com/AhmedSaadKader/udacity-storefront-backend"
          >
            Storefront backend API
          </a>
          <div>- Nodejs, Typescript, Postgresql, Jasmine(testing)</div>
          <div className={styles.projectOverview}>
            This is an API for a shopping application containing:
            <div>- database schema that covers user, products and orders/carts</div>
            <div>- endpoints for the frontend to fetch data</div>
            <div>- data includes models and endpoints for: Users Products Orders/Carts</div>
          </div>
        </li>
        <li>
          <a
            className={styles.expCompany}
            href="https://github.com/AhmedSaadKader/image-processing-api"
          >
            Image Processing API
          </a>
          <div>- Nodejs, Typescript, Jasmine(testing)</div>
          <div className={styles.projectOverview}>
            This image-processing API serves two purposes:
            <div>
              - As a simple placeholder API, where it allows you to place images into your frontend
              with the size set via URL parameters
            </div>
            <div>
              - Used as a library to store images with the proper sizes to serve properly scaled
              versions of the images to reduce page load size
            </div>
            <div>
              - Rather than needing to resize and upload multiple copies of the same image to be
              used throughout your site, the API you create will handle resizing and serving stored
              images for you.
            </div>
          </div>
        </li>
        <li>
          <a className={styles.expCompany} href="https://epharmacy-az.web.app/">
            Pharmacy ERP system
          </a>
          <div>- React, Firebase(database)</div>
        </li>
        <li>
          <a className={styles.expCompany} href="https://where-s-waldo-aza.web.app/">
            Wheres Waldo? A photo tagging app.
          </a>
          <div>- React, Firebase(database)</div>
        </li>
        <li>
          <a className={styles.expCompany} href="https://ahmedsaadkader.github.io/memory-game/">
            Memory Game
          </a>
          <div>- React</div>
        </li>
        <li>
          <a
            className={styles.expCompany}
            href="https://ahmedsaadkader.github.io/odin-tic-tac-toe/"
          >
            Tic Tac Toe
          </a>
        </li>
        <li>
          <a
            className={styles.expCompany}
            href="https://ahmedsaadkader.github.io/odin-admin-dashboard/"
          >
            Admin Dashboard
          </a>
        </li>
        <li>
          <a className={styles.expCompany} href="https://ahmedsaadkader.github.io/odin-library/">
            Library
          </a>
        </li>
        <li>
          <a
            className={styles.expCompany}
            href="https://ahmedsaadkader.github.io/odin-restaurant-page/"
          >
            Restaurant Page
          </a>
        </li>
      </div>
    </div>
  );
};

export default Experience;
