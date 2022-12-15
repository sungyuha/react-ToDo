import React, {useState} from 'react';
import './App.css';
import { DarkModeProvider } from './components/Context/DarkModeContext';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

// 고정 된 값의 필터
const filters = ['all', 'active', 'completed'];
const App = () => {
  // 현재 기본적으로 선택 된 filter
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
