import axios from "axios";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handleChangeSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const searchData = () => {
    // www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
    // Nous devons utiliser cette route API en modifiant Arrabiata

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => setData(response.data.meals))
      .catch((error) => console.error(error));
  };

  console.log(data);

  return (
    <>
      <h1>Fetch</h1>

      <input
        onChange={handleChangeSearchInput}
        type="text"
        name=""
        id=""
        placeholder="Cherche une recette"
      />
      <button onClick={searchData}>RECHERCHER</button>
      <ul>
        {data === null
          ? "Aucun résultat"
          : data.map((plat) => <li key={plat.idMeal}>{plat.strMeal}</li>)}
      </ul>
    </>
  );
}

export default App;
