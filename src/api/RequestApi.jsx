import React, { useCallback, useState } from "react";

const RequestApi = () => {
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = useCallback(async (url) => {
    let response;
    let dateJson;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url);
      if (response.status === 404) {
        return <p>Ola</p>;
      }
      dateJson = await response.json();
    } catch (erro) {
      dateJson = null;
      setError(true);
    } finally {
      setLoading(false);
      setWeatherForecast(dateJson);
      return { response };
    }
  }, []);
  return {
    handleSearch,
    weatherForecast,
    loading,
    error,
  };
};

export default RequestApi;
