import React from 'react'
import styles from './index.module.css'
import cx from 'classnames'
import { useSelector } from 'react-redux'
export default function BoxColorSmall({ clickHandler, propcolor }) {
    const activeMenuItem = useSelector(state => state.menu.activeMenuItem);
    const { color, size } = useSelector(state => state.toolBox[activeMenuItem])
  return (
      <div className={cx(styles.colorbox,{ [styles.active]: color === propcolor })} style={{background: [propcolor]}} onClick={()=>clickHandler(propcolor)}>
                          </div>
  )
}
