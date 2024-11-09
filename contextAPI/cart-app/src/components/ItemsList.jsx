import React from 'react'
import styles from '../styles/ItemList.module.css'
import ItemCard from './ItemCard'

function ItemsList() {
  return (
    <div className={styles.wrapper}>
      <ItemCard name="Belt" price={199} />
      {/* <ItemCard name="Bag" price={499} />
      <ItemCard name="Gyser" price={5999} /> */}
    </div>
  )
}

export default ItemsList