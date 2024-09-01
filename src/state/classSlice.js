import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";

const initialClassesState = {
    classTimes: [],
    classNames: [],
    dayPatterns: []
}

const classesSlice = createSlice({
    name: 'classes', // Name of the slice
    initialState: initialClassesState,
    reducers: {
        // Reducer to add a new class time
        addClassTime(state, action) {
            state.classTimes.push(action.payload);
        },
        
        // Reducer to add a new class name
        addClassName(state, action) {
            state.classNames.push(action.payload);
        },
        removeClass(state, action) {
            const index = action.payload;
           // state.classNames = state.classNames.filter(name => name !== index);
            //state.classTimes = state.classTimes.filter(name => name !== index);
            state.classTimes.splice(index, 1);
            state.classNames.splice(index, 1);
            //state.dayPatterns.splice(index, 1);
                },
        addClass(state, action) {
            state.classTimes.push(action.payload.name);
            state.classNames.push(action.payload.time);
          //  state.classNames.push(action.payload.days);
        }

    },
});
export const { addClassTime, addClassName, removeClass, addClass } = classesSlice.actions;
export default classesSlice.reducer;

// crashout tuesday august 20 2024
