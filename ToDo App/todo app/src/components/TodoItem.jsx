import styles from "./todolistitem.module.css";
export default function TodoItem({ item, todos, setTodos, done }) {
  function deleteTodo(item) {
    setTodos(todos.filter((todo) => todo.name !== item.name));
  }
  function completeTodo(item) {
    const newTodos = todos.map((todo) =>
      todo.name === item.name ? { ...todo, done: true } : todo
    );
    setTodos(newTodos);
  }

  return (
    <div className={styles.item}>
      <div className={styles.items}>
        <div className={styles.itemName}>{item.name}</div>
        {!done && (
          <span className={styles.buttonitems}>
            <button
              onClick={() => completeTodo(item)}
              className={styles.completebutton}
            >
              Complete
            </button>
            <button
              className={styles.deletebutton}
              onClick={() => deleteTodo(item)}
            >
              Delete
            </button>
          </span>
        )}
      </div>
      <hr className={styles.line} />
    </div>
  );
}
