import { useEffect, useState } from "react";

import styles from "./foodDetails.module.css";
import ItemList from "./ItemList";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "886aaf0caa334c31b663517604ee84f3";

  useEffect(() => {
    async function getFoodInformation() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    getFoodInformation();
  }, [foodId]);
  return (
    <div>
      {" "}
      {foodId && (
        <div className={styles.recipeCard}>
          {" "}
          <div>
            <h1 className={styles.recipeName}> {food.title}</h1>

            <img className={styles.recipeImage} src={food.image}></img>
            <div className={styles.recipeDetails}>
              <span>
                <strong>{food.readyInMinutes} minutes</strong>
              </span>
              <span>
                <strong>Serves {food.servings}</strong>
              </span>
              <strong>
                {food.vegetarian ? "Vegetarian" : "Non vegetarian"}
              </strong>{" "}
            </div>
            <div>
              <strong>₹ {food.pricePerServing} Per Serving</strong>
            </div>
          </div>
          <div>
            {!isLoading && (
              <div>
                <div>
                  <h2>Ingredients</h2>
                  <ItemList food={food}></ItemList>
                </div>
                <div>
                  <h2>Instructions</h2>
                  <div className={styles.recipeInstructions}>
                    <ol>
                      {food.analyzedInstructions[0].steps.map((step) => (
                        <li key={step.number}>{step.step} </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
