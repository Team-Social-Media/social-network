import styles from '../styles/Item.module.css'

function Item() {

  return (
    <div className={styles.card}>
      <img />
      <h2 className={styles.title}>Item name</h2>
      <p className={styles.description}>Item description</p>
      <button>Like</button>
      <button>Comment</button>
    </div>
  )
}

export default Item;