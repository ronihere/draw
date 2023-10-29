import { createSlice } from "@reduxjs/toolkit";
const initialState= {
    activeMenuItem: 'pencil',
    activeActionItem: null
}
const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        menuItemClick: (state, action) => {
            state.activeMenuItem = action.payload;
        },
        actionItemClick: (state, action) => {
            state.activeActionItem = action.payload;
        }
    }
})


export default menuSlice.reducer;
export const { menuItemClick, actionItemClick } = menuSlice.actions;