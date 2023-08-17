import { Poppins } from '@next/font/google'
import styles from '../../page.module.css'
import BasicCalendar from '~/comp/basic'

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ height: "95vh" }}>
      <BasicCalendar />
      {/* <ControlCalendar /> */}
      {/* <CustomizingCalendar /> */}
      {/* <AdvancedCalendar /> */}
      </div>
    </main>
  )
}
