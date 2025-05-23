import React, { createContext } from "react";

import { useContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id:1,
        todo:"first todo",
        completed: false
    }],
    addTodo: (todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext)
}