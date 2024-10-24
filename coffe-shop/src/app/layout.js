import "./globals.css";

export const metadata = {
  title: "Coffe Shop",
  description: "A melhor cafeteira do Brasil",
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
