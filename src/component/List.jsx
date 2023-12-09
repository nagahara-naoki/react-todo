import React from 'react';

export default function List({ todos, deleteTodo, a }) {
  return (
    <div>
      {a}
      {todos.id}
      {todos.map((todo) => (
        <div>
          <button onClick={() => deleteTodo(todo.id)}>完了</button>
          <span>{todo.content}</span>
        </div>
      ))}
    </div>
  );
}
