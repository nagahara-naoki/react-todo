import React, { useState } from 'react';

import Form from './Form';
import List from './List';

export default function Todo() {
  const todoList = [
    { id: 1, content: 'aaaaa' },
    { id: 2, content: 'bbbb' },
    { id: 3, content: 'cccccc' },
  ];
  const a = 's';
  const [todos, setTodos] = useState(todoList);
  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };
  const createTodo = (todo) => setTodos([...todos, todo]);
  return (
    <div>
      <List a={a} todos={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo} />
    </div>
  );
}
