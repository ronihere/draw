'use client'
import React from 'react'
import styles from './index.module.css'
import { colors } from '@/lib/utils/utils'
import { useSelector, useDispatch } from 'react-redux'
import BoxColorSmall from './BoxColorSmall'

import { changeBrushSize, changeColor } from '@/store/slices/toolBoxSlice'
const ColorBoard = () => {
    const dispatch = useDispatch();
    const selectedMenu = useSelector(state => state.menu.activeMenuItem);
    const size = useSelector(state => state.toolBox[selectedMenu].size)
    const strokeBoxVisible = selectedMenu === 'pencil';

    const handleColorChange = (color) => {
        dispatch(changeColor({ item: [selectedMenu], color: color }))
    }
    const handleBrushSizeChange = (e) => {
        dispatch(changeBrushSize({ item: [selectedMenu], size: e.target.value }))
    }
    return (
        <section className={styles.boardcontainer}>
            {
                strokeBoxVisible &&
                <div className={styles.colorboxcontainer}>
                    <p>Stroke</p>
                    <div className={styles.colorscontainer}>

                        {
                            Object.keys(colors).map((color) => {
                                return <BoxColorSmall key={color} propcolor={colors[color]} clickHandler={handleColorChange}>
                                </BoxColorSmall>
                            })
                        }
                    </div>
                </div>
            }
            <div className={styles.pensizecontainer}>
                <p>
                    Brush size
                </p>
                <input type='range' min={0} max={10} onChange={handleBrushSizeChange} value={size} />
            </div>

        </section>
    )
}

export default ColorBoard
