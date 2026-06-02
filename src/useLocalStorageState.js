import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key){
    const [value, setValue] = useState(function () {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : initialState;
  });
  
    useEffect(
      function () {
        localStorage.setItem("watched", JSON.stringify(value));
      },
      [value, key],
    );

    return [value, setValue]
}