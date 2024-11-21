import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";
export default function TodoList({ todos, setTodos, done }) {
  return (
    <div className={styles.list}>
      {todos.map((item) =>
        item.done === done ? (
          <TodoItem done={done} item={item} todos={todos} setTodos={setTodos} />
        ) : null
      )}
    </div>
  );
}
