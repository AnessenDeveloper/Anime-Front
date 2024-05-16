import { Basket } from "./Basket";
import { Resume } from "./Resume";
import styles from "./StepOne.module.scss";

export function StepOne(props) {
    const { clothes } = props;

  return (
    <div className={styles.stepOne}>
        <div className={styles.center}>
            <Basket clothes={clothes} />
        </div>
        <div className={styles.right}>
            <Resume clothes={clothes} />
        </div>
    </div>
  )
}
