import { Container } from "semantic-ui-react";
import styles from "./Info.module.scss";

export function Info(props) {
    const { cloth } = props;

  return (
    <Container className={styles.info}>
        <div className={styles.summary}>
            <p>{cloth.summary}</p>
        </div>
        
        <div className={styles.more}>
            <ul>
                <li>
                    <span>Fecha de lanzamiento: </span> {cloth.releaseDate}
                </li>
            </ul>
        </div>
    </Container>
  )
}
