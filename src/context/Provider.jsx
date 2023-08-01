import React, { useState } from "react";
import AppContext from "./AppContext";
const Provider = ({ children }) => {
  const [city, setCity] = useState("");
  const apiKey = "81a0ffb54c92ca4ddebd298974e779a2";
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const value = {
    city,
    setCity,
    api,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default Provider;
