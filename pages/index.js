import Meta from '../components/Meta'
import styles from '../styles/Style.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Meta 
        title="ModernChain | Home"
        keywords="business around the world">
      </Meta>

      <di>
        <h1>Welcome to <span><code className={"text-red-500 "}>NextJS!</code></span></h1>
      </di>
      
    </div>
  )
}
