import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function FirstPost() {
  return (
    <>
      <h1>1つ目のPost</h1>
      <h2 className={styles.title}>
        <Link href="/">
          <div>Back to home</div>
        </Link>
      </h2>
    </>
  )
}