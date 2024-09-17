import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";

const initialClassesState = {
    classTimes: [],
    classNames: [],
    classNumbers: []
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
            state.classNames.push("Until " + action.payload);
            state.classNames.push(action.payload)
        },
        removeClass(state, action) {
            const index = action.payload;
           // state.classNames = state.classNames.filter(name => name !== index);
            //state.classTimes = state.classTimes.filter(name => name !== index);
            state.classTimes.splice(index, 1);
            state.classNames.splice(index, 1);
            state.classNumbers.splice(index, 1);
            
            //state.dayPatterns.splice(index, 1);
                },
        addClass(state, action) {
            if (action.payload && typeof action.payload.name==='string' && typeof action.payload.time === 'string') {
                state.classTimes.push(action.payload.time);
                state.classNames.push("Until" + action.payload.name);
                state.classNames.push(action.payload.name)
                state.classNumbers.push(action.payload.number);
                //console.log("TEST:" + state.classNames)
            }
            
          //  state.classNames.push(action.payload.days);
        }

    },
});
export const { addClassTime, addClassName, removeClass, addClass } = classesSlice.actions;
export default classesSlice.reducer;

// crashout tuesday august 20 2024
