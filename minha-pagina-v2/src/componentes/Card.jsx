import style from "@/styles/card.module.css";

export default function Card() {
    return (
        <div className={style.card}>
            <p>Componentes</p>
            <p>Facilita em manter partes menosres funcionando corretamente.</p>
            <p>Você pode reutilizá-lo, ou seja, menos código para ser escrever.</p>
        </div>
    );
}
