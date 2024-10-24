import Head from "next/head";
import Topo from "@/componentes/Topo.jsx";
import Main from "@/componentes/Main.jsx";
import Rodape from '@/componentes/Rodape.jsx';


export default function Home() {
  return (
    <>
      <Head>
        <title>DevMedia - Trabalhando com componentes</title>
        <meta name="description" content="Minha página de teste do React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Topo/>
        <Main/>
        <Rodape/>
      </body>
    </>
  );
}
