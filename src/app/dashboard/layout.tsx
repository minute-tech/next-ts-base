import Link from 'next/link'

export const metadata = {
  title: 'Dashboard',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <div>
            <nav>
                &nbsp;&nbsp;
                <Link href="/dashboard/">Dashboard</Link>
                &nbsp;&nbsp;
                <Link href="/dashboard/profile">Profile</Link>
                &nbsp;&nbsp;
                <Link href="/dashboard/settings">Settings</Link>
            </nav>
        </div>
        <main>
            {children}
        </main>
    </>
  )
}
