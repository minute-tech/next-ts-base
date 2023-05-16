'use client'
import { Hr } from "@/styles/misc"
import Link from "next/link"

export default function Footer() {
    return (
        <footer style={{textAlign:"center"}}>
            <Hr />
            <Link href="/legal/terms">Terms</Link>
            &nbsp;|&nbsp;
            <Link href="/legal/privacy">Privacy</Link>
        </footer>
    )
}