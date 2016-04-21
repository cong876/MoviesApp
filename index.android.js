/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  BackAndroid,
  Navigator,
  ToolbarAndroid,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import SearchScreen from './SearchScreen';
import MovieScreen from './MovieScreen';

let _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length() > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

class MoviesApp extends Component {

  RouteMapper(route, navigationOperations, onComponentRef) {
    _navigator = navigationOperations;
    if (route.name === 'search') {
      return (
        <SearchScreen navigator={navigationOperations} />
      );
    } else if (route.name == 'movie') {
      return (
        <View style={{flex: 1}}
          onBack={() => {console.log(123)}}>
          <ToolbarAndroid
            actions={[]}
            navIcon={require('./image/android_back_white.png')}
            onIconClicked={navigationOperations.pop}
            style={styles.toolbar}
            titleColor="white"
            title={'test'}
          />
          <MovieScreen
            style={{flex: 1}}
            navigator={navigationOperations}
            movie={route.movie}
          />
        </View>
      )
    }
  }

  render() {
    let initialRoute = {name: 'search'};
    return (
      <View style={styles.container}>
        <Navigator
          ref='nav'
          style={styles.container}
          initialRoute={initialRoute}
          configureScene={() => Navigator.SceneConfigs.FadeAndroid}
          renderScene={this.RouteMapper}
        />
        <View style={styles.bottomTabBar}>
          <TouchableOpacity style={{backgroundColor: 'blue', width: 187.5}} onPress={() => {this.refs.nav.replace({name: 'search'})}}>
            <Text>to search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'red', width: 187.5}} onPress={() => {this.refs.nav.replace({name: 'movie'})}}>
            <Text>to movie</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    backgroundColor: '#a9a9a9',
    height: 56
  },
  bottomTabBar: {
    flexDirection: 'row',
  }
});

AppRegistry.registerComponent('MoviesApp', () => MoviesApp);
