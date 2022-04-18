import { useState } from "react"

const useFetchedData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setDate] = useState(null);

  const pageCallback = (userInput) => {
    console.log(`From: useFetchedData - ${userInput}`);
  }

  return (
    {
      loading, 
      error, 
      data,
      pageCallback,
    }
  );
};

export {useFetchedData};