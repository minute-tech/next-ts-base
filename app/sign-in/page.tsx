'use client'

import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { LogIn } from 'lucide-react'

export default function SignIn() {
    const searchParams = useSearchParams()
    const callbackUrl: string | null = searchParams.get('callbackUrl') ?? "/";

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={() => signIn('google', { callbackUrl })}><LogIn color="green" size={16} />&nbsp;Sign In With Google</button>
        </div>
    )
}
  