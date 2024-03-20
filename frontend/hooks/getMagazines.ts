import { useState } from "react";

export const getMagazinesHook = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);


  const getMagazines = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch("http://localhost:8000/api/magazines/", {
        method: "GET",
        headers: new Headers({ "Content-type": "application/json" }),
      });
      const magazines = await response.json();
      setData(magazines);
    } catch (error) {
      console.error(error);
      setData([]);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    getMagazines,
    magazines: data,
    isLoading: isLoading,
    isError: isError
  }

}