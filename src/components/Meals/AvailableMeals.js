import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import MealItem from "../MealItem/MealItem";

const AvailableMeals = () => {
  const { error, isLoading, sendRequest: fetchMeals } = useHttp(); 
  const [mealItemList, setMealItemList] = useState([]);

  useEffect(() => {
    const transformData = (data) => {
      let loadedMeals = [];
      for (const mealKey in data) {
        loadedMeals.push({
          id: mealKey,
          name: data[mealKey].name,
          description: data[mealKey].description,
          price: data[mealKey].price,
        });
      }
      setMealItemList(loadedMeals);
    };

    fetchMeals(
      {
        url: "https://react-udemy-movie-e7f18-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
      },
      transformData
    );
  }, [fetchMeals]);

  const mealsList = mealItemList.map((item) => {
    return (
      <MealItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <ul className="flex flex-col gap-y-6 mx-auto bg-white border-2 rounded-lg shadow-xl w-2/3 p-8">
      {isLoading && <p>Loading the Menu</p>}
      {error}
      {!isLoading && mealsList}
    </ul>
  );
};

export default AvailableMeals;

/*
  const mealsList = DUMMY_MEALS.map((x) => {
    return (
      <div className="flex flex-row justify-between">
        <div>
          <li>{x.name}</li>
          <li>{x.description}</li>
          <li>{x.price}</li>
        </div>
        <div>{x.price}</div>
      </div>
    );
  });
  */
