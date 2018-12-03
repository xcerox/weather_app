import React, { PureComponent } from 'react';
import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { connect } from 'react-redux';

import Hour from './Hour';
import { weatherFetch } from '../store/actions/weather';

const styles = StyleSheet.create({
  container_list: {
    width: '100%',
    height: '70%',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

class Hours extends PureComponent {

  render() {
    const { data, weatherFetch, isLoading } = this.props;

    if (isLoading) {
      return null;
    }

    return (
      <View style={styles.container_list} >
        <FlatList
          refreshControl={<RefreshControl refreshing={isLoading} onRefresh={weatherFetch()} />}
          data={data}
          renderItem={({item}) => <Hour {...item}/>}
          ItemSeparatorComponent={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
      </View>
    )
  }
};

function mapStateToProps({ weather }) {
  return {
    data: weather.data,
    isLoading: weather.isLoading
  }
}

export default connect(mapStateToProps, {weatherFetch})(Hours);
