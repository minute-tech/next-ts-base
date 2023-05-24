import Link from "next/link"

export default function Footer() {
    return (
        <footer style={{textAlign:"center"}}>
            <Link href="/legal/terms">Terms</Link>
            &nbsp;|&nbsp;
            <Link href="/legal/privacy">Privacy</Link>
        </footer>
    )
}