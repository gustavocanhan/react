import styles from "@/app/componentes/CampoDeBusca/CampoDeBusca.module.css";

export default function CampoDeBusca() {
  return (
    <div className={styles.container_CampoDeBusca}>
      <div>
      <img src="/lupa.png" />
      <input
        type="text"
        placeholder="Pesquise aqui um dos pratos do nosso cardápio"
      />
      </div>
    </div>
  );
}
