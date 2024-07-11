import React from 'react'
import CoffeeCard from '../Card/CoffeeCard'
import styles from './style.module.css'

function Coffee() {
  return (
    <>
      <h2 className={styles.page_title}>Cà phê tại nhà</h2>
      <CoffeeCard/>
    </>
  )
}

export default Coffee