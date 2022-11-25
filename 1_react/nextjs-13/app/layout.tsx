import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <nav>
          <Link href="/">
            Home
          </Link>&nbsp;&nbsp;
          <Link href="/posts">
            Post
          </Link>
        </nav>
          <main>
            {children}
          </main>
      </body>
    </html>
  )
}
