import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({
    name: "",
    done: false,
  });
  function submitFunction(e) {
    e.preventDefault();
    console.log(todo, "check");
    setTodos([...todos, todo]);
    setTodo({
      name: "",
      done: false,
    });
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={(e) => submitFunction(e)}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            type="text"
            placeholder="Enter todo item..."
          ></input>
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
