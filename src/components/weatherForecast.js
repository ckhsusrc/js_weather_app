export function WeatherAt({location}) {
  console.log('location', location)
  return (
    <tr >
      <td>
        <img src={"http://openweathermap.org/images/flags/" + location.city.country.toLowerCase() + ".png"} />
        <b>{location.city.name}, {location.city.hasOwnProperty('state')? location.city.state + ', ': ''} {location.city.country}</b>
        <b><i>{location.forecast.weather[0].descriptionn}</i></b>
        <p>Temperature <span>{location.forecast.main.temp}° </span> (ranging from {location.forecast.main.temp_min}° to {location.forecast.main.temp_min}°), feels like {location.forecast.main.feels_like}°</p>
        <p>Geo coords [{location.city.lat}, {location.city.lon}]</p>
      </td>
    </tr>      
  )
}

export function CurrentWeather({locations}) {
  return (
    <div>
      <table>
        <tbody>
          {locations.map((loc, i) => <WeatherAt location={loc} key={i}/>)}
        </tbody>
      </table>
    </div>
  );
}
