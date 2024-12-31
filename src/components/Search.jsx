import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "5343d93e9f9d4dbd95fce30d3723d763";

export default function Search({ foodData, setFoodData }) {
  // State Controlled Input
  const [query, setQuery] = useState("pizza");

  // 1st 2 Call back function 2nd dependency array
  useEffect(() => {
    async function fetchFood() {
      //   // String Literal Dynamic
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      // console.log(data.results)
      setFoodData(data.results);
      // }
      // try {
      //   const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      //   if (!res.ok) {
      //     throw new Error(`HTTP Error! Status: ${res.status}`);
      //   }
      //   const data = await res.json();
      //   setFoodData(data.results || []); // Default to an empty array if no results
      // } catch (error) {
      //   console.error("Failed to fetch food data:", error);
      //   setFoodData([]); // Fallback to empty data on error
      // }
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainers}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}

// Hooks - Regular function called from react components
