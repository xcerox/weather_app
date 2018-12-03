import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  parent_container: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    width: "100%",
  },
  panel_left: {
    width: "15%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  panel_rigth: {
    width: "85%",
  },
  panel_info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '35%',
    paddingTop: '1%',
  },
  text: {
    fontSize: 16,
  },
  photo: {
    height: "60%",
    width: "60%",
    borderRadius: 20,
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const Detail = ({ info }) => {

  return (
    <View style={styles.detail}>
      <View>
        <Icon name='thermometer' size={20} color='#26c6da'/>
        <Text>{`${info.temp}˚F`}</Text>
      </View>
      <View>
        <Icon name='water-percent' size={20} color='#26c6da'/>
        <Text>{`${info.humidity}%`}</Text>
      </View>
      <View>
        <Icon name='weather-windy' size={20} color='#26c6da'/>
        <Text>{`${info.wind}m/h`}</Text>
      </View>
      <View>
        <Icon name='weather-cloudy' size={20} color='#26c6da'/>
        <Text>{`${info.cloud}%`}</Text>
      </View>
      <View>
        <Icon name='weather-rainy' size={20} color='#26c6da'/>
        <Text>{`${info.raing}`}</Text>
      </View>
    </View>
    
  );

}

class Hour extends PureComponent {

  state = {
    isHide: true,
  }

  onTouchHour = () => {
    this.setState((prevState) => {
      return { isHide: !prevState.isHide }
    });
  }

  render() {
    const { info, detail } = this.props;
    const { isHide } = this.state;

    return (
      <TouchableOpacity onPress={this.onTouchHour}>
        <View style={styles.parent_container}>
          <View style={styles.container}>
            <View style={styles.panel_left}>
              <Image source={{ uri: `http://openweathermap.org/img/w/${info.icon}.png` }} style={styles.photo} />
            </View>
            <View style={styles.panel_rigth}>
              <View style={styles.panel_info}>
                <Text style={styles.text}>{info.date}</Text>
                <Text style={styles.text}>{info.time}</Text>
              </View>
            </View>
          </View>
          {!isHide &&
            <View style={styles.container}>
              <Detail info={detail} />
            </View>
          }
        </View>
      </TouchableOpacity>
    );
  }
}

export default Hour;