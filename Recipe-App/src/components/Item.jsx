import styles from "./item.module.css";
export default function ItemList({ item }) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <img
          className={item.image}
          src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image}
        ></img>
      </div>
      <div className={styles.nameContainer}>
        <div className={styles.name}>{item.name} </div>
        <div className={styles.amount}>
          {item.amount} {item.unit}{" "}
        </div>
      </div>
    </div>
  );
}
