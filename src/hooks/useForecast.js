import { useState } from "react"

const useForecast = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setDate] = useState(null);

  return (
    {
      loading, 
      error, 
      data,
    }
  );
};

export default useForecast;