import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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

const Hour = ({ info, detail }) => (
  <View style={styles.container}>
    <View style={styles.panel_left}>
      <Text style={styles.text}>{`${info.date} - ${info.time}`}</Text>
      <Text style={styles.text}>{`${info.description}`}</Text>
    </View>
    <View style={styles.panel_rigth}>
      <Image source={{ uri: `http://openweathermap.org/img/w/${info.icon}.png` }} style={styles.photo} />
    </View>
  </View>
);

export default Hour;