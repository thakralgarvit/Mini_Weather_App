import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./Searchbox.css";
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Searchbox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, seterror] = useState(false);

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&limit=1&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempmin: jsonResponse.main.temp_min,
        tempmax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      seterror(true);
    }
  };

  return (
    <div className="Searchbox">
      <h1>search for the weather</h1>
      <form onSubmit={handleSubmit} className="box-search">
        <TextField
          id="city"
          label="city name"
          variant="outlined"
          onChange={handleChange}
          required
        />
        <Button
          id="btn-search"
          variant="outlined"
          color="success"
          type="submit"
          sx={{
            backgroundColor: "white",
            border: "2px solid green",
            "&:hover": {
              backgroundColor: "#C2FFBD",
            },
          }}
          size="large"
        >
          Search
        </Button>
      </form>
        <div style={{color:"red"}}>{error && <p>NoSuch Place Exists</p>}</div>
    </div>
  );
}
