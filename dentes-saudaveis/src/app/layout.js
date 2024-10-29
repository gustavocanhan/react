import "./globals.css";
import Topo from "./componentes/Topo";
import Rodape from "./componentes/Rodape";

export const metadata = {
  title: "Dentes Saudáveis",
  description: "Os melhores aparelhos dentários!",
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
