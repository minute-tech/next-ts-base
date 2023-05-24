import './styles/globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

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
                <Header />
                <hr/>
                <div>
                    {children}
                </div>
                <hr/>
                <Footer />
            </body>
        </html>
    )
}
