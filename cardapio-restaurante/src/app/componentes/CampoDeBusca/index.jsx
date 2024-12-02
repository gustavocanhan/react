import styles from "@/app/componentes/CampoDeBusca/CampoDeBusca.module.css";

export default function CampoDeBusca(props) {
  return (
    <div className={styles.container_CampoDeBusca}>
      <div>
      <img src="/lupa.png" />
      <input
        type="text"
        value={props.textoBusca}
        onChange={props.eventoBusca}
        placeholder="Pesquise aqui um dos pratos do nosso cardápio"
      />
      </div>
    </div>
  );
}
