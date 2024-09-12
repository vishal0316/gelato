import styles from "./BoxThree.module.css";
import phone from "../../assets/phone.gif";

const BoxThree = () => {
  return (
    <div className={styles.boxthree}>
      <div className={styles.right}>
        <img src={phone} alt="Phone" />
      </div>
      <div className={styles.left}>
        <p className={styles.paragraph}>For print producers</p>
        <h1 className={styles.heading}>GelatoConnect</h1>
        <h4>
          Elevate efficiency, cut costs, and seamlessly automate with our
          all-in-one software solution for the print industry.
        </h4>
        <button className={styles.btn}>Get Started</button>
      </div>
    </div>
  );
};

export default BoxThree;
