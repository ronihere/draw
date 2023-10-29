import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '@/store/slices/menuSlice'
import ToolBoxeReducer from '@/store/slices/toolBoxSlice'

const Store = configureStore({
    reducer: {
        menu: menuReducer,
        toolBox : ToolBoxeReducer
    }
})

export default Store