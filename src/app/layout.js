import { Fira_Sans } from "next/font/google";

const sans = Fira_Sans({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "gmnotes",
  description: "Um espaço para mestres de RPG compartilharem experiências.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={sans.className}>{children}</body>
    </html>
  );
}
