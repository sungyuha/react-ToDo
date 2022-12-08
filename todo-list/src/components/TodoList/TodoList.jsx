import React, { useState, useEffect } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

const TodoList = ({filter}) => {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  // 새로운 투두를 todos에 업데이트
  const handleAdd = (todo) => setTodos([...todos, todo]);

  // 업데이트 시
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));

  // 삭제 시 
  const handleDelte = (deleted) => 
    setTodos(todos.filter((t) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

    const filtered = getFilteredItems(todos, filter);
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          // 콜백함수로 전달
          <Todo
            key={item.id}
            todo={item} 
            onupdate={handleUpdate} 
            onDelete={handleDelte} 
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </div>
  );
}

const readTodosFromLocalStorage = () => {
  console.log('readTodosFromLocalStorage');
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

const getFilteredItems = (todos, filter) => {
  if(filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

export default TodoList;