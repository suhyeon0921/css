import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';
import LottieFile from '../components/LottieFile';

export default function StyledToDoPage() {
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
          onChange={(event: {
            target: { value: React.SetStateAction<string> };
          }) => setInput(event.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
      {todos.map((todo, index) => (
        <>
          <p>{todo}</p>
          <button onClick={() => deleteTodo(index)}>
            <DeleteIcon />
          </button>
        </>
      ))}
    </>
  );
}
