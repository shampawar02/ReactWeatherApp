import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ setWeather }) {
    const API_KEY = "API_KEY";
    const [city, setCity] = useState("");

    const getWeatherInfo = async (e) => {
        e.preventDefault();

        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        let data = await response.json();

        if (data.main) {
            setWeather(data);
        } else {
            alert("City not found!");
        }
    };

    return (
        <div>
            <form onSubmit={getWeatherInfo}>
            <TextField
                label="City Name"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <br /><br />
            <Button type="submit" variant="contained">
                Search
            </Button>
        </form>
        </div>
        
    );
}
