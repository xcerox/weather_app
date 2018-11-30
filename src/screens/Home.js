import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import CurrentHour from '../components/CurrentHour';
import Hours from '../components/Hours';
import Loading from '../components/Loading';

import { weatherFetch } from '../store/actions/weather';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
});

class Home extends PureComponent {

  static navigationOptions = {
    title: 'Weather',
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTitleStyle: {
      fontWeight: 'bold'
    },
  }

  componentDidMount() {
    this.props.weatherFetch();
  }

  render() {
    const { isLoading, error } = this.props.weather;
    return (
      <View style={styles.container}>
        <Loading isLoading={isLoading} />
        <CurrentHour />
        <Hours />
      </View>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps, { weatherFetch })(Home);