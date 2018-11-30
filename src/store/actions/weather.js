import { WEATHER_FETCH_COMPLETE, WEATHER_FETCH_START, WEATHER_FETCH_ERROR } from '../../utils/constans/weather';
import { createAction, createActionThunk } from '../../utils/factories/create-action';
import WeatherService from '../../utils/services/weather-service';
import { reduceWeather } from '../../utils/functions/reduce-weather';


const weatherFetchStart = createAction(WEATHER_FETCH_START);
const weatherFetchComplete = createAction(WEATHER_FETCH_COMPLETE, 'payload');
const weatherFetchError = createAction(WEATHER_FETCH_ERROR, 'payload');

const weatherFetch = createActionThunk((args, dispatch) => {
  dispatch(weatherFetchStart);

  WeatherService
    .getAll()
    .then(data => {
      dispatch(weatherFetchComplete(reduceWeather(data)));
    })
    .catch(err => {
      dispatch(weatherFetchError(err));
    });
});


export { weatherFetch };