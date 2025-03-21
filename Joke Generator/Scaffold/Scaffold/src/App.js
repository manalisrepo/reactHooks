import { useEffect } from "react";
import "./styles.css";
// import the custom hook to use in this document
import useFetch from "./useFetch";
export default function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
  // Use the custom hook here
  const { data, loading, error, getJoke } = useFetch(url);
  useEffect(() => {
    getJoke();
  }, [url]);
  // Display loading text here
  if (loading) {
    return <h3>Loading...</h3>;
  }
  // Display something went wrong here
  if (error) {
    return <h3>Something went wrong!</h3>;
  }

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      {/* Do not modify the below code */}
      <h2>{data.joke}</h2>
      <button className="btn" onClick={getJoke}>
        New Joke
      </button>
    </div>
  );
}
