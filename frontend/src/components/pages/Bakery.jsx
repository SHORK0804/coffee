import React from 'react'
import BakeryCard from '../Card/BakeryCard'
import styles from './style.module.css'



function Bakery() {
  return (
    <>
      <h2 className={styles.page_title}>Bakery</h2>
      <BakeryCard />

    </>
  )
}

export default Bakery