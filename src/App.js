import { useState } from 'react';
import { geocodeByZipCode, geocodesByCityName, weatherAt } from './services/openWeather';
import { CurrentWeather } from './components/weatherForecast';
import './App.css';

function App() {
  // these values can be moved to a configuration file to accommadate different countries and regions
  const zipCodeCountry = 'us';
  const temperatureUnit = 'imperial'

  const [queryTerm, setQueryTerm] = useState('');
  const [forecasts, setForecasts] = useState([])
  
  function handleQueryTermChange(e) {
    setQueryTerm(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // convert search term into geocodes (latitude + longitude)
    let geocodes = await geocodesByCityName(queryTerm);
    if (geocodes.length === 0) {
      const gc = await geocodeByZipCode(queryTerm, zipCodeCountry);
      if (gc != null) {
        geocodes.push(gc);
      }  
    }

    // then get current weather forecast at each location
    const weatherForecasts = []
    for (let i = 0; i < geocodes.length; i++) {
      const city = geocodes[i];
      const forecast = await weatherAt(city.lat, city.lon, temperatureUnit)
      weatherForecasts.push({ city, forecast });
    }
    setForecasts(weatherForecasts);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
          <label>Weather in your city </label>
        <input
          value={queryTerm}
          onChange={handleQueryTermChange}
        />
        <button type="submit">Search</button>
        <CurrentWeather
          locations={forecasts}
        />
      </form>      
    </div>
  );
}

export default App;
