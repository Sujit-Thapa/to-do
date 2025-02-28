import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded shadow">
      <h1 className="text-xl font-bold mb-4">To-Do List</h1>
      <div className="flex gap-2">
        <input
          type="text"
          className="border p-2 flex-grow"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addTodo}>
          Add
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center p-2 border-b">
            <span
              className={`flex-grow cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => removeTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
