import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { useSelector } from "react-redux";
export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todosReducer);
    return (
        <div>
        <h2>Todo List</h2>
        <ul className="list-group">
    <TodoForm />
        {todos.map((qwe: any) => (
    <TodoItem 
    key ={qwe.id} 
    todo={qwe} 
    />
        ))}
        </ul>
        <hr /></div>
        );
    }

