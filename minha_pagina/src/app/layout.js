import "./globals.css";
import Topo from "@/componentes/Topo";

export const metadata = {
  title: "Minha Página",
  description: "Criada com React.js",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topo/>
        {children}
      </body>
    </html>
  );
}
