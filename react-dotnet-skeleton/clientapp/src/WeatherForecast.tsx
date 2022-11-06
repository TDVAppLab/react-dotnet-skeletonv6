import { useEffect, useState } from 'react';
import api from './api';

interface Forecast {
  date: Date;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

export const WeatherForecast = () => {
    
    
    const [loading, setLoading] = useState(true);
    const [forecasts, setForecast] = useState<Forecast[]>();
  
    useEffect(() => {
        populateWeatherData();
    }, []);
  
    const populateWeatherData = async () => {

        const data = await api.WeatherForecast.index();
        
        setForecast(data);
        setLoading(false);
    };
    
    if(loading) return <div>loading....</div>

    return (
        <div>
            <h1 id="tabelLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            <table className="table table-striped" aria-labelledby="tabelLabel">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
                </thead>
                <tbody>
                {forecasts && forecasts.map((forecast) => (
                    <tr key={forecast.date.toString()}>
                    <td>{forecast.date.toString()}</td>
                    <td>{forecast.temperatureC}</td>
                    <td>{forecast.temperatureF}</td>
                    <td>{forecast.summary}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}