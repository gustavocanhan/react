import styles from '@/app/componentes/Rodape/Rodape.module.css'

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

export default function Rodape(){
    return(
        <footer className={styles.rodape}>
            <div className={styles.container_rodape}>
                <div className={styles.secao_texto}>
                    <img src='/GOVERNO_HORIZONTAL_PB_NEGATIVO.png'/>
                    <div>
                        <p><b>SECRETARIA DO GOVERNO MUNICIPAL</b></p>
                        <p>Viaduto do Chá, 15</p>
                        <p>Edifício Matarazzo - Centro</p>
                        <p>Telefone: (11) 3113-8000</p>
                        <p>São Paulo - SP</p>
                    </div>
                </div>
                <div className={styles.secao_redes}>
                    <p><FaFacebook /></p>
                    <p><FaInstagram /></p>
                    <p><FaXTwitter /></p>
                    <p><FaYoutube /></p>
                </div>
            </div>
            <div className={styles.container_dev}>
                <small>Desenvolvido por Gustavo Canhan - &copy; 2024 </small>
            </div>
        </footer>
    )
}