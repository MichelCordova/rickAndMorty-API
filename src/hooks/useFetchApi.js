// hooks/useFetchApi.js
import axios from "axios";
import { useState } from "react";

export default function useFetchApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchingData = async (url) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(url);
      setData(data);
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
      setError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, fetchingData, loading, error };
}
