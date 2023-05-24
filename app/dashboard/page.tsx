"use client"

import Counter from './components/Counter'
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function Dashboard() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/sign-in?callbackUrl=/dashboard") // TODO: this should be auto redirecting if "required" but for now its not working, so we are manually redirecting
        },
    })
    return (
        <div>
            <h1>DASHBOARD</h1>
            <p>Welcome User!</p>
            <ul>
                <li><a href="/blog">Blog</a></li>
            </ul>
            <Counter />
        </div>
    )
}
  