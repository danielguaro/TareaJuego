import { Dimensions, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const { height, width } = Dimensions.get('window');

const Main = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.containerTitle}>¿Como jugar?</Text>
			<View style={styles.mainContainer}>
				<Text style={styles.mainContainerTitle}>Reglas: </Text>
				<View style={styles.rules}>
					<Text style={styles.info}>
						Escoge una de las opciones (piedra, papel o tijer)
					</Text>
					<Text style={styles.info}>
						* Piedra vence a tijera, pero pierde con papel
					</Text>
					<Text style={styles.info}>
						* Papel vence a piedra, pero pierde con tijera
					</Text>
					<Text style={styles.info}>
						* Tijera vence a papel, pero pierde con piedra
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: width * 0.98,
		height: height * 0.5,
		backgroundColor: '#2F5D62',
		marginBottom: 5,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: '#1C2833',
		borderRadius: 10,
	},
	containerTitle: {
		fontWeight: 'bold',
		fontSize: 22,
		color: '#ffffff',
		fontFamily: 'Comfortaa',
	},
	mainContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		height: height * 0.32,
	},
	mainContainerTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		paddingHorizontal: 5,
		color: '#FFFFFF',
	},
	rules: {
		flexDirection: 'column',
	},
	info: {
		color: '#ffffff',
		fontFamily: 'Mochiy Pop P One',
	},
});

export default Main;
