import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const taskSlice = createSlice({
    name:"addtask",
    initialState,
    reducers:
    {

        
        addTodo:(state,action) => {
            const newTodo={
                id:Date.now(),
                title:action.payload.title,
                description:action.payload.description,
                completed:false,
            }
            state.push(newTodo);
        },



        toggleComplete:(state,action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id,
            );
            state[index].completed = action.payload.completed;
        },



        deleteTodo: (state,action) => {
           return state.filter(todo => todo.id !== action.payload.id);
        }
    }
})




export const {addTodo,
    toggleComplete,
     deleteTodo,
} = taskSlice.actions;




export default taskSlice.reducer;