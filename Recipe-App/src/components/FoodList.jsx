import FoodListItem from "./FoodListItem";
import styles from "./foodList.module.css";

export default function FoodList({ setFoodId, foodData }) {
  return (
    <div className={styles.itemContainer}>
      {foodData.map((food) => (
        <FoodListItem setFoodId={setFoodId} key={food.id} food={food} />
      ))}
    </div>
  );
}
