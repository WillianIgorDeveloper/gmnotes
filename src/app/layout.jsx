import { DM_Sans } from "next/font/google"

const sans = DM_Sans({ subsets: ["latin"], weight: "400" })

export const metadata = {
  title: "GmNotes",
  description: "Um espaço para mestres de RPG compartilharem experiências.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={sans.className}>{children}</body>
    </html>
  )
}
