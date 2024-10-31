import "./globals.css";

export const metadata = {
  title: "Agência de Design",
  description: "Projeto em React.js",
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
