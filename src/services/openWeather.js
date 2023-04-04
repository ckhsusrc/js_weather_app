const appId = 'c395c714eb97a8a2c5f07d0dd4e99b7a';

// returns the geo-location (latitude + longitude) from an US Postal Zip Code
export async function geocodeByZipCode(zipCode, countryCode) {
    const url = 'http://api.openweathermap.org/geo/1.0/zip?zip=' + zipCode + ',' + countryCode + '&appid=' + appId;
    console.log(url);

    let result = null
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            result = await response.json();
            return result;
        }
    }
    catch(error) {
        console.log(error);
    }

    return result;
}

// returns the geo-location (latitude + longitude) from a city's name (US cities only)
export async function geocodesByCityName(cityName, limit=5) {
    const url = 'http://api.openweathermap.org/geo/1.0/direct?q="' + cityName + '"&limit=' + limit + '&appid=' + appId;
    console.log(url);

    let result = []
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            result = await response.json();
            return result;
        }
    }
    catch(error) {
        console.log(error);
    }

    return result;
}

// returns the weather forecast at the specified geo-location (latitude + longitude)
export async function weatherAt(latitude, longitude, temperatureUnit='imperial') {
    const url = 'https://api.openweathermap.org/data/2.5/weather?units=' + temperatureUnit + '&lat=' + latitude + '&lon=' + longitude + '&appid=' + appId;
    console.log(url);

    let result = null;
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            result = await response.json();
            return result;
        }
    }
    catch(error) {
        console.log(error);
    }

    return result;
}