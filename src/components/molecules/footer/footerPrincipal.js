import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import React from 'react';

const { height, width } = Dimensions.get('window');

const FooterPrincipal = ({ exitGame, resetGame, winner }) => {
	return (
		<View>
			<View style={styles.resultado}>
				<Text style={styles.textUno}>Resultado:</Text>
				<Text style={styles.textDos}> {winner}</Text>
			</View>
			<View style={styles.opciones}>
				<TouchableOpacity style={styles.again} onPress={() => resetGame()}>
					<Text style={styles.textButton}>Jugar de nuevo</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.inicio} onPress={() => exitGame()}>
					<Text style={styles.textButton}>Volver a inicio</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	resultado: {
		width: width * 0.98,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: height * 0.05,
		backgroundColor: '#66806A',
		borderWidth: 2,
		borderColor: '#ccc',
		elevation: 12,
		borderRadius: 10,
	},
	opciones: {
		flexDirection: 'row',
		width: width * 0.98,
		justifyContent: 'space-between',
	},
	textUno: {
		fontSize: 16,
		color: '#212121',
		fontWeight: 'bold',
	},
	textDos: {
		fontSize: 19,
		color: '#7900FF',
		fontWeight: 'bold',
	},
	again: {
		backgroundColor: '#064635',
		borderRadius: 20,
		padding: 26,
		borderWidth: 2,
		borderColor: '#ccc',
		elevation: 12,
	},
	inicio: {
		backgroundColor: '#9B0000',
		borderRadius: 20,
		padding: 26,
		borderWidth: 2,
		borderColor: '#ccc',
		elevation: 12,
	},
	textButton: {
		fontWeight: 'bold',
		color: '#FFFCDC',
		fontSize: 16,
	},
});

export default FooterPrincipal;
