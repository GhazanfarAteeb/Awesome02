import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards(count) {
	return (
		<View>
			<Text style={styles.headingText}>Flat Cards</Text>
			<View style={styles.container}>
				<View style={[styles.card, styles.cardOne]}>
					<Text>Red</Text>
				</View>
				<View style={[styles.card, styles.cardTwo]}>
					<Text>Green</Text>
				</View>
				<View style={[styles.card, styles.cardThree]}>
					<Text>Blue</Text>
				</View>
				<View style={[styles.card, styles.cardOne]}>
					<Text>Redddd</Text>
				</View>
				<View style={[styles.card, styles.cardTwo]}>
					<Text>Greeen</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	headingText: {
		fontSize: 24,
		color: "#000000",
		fontWeight: 'bold',
		paddingHorizontal: 8
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		padding: 8,
	},
	card: {
		width: 100,
		height: 100,
		borderRadius: 4,
		margin: 6
	},
	cardOne: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#EF5354'
	},
	cardTwo: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#50DBB4'
	},
	cardThree: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#5DA3FA'
	}
})