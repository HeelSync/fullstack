import { createSlice } from "@reduxjs/toolkit";

const initialClassesState = {
    classTimes: [],
    classNames: [],
}



const classesSlice = createSlice({
    name: 'classes', // Name of the slice
    initialState: initialClassesState,
    reducers: {
        // Reducer to add a new class time
        addClassTime(state, action) {
            state.classTimes.push(action.payload);
        },
        removeClassTime(state, action) {
            const index = action.payload;
            state.classNames = state.classTimes.filter(name => name !== index);
        },
        // Reducer to add a new class name
        addClassName(state, action) {
            state.classNames.push(action.payload);
        },
        removeClassName(state, action) {
            const index = action.payload;
            state.classNames = state.classNames.filter(name => name !== index);
        }

    },
});
export const {addClassTime, addClassName, removeClassTime, removeClassName} = classesSlice.actions;
export default classesSlice.reducer;
