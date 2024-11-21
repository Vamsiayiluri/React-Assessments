import styles from "./foodListItem.module.css";

export default function FoodListItem({ setFoodId, food }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image}></img>
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setFoodId(food.id);
          }}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
