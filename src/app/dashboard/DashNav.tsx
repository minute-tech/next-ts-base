'use client';
 
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashNav() {
    const pathname = usePathname();
    const root = "/dashboard";
    const navLinks = [
        {
            name: "Dashboard Home",
            href: `${root}`,
        },
        {
            name: "Profile",
            href: `${root}/profile`,
        },
        {
            name: "Settings",
            href: `${root}/settings`,
        },
    ];

    return (
        <nav>
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
        </nav>
    );
}
                