'use client';
import styles from '@/app/componentes/FiquePorDentro/FiquePorDentro.module.css'
import { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";
import { GiAcousticMegaphone } from "react-icons/gi";
import { MdNewspaper } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";

export default function FiquePorDentro(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className={styles.dropdown_container}>
            <button onClick={toggleDropdown} className={styles.dropdown_button}>
                <p>Fique por dentro</p>
                <small>
                    {isOpen ? <MdOutlineKeyboardArrowUp/> : <MdOutlineKeyboardArrowDown/>}
                </small>
            </button>

            {isOpen && (
                <ul className={styles.dropdown_menu}>
                    <li><p><CiCircleInfo /></p><a href='' target='_blank'>Informativos CGP</a></li>
                    <li><p><GiAcousticMegaphone /></p><a href='' target='_blank'>Comunicados</a></li>
                    <li><p><MdNewspaper /></p><a href='' target='_blank'>CGP News</a></li>
                    <li><p><FaRegQuestionCircle /></p><a href='' target='_blank'>Você sabia?</a></li>
                    <li><p><BsCalendarCheck /></p><a href='' target='_blank'>Eventos/Cursos</a></li>
                </ul>
            )}
        </div>
    )
}