import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

const App = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <h1>Coffees: {coffees.length}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default App;
