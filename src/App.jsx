import axios from "axios";
import { useState } from "react";

function App() {
  const [coffee, setCoffee] = useState([]);

  const fetchData = () => {
    axios
      .get("https://random-data-api.com/api/coffee/random_coffee")
      .then((response) => setCoffee(response.data))
      .catch((error) => console.error(error));
  };

  console.info(coffee);

  return (
    <>
      <h1>Fetch</h1>
      <button onClick={fetchData}>Fetch DATA</button>
    </>
  );
}

export default App;
