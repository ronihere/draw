'use client'
import { MENU_ITEMS } from '@/lib/utils/utils';
import { actionItemClick } from '@/store/slices/menuSlice';
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function Canvas() {
  const dispatch = useDispatch();
  const { activeMenuItem , activeActionItem} = useSelector(state => state.menu);
  const { color, size } = useSelector(state => state.toolBox[activeMenuItem])
  const canvasRef = useRef(null);
  const drawRef = useRef(null);
  const historyRef = useRef([]);
  const historyIndexRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (activeActionItem === MENU_ITEMS.SAVE) {
      const URL = canvas.toDataURL();
      const anchor = document.createElement('a');
      anchor.href = URL;
      anchor.download = 'sketch.jpg'
      anchor.click();
    } else if (activeActionItem === MENU_ITEMS.UNDO || activeActionItem === MENU_ITEMS.REDO) {
      if (historyIndexRef.current > 0 && activeActionItem === MENU_ITEMS.UNDO) historyIndexRef.current -= 1;
      if (historyIndexRef.current < historyRef.current.length -1 && activeActionItem === MENU_ITEMS.REDO) historyIndexRef.current += 1;
      const imageData = historyRef.current[historyIndexRef.current];
      context.putImageData(imageData, 0, 0);
    }
    dispatch(actionItemClick(null));
  },[activeActionItem, dispatch])
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return
    const context = canvas.getContext('2d')
    const changeConfig = () => {
      context.strokeStyle = color;
      context.lineWidth = size;
    }
    changeConfig();
  }, [size , color]);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) returnS
    const context = canvas.getContext('2d')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMousedown = (e) => {
      drawRef.current = true;
      context.beginPath();
      context.moveTo(e.clientX, e.clientY);
    }
    const handleMouseup = (e) => {
      drawRef.current = false;
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      historyRef.current.push(imageData);
      historyIndexRef.current = historyRef.current.length - 1;
    }
    
    const handleMousemove = (e) => {
      if (!drawRef.current) return;
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
    }

    canvas.addEventListener('mouseup', handleMouseup);
    canvas.addEventListener('mousemove', handleMousemove);
    canvas.addEventListener('mousedown', handleMousedown);

    return () => {
      canvas.removeEventListener('mouseup', handleMouseup);
      canvas.removeEventListener('mousemove', handleMousemove);
      canvas.removeEventListener('mousedown', handleMousedown);
    }
  }, [])
  return (
    <canvas ref={canvasRef} >
    </canvas>
  )
}
