import React, { useContext } from "react";
import RequestApi from "../api/RequestApi";
import AppContext from "../context/AppContext";
import {
  FaDroplet,
  FaWind,
  FaMagnifyingGlass,
  FaLocationDot,
} from "react-icons/fa6";

import "./Index.scss";
import Loading from "../components/Loading";

const Main = () => {
  const { handleSearch, weatherForecast, loading, error } = RequestApi();
  const { city, setCity, api } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchDate = async () => {
      const { response } = await handleSearch(api);
      console.log(response);
      setCity("");
    };
    fetchDate();
  };

  return (
    <section>
      <h1>Check the weather of the city: </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={({ target }) => setCity(target.value)}
          required
        />
        <button>
          <FaMagnifyingGlass />
        </button>
      </form>
      {error && alert("Error")}
      {loading && <Loading />}
      {weatherForecast === undefined && !loading && <p className="notfoud">City not found :( </p>}
      {weatherForecast ? (
        <ul>
          <li>
            <FaLocationDot />
            <p>{weatherForecast.name}</p>
          </li>
          <li>
            <p>{weatherForecast.main.temp} ºC</p>
          </li>
          <li>
            <p>{weatherForecast.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${weatherForecast.weather[0].icon}.png`}
              alt=""
            />
          </li>
          <li>
            <FaDroplet />
            <p>{weatherForecast.main.humidity} %</p>
          </li>
          <li>
            <FaWind />
            <p>{weatherForecast.wind.speed} km/h</p>
          </li>
        </ul>
      ) : null}
    </section>
  );
};

export default Main;
