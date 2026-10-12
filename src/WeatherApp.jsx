import "./WeatherApp.css";
import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    const [weather, setWeather] = useState(null);

    return (
        <div>
            <h1>Weather App by Sham</h1>
            <div className="search-container">
                <SearchBox setWeather={setWeather} />
            </div>
            {weather && <InfoBox info={weather} />}
        </div>
    );
}
