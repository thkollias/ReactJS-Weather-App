import { useState } from "react"

const useData = () => {
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

export {useData};