import { Dimensions, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const { height, width } = Dimensions.get('window');

const Header = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.titleHeader}>Juego de Piedra, Papel o Tijera</Text>
			<Text style={styles.hands}>👊🖐✌</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: width * 0.98,
		height: height * 0.35,
		backgroundColor: '#160040',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: '#1C2833',
		borderRadius: 10,
		marginBottom: 5,
	},
	titleHeader: {
		color: '#ccc',
		fontSize: 26,
		fontFamily: 'Mochiy Pop P One',
		// fontFamily: 'Comfortaa',
	},
	hands: {
		fontSize: 28,
	},
});

export default Header;
