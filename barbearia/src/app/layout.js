import "./globals.css";

export const metadata = {
  title: "Barbearia",
  description: "Barberia com escolha de tema",
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
