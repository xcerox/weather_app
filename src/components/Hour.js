import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  parent_container: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    width: "100%",
  },
  panel_left: {
    width: "80%",
  },
  panel_rigth: {
    width: "20%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const Detail = ({detail, isHide = false}) => {

  if (isHide) {
    return null;
  }

  return (
    <Text>Hola</Text>
  );

}


const Hour = ({ info, detail }) => (
  <View style={styles.parent_container}>
    <View style={styles.container}>
      <View style={styles.panel_left}>
        <Text style={styles.text}>{`${info.date} - ${info.time}`}</Text>
        <Text style={styles.text}>{`${info.description}`}</Text>
      </View>
      <View style={styles.panel_rigth}>
        <Image source={{ uri: `http://openweathermap.org/img/w/${info.icon}.png` }} style={styles.photo} />
      </View>
    </View>
    <View style={styles.container}>
      <Detail info={detail}/>
    </View>
  </View>
);

export default Hour;