'use client'
import React from 'react'
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faRotateLeft , faRotateRight , faSave, faEraser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { menuItemClick, actionItemClick } from '@/store/slices/menuSlice'
import { MENU_ITEMS } from '@/lib/utils/utils'
import cx from 'classnames'
const Menu = () => {
  const selectedMenu = useSelector(state => state.menu.activeMenuItem);
  const dispatch = useDispatch();
  const handleClick = (itemName) => {
    dispatch(menuItemClick(itemName))
  }

  const handleActionItemClick = (item) => {
    dispatch(actionItemClick(item));
  }
  return (
    <div className={styles.menucontainer}>
      <FontAwesomeIcon icon={faPen} className={cx(styles.icon,{[styles.active] : selectedMenu === MENU_ITEMS.PENCIL})} onClick={()=>handleClick(MENU_ITEMS.PENCIL)}/>
          <FontAwesomeIcon icon={faEraser} className={cx(styles.icon,{[styles.active] : selectedMenu === MENU_ITEMS.ERASER})} onClick={()=>handleClick(MENU_ITEMS.ERASER)} />
          <FontAwesomeIcon icon={faRotateLeft} className={styles.icon } onClick={()=>handleActionItemClick(MENU_ITEMS.UNDO)} />
          <FontAwesomeIcon icon={faRotateRight} className={styles.icon } onClick={()=>handleActionItemClick(MENU_ITEMS.REDO)} />
          <FontAwesomeIcon icon={faSave} className={styles.icon } onClick={()=>handleActionItemClick(MENU_ITEMS.SAVE)} />
    </div>
  )
}

export default Menu
