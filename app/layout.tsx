import './styles/globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Provider from "./components/Provider"

export const metadata = {
  title: 'Next TS Base',
  description: 'Baseline Next.js framework with TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <Header />
                    <hr/>
                    <div>
                        {children}
                    </div>
                    <hr/>
                    <Footer />
                </Provider>
            </body>
        </html>
    )
}
