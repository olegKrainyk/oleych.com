import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation/Navigation"
import style from "./style.module.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "oleych.com",
  description: "in development",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className={style.container}>
          {children}
        </div>

        <Navigation/>
        </body>
    </html>
  )
}