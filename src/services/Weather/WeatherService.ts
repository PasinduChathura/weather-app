import axios from 'axios';
import urlProperties from '../../utils/properties/UrlProperties';

const APP_ID = 'a71dcfc6bd1a038af3e60ca8e39a52cc';

export async function getWeatherData(cityCodes: String) {
  try {
    const options = {
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/group',
      params: { id: cityCodes, units: 'metric', appid: APP_ID },
    };
    const response = await axios.request(options);
    if (response.status === 200) {
      return response.data;
    } else {
    }
  } catch (error) {}
}
