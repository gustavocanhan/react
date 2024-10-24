import "./globals.css";
import Topo from "@/componentes/Topo/Topo";
import Rodape from "@/componentes/Rodape/Rodape";

export const metadata = {
  title: "Projeto Sorveteria",
  description: "Sorveteria criada com React.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Topo/>
        {children}
        <Rodape/>
      </body>
    </html>
  );
}
