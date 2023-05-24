export const metadata = {
  title: 'Blog',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <div style={{backgroundColor: "lightgreen", height: "25px", width: "100%"}} />
        {children}
    </>
  )
}
