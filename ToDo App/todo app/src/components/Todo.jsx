import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import styles from "./todo.module.css";
export default function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <div className={styles.texts}>
        <h2 className={styles.text}>ToDos</h2>
      </div>
      <TodoList done={false} todos={todos} setTodos={setTodos} />
      <h2 className={styles.text}>Completed ToDos</h2>
      <TodoList done={true} todos={todos} setTodos={setTodos} />
    </div>
  );
}
