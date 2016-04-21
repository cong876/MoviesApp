
import React, {
	Component,
	ActivityIndicatorIOS,
	ListView,
	Platform,
	ProgressBarAndroid,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} from 'react-native';

// import invariant from 'fbjs/lib/invariant';
// import dismissKeyboard from 'dismissKeyboard';

// import MovieCell from './MovieCell';
// import MovieScreen from './MovieScreen';
// import SearchBar from './SearchBar';


export default class SearchScreen extends Component {

	constructor(prps) {
		super(prps);
		this.state = {};
	}

	_pressButton() {
		const { navigator } = this.props;
		navigator.push({name: 'movie'});
	}

	render() {
		return (
			<View>
				<Text>This is search screen</Text>
				<TouchableHighlight
					onPress={this._pressButton.bind(this)}>
					<Text>GO GO GO!</Text>
				</TouchableHighlight>
			</View>
		)
	}
}













