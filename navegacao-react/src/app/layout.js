import "./globals.css";
import Topo from "@/componentes/Topo";

export const metadata = {
  title: "Navegação com React",
  description: "Estou apredendo navegação com React.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Topo/>
        {children}
      </body>
    </html>
  );
}
