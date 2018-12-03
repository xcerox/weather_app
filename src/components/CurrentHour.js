import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import { toCapitalize } from '../utils/functions/text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const style = StyleSheet.create({
  container_parent: {
    backgroundColor: '#26c6da',
    height: "30%",
    padding: 7,
    flexDirection: 'row',
    borderBottomWidth: 5,
    borderColor: '#0095a8',
  },
  panel_left: {
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  panel_rigth: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image_weather: {
    width: "50%",
    height: "50%",
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  description: {
    color: 'white',
    fontSize: 20,
  },
  detail: {
    flexDirection: 'row',
  },
  detailText: {
    paddingLeft: 6,
  },
});

class CurrentHour extends PureComponent {


  render() {

    const { current, isLoading } = this.props;

    if (isLoading) {
      return null;
    }

    return (
      <View style={style.container_parent} >
        <View style={style.panel_left}>
          <Text style={style.title}>Santo Domingo</Text>
          <View style={style.detail} >
            <Icon name='thermometer' size={20} color='white' />
            <Text style={style.detailText}>{`${current.detail.temp}˚ F`}</Text>
          </View>
          <View style={style.detail}>
            <Icon name='water-percent' size={20} color='white' />
            <Text style={style.detailText}>{`${current.detail.humidity}%`}</Text>
          </View>
          <View style={style.detail}>
            <Icon name='weather-windy' size={20} color='white' />
            <Text style={style.detailText}>{`${current.detail.wind} m/h`}</Text>
          </View>
          <View style={style.detail}>
            <Icon name='weather-cloudy' size={20} color='white' />
            <Text style={style.detailText}>{`${current.detail.cloud}%`}</Text>
          </View>
          <View style={style.detail}>
            <Icon name='weather-rainy' size={20} color='white' />
            <Text style={style.detailText}>{`${current.detail.raing}`}</Text>
          </View>
        </View>
        <View style={style.panel_rigth}>
          <Image source={{ uri: `http://openweathermap.org/img/w/${current.info.icon}.png` }} style={style.image_weather} />
          <Text style={style.description}>{toCapitalize(current.info.description)}</Text>
        </View>
      </View>
    )
  }
}

function mapStateToProps({ weather }) {
  return {
    current: weather.current,
    isLoading: weather.isLoading
  }
}


export default connect(mapStateToProps)(CurrentHour);