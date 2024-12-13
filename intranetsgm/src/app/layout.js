import "./globals.css";

import Topo from "./componentes/Topo";
import Rodape from "./componentes/Rodape";

export const metadata = {
  title: "Intranet - SGM",
  description: "Portal de informações da Secretaria do Governo Municipal",
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
