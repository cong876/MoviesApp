
import React, {
	Component,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View
} from 'react-native';

// import getImageSource from './getImageSource';
// import getStyleFromSource from './getStyleFromSource';
// import getTextFromSource from './getTextFromSource';

export default class MovieScreen extends Component {
	render() {
		return (
			<ScrollView
			  contentContainerStyle={styles.contentContainer}>
			  <View style={styles.mainSection}>
			  	<Image
			  	  style={styles.detailsImage}
			  	  source={{uri: "http://ac-1uclckq2.clouddn.com/tmTct199TKLDu5GDKEfzjPyY1LfWq3rUWmPVRz4C.jpg"}} />
			  	<View style={styles.rightPane}>
			  		<Text style={styles.movieTitle}>Test movies</Text>
			  		<Text>Test years</Text>
			  		<View style={styles.mpaaWrapper}>
			  			<Text style={styles.mpaaText}>
			  				Test test
			  			</Text>
			  		</View>
			  	</View>
			  </View>
			  <View style={styles.separetor} />
			  <Text>
			  	Test test 2
			  </Text>
				<Ratings ratings={{critics_score: 76, audience_score: 75}} />
			  <View style={styles.separator} />
			</ScrollView>
		);
	}
}

class Ratings extends Component {
	render() {
		let criticsScore = this.props.ratings.critics_score;
		let audienceScore = this.props.ratings.audience_score;

		return (
			<View>
				<View style={styles.rating}>
					<Text style={styles.ratingTitle}>Critics:</Text>
					<Text>
						{audienceScore}
					</Text>
				</View>
				<View style={styles.rating}>
					<Text style={styles.ratingTitle}>Audience:</Text>
					<Text>
						{criticsScore}
					</Text>
				</View>
			</View>
		)
	}
}

class Cast extends Component {
	render() {
		if (!this.props.actors) {
			return null;
		}

		return (
			<View>
				<Text style={styles.castTitle}>Actors</Text>
				{this.props.actors.map(actor =>
					<Text key={actor.name} style={styles.castActor}>
						&bull; {actor.name}
					</Text>
				)}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	contentContainer: {
		padding: 10
	},
	rightPane: {
		justifyContent: 'space-between',
		flex: 1
	},
	movieTitle: {
		flex: 1,
		fontSize: 16,
		fontWeight: '500'
	},
	rating: {
		marginTop: 10
	},
	ratingTitle: {
		fontSize: 14
	},
	ratingValue: {
		fontSize: 28,
		fontWeight: '500'
	},
	mpaaWrapper: {
		alignSelf: 'flex-start',
		borderColor: 'black',
		borderWidth: 1,
		paddingHorizontal: 3,
		marginVertical: 5
	},
	mpaaText: {
		fontFamily: 'Palatino',
		fontSize: 13,
		fontWeight: '500'
	},
	mainSection: {
		flexDirection: 'row'
	},
	detailsImage: {
		width: 134,
		height: 200,
		backgroundColor: '#eaeaea',
		marginRight: 10
	},
	separator: {
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		height: StyleSheet.hairlineWidth,
		marginVertical: 10
	},
	castTitle: {
		fontWeight: '500',
		marginBottom: 3
	},
	castActor: {
		marginLeft: 2
	}
});


















