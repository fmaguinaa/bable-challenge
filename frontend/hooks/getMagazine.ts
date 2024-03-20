import { Magazine } from "@/types";
import { useState } from "react";

export const getMagazineHook = (id: string | string[] |undefined) => {
  const [data, setData] = useState<Magazine | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);


  const getMagazine = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(`http://localhost:8000/api/magazines/${id}`, {
        method: "GET",
        headers: new Headers({ "Content-type": "application/json" }),
      });
      const magazine = await response.json();
      setData(magazine);
    } catch (error) {
      console.error(error);
      setData(undefined);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    getMagazine,
    magazine: data,
    isLoading: isLoading,
    isError: isError
  }

}