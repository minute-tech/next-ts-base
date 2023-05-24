"use client"

import { LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
export { LogOut } from "lucide-react";

const SignInButton = () => {
    const { data: session, status } = useSession();

    if (session) {
        return (
            <div>
                <Image
                    src={session?.user?.image ?? "/assets/images/misc/user.png"} 
                    width={32} 
                    height={32}
                    alt={`${session?.user?.name ?? "user"} avatar`}
                />
                {/* TODO: have a drop down with go to profile and settings pages? */}
                <LogOut color="red" size={16} onClick={() => signOut()} />
            </div>
        )
    } else {
        return (
            <Link href="/sign-in">
                Sign In
            </Link>
        )
    }
}

export default SignInButton;