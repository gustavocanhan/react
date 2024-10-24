import Card from '@/componentes/Card.jsx';

import style from '@/styles/main.module.css';

export default function Main() {
    return (
        <main className={style.main_container}>
            <Card/>
            <Card/>
            <Card/>
        </main>
    );
}