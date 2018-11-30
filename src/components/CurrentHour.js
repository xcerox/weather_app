import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { connect } from 'react-redux';

const style = StyleSheet.create({
  container_parent: {
    backgroundColor: '#99B898',
    height: 100,
    padding: 7,
    flexDirection: 'row'
  },
  panel_left: {
    width: '70%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  panel_rigth: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image_weather: {
    width: 60, 
    height: 60
  }
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
          {<Text>{`Today at : ${current.info.time}`}</Text>}
          {<Text>{current.info.description}</Text>}
        </View>
        <View style={style.panel_rigth}>
          {<Image source={{uri: `http://openweathermap.org/img/w/${current.info.icon}.png`}} style={style.image_weather}/>}
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