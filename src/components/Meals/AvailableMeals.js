import MealItem from "../MealItem/MealItem";

// working with hard coded dummy data. Later we can fetch it from a database
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((x) => {
    return (
      <MealItem
        key={x.id}
        id={x.id}
        name={x.name}
        price={x.price}
        description={x.description}
      />
    );
  });

  return (
    <ul className="flex flex-col gap-y-6 mx-auto  bg-white border-2 rounded-lg shadow-xl w-2/3 p-8">
      {mealsList}
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
