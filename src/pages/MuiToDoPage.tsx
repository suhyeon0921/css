import React, { useState } from 'react';
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';
import LottieFile from '../components/LottieFile';
import styled from 'styled-components';

export default function MuiToDoPage() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const addTodo = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (input !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (index: number): void => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <span>ToDo List</span>
      <form onSubmit={addTodo}>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
      {todos.map((todo, index) => (
        <>
          <span>{todo}</span>
          <button onClick={() => deleteTodo(index)}>
            <DeleteIcon />
          </button>
        </>
      ))}
    </>
  );
}
