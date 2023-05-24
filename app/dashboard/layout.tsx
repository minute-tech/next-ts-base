import DashNav from './components/DashNav'
import styles from './styles.module.css';
 
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
        <DashNav />
        <div className={styles.wrapper}>
            {children}
        </div>
    </>
  )
}
