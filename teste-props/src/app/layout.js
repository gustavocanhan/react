import "./globals.css";

export const metadata = {
  title: "Teste de Props",
  description: "teste de props com react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
