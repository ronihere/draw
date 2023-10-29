import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS, colors } from "@/lib/utils/utils";
const initialState= {
    [MENU_ITEMS.PENCIL]: {
        color: colors.BLACK,
        size: 3
    },
    [MENU_ITEMS.ERASER]: {
        color: colors.WHITE,
        size: 3
    },
    [MENU_ITEMS.UNDO]: {},
    [MENU_ITEMS.REDO]:{},
    [MENU_ITEMS.SAVE]:{},
}
const toolBoxSlice = createSlice({
    name: 'toolBox',
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state[action.payload.item].color = action.payload.color;
            console.log(JSON.stringify(state,null,4),':::STate')
        },
        changeBrushSize: (state, action) => {
            state[action.payload.item].size = action.payload.size;
        }
    }
})
export default toolBoxSlice.reducer;
export const { changeBrushSize, changeColor } = toolBoxSlice.actions;