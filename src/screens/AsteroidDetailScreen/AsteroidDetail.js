import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createStructuredSelector} from 'reselect';
import {getData} from '../../redux/selectors';
import styles from './style';

const AsteroidDetailScreen = ({data}) => {
  console.log('data', data);
  return (
    <View style={styles.container}>
      <View style={styles.itemRow}>
        <Text style={styles.textStyle}>Name</Text>
        <Text style={styles.textStyle}>{data.name}</Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.textStyle}>nasa_jpl_url</Text>
        <Text style={styles.textStyle}>{data.nasa_jpl_url}</Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.textStyle}>is_potentially_hazardous_asteroid</Text>
        <Text style={styles.textStyle}>
          {data.is_potentially_hazardous_asteroid}
        </Text>
      </View>
    </View>
  );
};

AsteroidDetailScreen.propTypes = {
  data: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  data: getData(),
});

export default connect(mapStateToProps)(AsteroidDetailScreen);
