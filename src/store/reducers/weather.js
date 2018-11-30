import { createReducer } from '../../utils/factories/create-reducer';
import { WEATHER_FETCH_COMPLETE, WEATHER_FETCH_START, WEATHER_FETCH_ERROR } from '../../utils/constans/weather';

const init = {
  isLoading: true,
  data: [],
  current: null,
  error: null,
}

const handler = {
  [WEATHER_FETCH_START]: (state, action) => {
    return {error: null, data: [], current: null, isLoading: true};
  },
  [WEATHER_FETCH_COMPLETE]: (state, { payload }) => {
    return { error: null, current: payload.current, data: payload.data, isLoading: false};
  },
  [WEATHER_FETCH_ERROR]: (state, action) => {
    return { ...state, isLoading: false, error: action.payload };
  }
}

const weatherReducer = createReducer(init, handler);

export { weatherReducer };