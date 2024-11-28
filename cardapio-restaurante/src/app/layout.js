import "./globals.css";

export const metadata = {
  title: "Cardápio de Restaurante",
  description: "Projeto com React e JavaScript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
