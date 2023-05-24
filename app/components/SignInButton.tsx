"use client"


import { LogIn, LogOut } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
export { LogOut } from "lucide-react";

const SignInButton = () => {
    const { data: session, status } = useSession();

    if (session) {
        return (
            <div>
                <Image
                    src={session?.user?.image ?? "@/assets/images/user.png"} 
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
            <button onClick={() => signIn()}>
                <LogIn color="green" size={16} />&nbsp;
                Sign In
            </button>
        )
    }
}

export default SignInButton;