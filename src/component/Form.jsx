import React, { useState } from 'react';

export default function Form({ createTodo }) {
  const [enterTodo, setEnterTodo] = useState('');
  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enterTodo,
    };
    console.log(newTodo, '新しいTODOアイテム');
    createTodo(newTodo);
    setEnterTodo('');
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input value={enterTodo} type="text" onChange={(e) => setEnterTodo(e.target.value)} />
      </form>
    </div>
  );
}
