// import styles from "./nav.module.css";
import Item from "./Item";

export default function ItemList({ food }) {
  return (
    <div>
      {food.extendedIngredients.map((item) => (
        <Item item={item}></Item>
      ))}
    </div>
  );
}
