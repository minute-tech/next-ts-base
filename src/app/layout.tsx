import './globals.css'
import Header from './Header'
import Footer from './Footer'
import StyledComponentsRegistry from '../../lib/registry'
import { Wrapper } from "@/styles/misc"

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
                <StyledComponentsRegistry>
                    <Header />
                    <Wrapper color="lightblue">
                        {children}
                    </Wrapper>
                    <Footer />
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
