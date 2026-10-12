
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function InfoBox({ info }) {
    return (
        <div className="InfoCard">
        <Card sx={{ maxWidth: 500, margin: "30px auto" }}>
            
            <CardContent>
                <h2>{info.name}</h2>

                <p>Temperature = {info.main.temp}°C</p>
                <p>Humidity = {info.main.humidity}</p>
                <p>Min Temp = {info.main.temp_min}°C</p>
                <p>Max Temp = {info.main.temp_max}°C</p>

                <p>
                    The weather can be described as{" "}
                    <i>{info.weather[0].description}</i>
                </p>

                <p>Feels like {info.main.feels_like}°C</p>
            </CardContent>
            
        </Card>
        </div>
    );
}
