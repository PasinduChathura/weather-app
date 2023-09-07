import axios from 'axios';

export async function getWeatherData(cityCodes: String) {
  try {
    console.log(
      '🚀 ~ file: WeatherService.ts:11 ~ getWeatherData ~ options:',
      process.env.REACT_APP_BASE_URL
    );

    const options = {
      method: 'GET',
      url: `${process.env.REACT_APP_BASE_URL}/data/2.5/group`,
      params: {
        id: cityCodes,
        units: 'metric',
        appid: process.env.REACT_APP_API_KEY,
      },
    };
    const response = await axios.request(options);
    if (response.status === 200) {
      return response.data;
    } else {
    }
  } catch (error) {}
}
