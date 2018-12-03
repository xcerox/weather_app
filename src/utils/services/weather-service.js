import axios from 'axios';
import { isNull } from 'lodash';

import { OPENWEATHERMAP_API } from '../constans/key.json';

let me = null;
class WeatherService {

  constructor() {
    if (isNull(me)) {
      me = this;

      me.city = 'Santo Domingo';
      me.url = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPENWEATHERMAP_API}&q=${me.city}`;
      me.getAll = me.getAll.bind(me);
    }

    return me;
  }

  getAll() {
    return axios.get(`${me.url}&units=imperial`);
  }
}

export default new WeatherService();