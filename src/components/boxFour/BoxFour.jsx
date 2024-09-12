import styles from "./BoxFour.module.css";
import printing from "../../assets/printing.png";

const BoxFour = () => {
  return (
    <div className={styles.boxfour}>
      <div className={styles.left}>
        <h1 className={styles.heading}>
          Meet GelatoConnect at Printing United
        </h1>
        <p>
          Meet us at Printing United from September 10-12 in Las Vegas. Book
          your meeting slot to discover the innovative ways GelatoConnect is
          transforming the landscape and driving success for businesses like
          yours.
        </p>
        <button className={styles.btn}>Booking a meet</button>
      </div>
      <div className={styles.right}>
        <img src={printing} alt="Printing" />
      </div>
    </div>
  );
};

export default BoxFour;
