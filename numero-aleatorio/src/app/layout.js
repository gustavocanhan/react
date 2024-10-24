import "./globals.css";

export const metadata = {
  title: "Número Aleatório",
  description: ".",
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
