import { geocodeByZipCode, geocodesByCityName } from './openWeather'

test('geocodeByZipCode("95125", "us")', async () => {
    const result = await geocodeByZipCode('95125', 'us');
    expect(result).toEqual({zip: '95125', name: 'San Jose', lat: 37.296, lon: -121.8939, country: 'US'});
});

test('geocodeByZipCode("0000", "us")', async () => {
    const result = await geocodeByZipCode('0000', 'us');
    expect(result).toBe(null);
});

test('geocodesByCityName("San Jose", 1)', async () => {
    const result = await geocodesByCityName('San Jose', 1)
    expect(result.length).toBe(1);
    expect(result[0].lat).toBe(37.3361663);
    expect(result[0].lon).toBe(-121.890591);
});

test('geocodesByCityName("San Jose", 3)', async () => {
    const result = await geocodesByCityName('San Jose', 3)
    expect(result.length).toBe(3);
});

test('geocodesByCityName("San Jose")', async () => {
    const result = await geocodesByCityName('San Jose')
    expect(result.length).toBe(5);
});
