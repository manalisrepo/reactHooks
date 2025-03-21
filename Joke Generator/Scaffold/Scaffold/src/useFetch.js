import { useState } from "react";
// Complete the following hook
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error occured`);
      }
      const json = await response.json();
      if (json.error) {
        throw new Error(`Error API returned an error in response body`);
      }
      setData(json);
      setError(null);
    } catch (e) {
      setError(e);
      setData(null);
    } finally {
      setLoading(false);
    }
  };
  //It should return data returned from fetch, loading, error and getJoke
  return { data, loading, error, getJoke };
};
// export the useFetch hook as a default export
export default useFetch;
