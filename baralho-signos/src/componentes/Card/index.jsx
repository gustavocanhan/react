import styles from "@/componentes/Card/Card.module.css";

import { FaFire, FaWater } from "react-icons/fa";
import { MdAir } from "react-icons/md";
import { PiPlant } from "react-icons/pi";

export default function Card(props) {
  return (
    <div
      className={
        props.elemento === "Água"
          ? styles.card_agua
          : props.elemento === "Fogo"
          ? styles.card_fogo
          : props.elemento === "Terra"
          ? styles.card_terra
          : props.elemento === "Ar" && styles.card_ar
      }
    >
      <div className={styles.card}>
        <div className={styles.titulo}>
          <h3>{props.signo}</h3>
          {props.elemento === "Água" ? (
            <FaWater className={styles.icone} />
          ) : props.elemento === "Fogo" ? (
            <FaFire className={styles.icone} />
          ) : props.elemento === "Terra" ? (
            <PiPlant className={styles.icone} />
          ) : (
            props.elemento === "Ar" && <MdAir className={styles.icone} />
          )}
        </div>

        <img src={props.image} />
        <span>
          {props.dataInicio} - {props.dataFim}
        </span>
      </div>
    </div>
  );
}
