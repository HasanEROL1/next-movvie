import Header from "./components/Header"
import "./styles/globals.css"
import Providers from './../Providers';
import Tabs from "./components/Tabs";

export const metadata = {
  title: 'Movies',
  description: 'Movie application'
}

export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <Tabs />

          {children}
        </Providers>

      </body>
    </html>
  )
}
