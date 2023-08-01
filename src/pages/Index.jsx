import React, { useContext } from "react";
import RequestApi from "../api/RequestApi";
import AppContext from "../context/AppContext";
import { FaDroplet, FaWind } from "react-icons/fa6";

const Main = () => {
  const { handleSearch, weatherForecast, loading, error } = RequestApi();
  const { city, setCity, api } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchDate = async () => {
      const { response } = await handleSearch(api);
      console.log(response);
      setCity("")
    };
    fetchDate();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={({ target }) => setCity(target.value)}
          required
        />
        <button>Enter</button>
      </form>
      {error && <p>Não</p>}
      {loading && <p>Carregando...</p>}
      {weatherForecast === undefined && !loading && <p>City not found</p>}
      {weatherForecast ? (
        <ul>
          <li>
            <p>{weatherForecast.name}</p>
          </li>
          <li>
            <p>{weatherForecast.main.temp}</p>
          </li>
          <li>
            <p>{weatherForecast.weather[0].description}</p>
          </li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${weatherForecast.weather[0].icon}.png`}
              alt=""
            />
          </li>
          <li>
            <FaDroplet />
            <p>{weatherForecast.main.humidity}%</p>
          </li>
          <li>
            <FaWind />
            <p>{weatherForecast.wind.speed}km/h</p>
          </li>
        </ul>
      ) : null}
    </section>
  );
};

export default Main;
