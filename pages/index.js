import Meta from '../components/Meta'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Meta data */}
      <Meta 
        title="Home"
        keywords="business around the world">
      </Meta>
      {/* End of meta data */}
      <h1>Main Website</h1>
      <p>Description of the website!</p>
      <Link href="/about">About</Link>
    </div>



  )
}
