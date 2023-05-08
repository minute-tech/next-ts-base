import Footer from './Footer'
import './globals.css'
import Header from './Header'

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
