import React, {useState} from 'react';
import {Button, View, TextInput} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import _ from 'lodash';
import styles from './style';
import * as asteroidActions from '../../redux/actions/asteroidActions';
import PropTypes from 'prop-types';
import {createStructuredSelector} from 'reselect';
import {getData} from '../../redux/selectors';

const AsteroidScreen = ({navigation, data}) => {
  const dispatch = useDispatch();
  const [asteroidId, setAsteroidId] = useState('');

  const handleSubmit = () => {
    dispatch(asteroidActions.getAsteroidData(asteroidId));
    navigation.navigate('AsteroidDetailScreen');
  };

  const handleRandomAsteroid = () => {
    dispatch(asteroidActions.getRandomAsteroidId());
    navigation.navigate('AsteroidDetailScreen');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(textInputValue) => setAsteroidId(textInputValue)}
        placeholder={'Enter Asteroid ID'}
        placeholderTextColor="#000"
      />
      <View style={styles.verticalMargin}>
        <Button
          title="Submit"
          style={styles.verticalMargin}
          disabled={_.isEmpty(asteroidId)}
          onPress={handleSubmit}
        />
      </View>
      <Button title="Random Asteroid" onPress={handleRandomAsteroid} />
    </View>
  );
};

AsteroidScreen.propTypes = {
  data: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  data: getData(),
});

export default connect(mapStateToProps)(AsteroidScreen);
