import "./globals.css";

export const metadata = {
  title: "Teste de State",
  description: "Uso de useState",
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
