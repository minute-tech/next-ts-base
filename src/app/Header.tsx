'use client';
 
import Link from 'next/link';
// import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
//   const [burgerExpanded, setBurgerExpanded] = useState(false);
 
    const pathname = usePathname();
    const root = "/";

    const navLinks = [
        {
            name: "Home",
            href: root,
        },
        {
            name: "About",
            href: `${root}about`,
        },
        {
            name: "Dashboard",
            href: `${root}dashboard`,
        },
    ];

    return (
        <header>
            <nav style={{textAlign:"center"}}>
                <div>
                    <h1>LOGO</h1>
                </div>
                <div>
                    {
                        navLinks.map((link) => {
                            const activeStyle = (
                                (pathname === link.href) || (pathname.startsWith(link.href) && link.href !== root)
                            ) ? 
                            {fontSize: "24px", margin: "0 5px"} 
                            : 
                            {fontSize: "18px", margin: "0 5px"};

                            return (
                                <span style={activeStyle}>
                                    <Link href={link.href}>{link.name}</Link>
                                </span>
                            )
                        })
                    }
                </div>
            </nav>
        </header>
    );
}
                