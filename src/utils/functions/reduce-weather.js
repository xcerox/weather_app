import { orderBy } from 'lodash';

const splitDateTxt = (date_tx) => {
  return date_tx.split(" ").reduce((date, time) => {
     return {date:getDayName(date), time};
  });
}

function getDayName(dateStr)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'long' });        
}

const reduceWeather = ({data}) => {

  let weatherFy = data.list.map((item) => {
    const datetime = splitDateTxt(item.dt_txt);
    return {
      detail: {
        temp: item.main.temp,
        pressure: item.main.pressure,
        humidity: item.main.humidity,
        wind: item.wind.speed,
        cloud: item.clouds.all,
        raing: item.rain["3h"],
      },
      info: {
        description: item.weather[0].description,
        icon: item.weather[0].icon,
        date: datetime.date,
        time: datetime.time,
      },
      key: `${item.dt}`,
    }
  });

  weatherFy = orderBy(weatherFy, ['data.date', 'data.time'], ['asc']);
  return {
    current: weatherFy.shift(),
    data: weatherFy
  }
}

export { reduceWeather };