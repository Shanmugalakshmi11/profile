import StandardBtn from "../../../common/button_std/StandardBtn";
import styles from "./NavBarRight.module.css";

function NavBarRight() {
  return (
    <div className={styles.mainContainer}>
      <StandardBtn text={"Login"} />
      <div className={styles.spacer} />
      <StandardBtn text={"Sign Up"} />
    </div>
  );
}

export default NavBarRight;
