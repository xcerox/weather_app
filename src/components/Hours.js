import React, { PureComponent } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

import Hour from './Hour';

const styles = StyleSheet.create({
  container_list: {
    width: '100%',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

class Hours extends PureComponent {

  render() {
    const { data } = this.props;
    return (
      <View style={styles.container_list} >
        <FlatList
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
    data: weather.data
  }
}

export default connect(mapStateToProps)(Hours);
