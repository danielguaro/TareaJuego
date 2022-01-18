import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const BotonInicio = ({ onStartGame }) => {
	return (
		<TouchableOpacity style={styles.Container} onPress={() => onStartGame()}>
			<Text style={styles.textButton}>Iniciar Juego</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	Container: {
		backgroundColor: '#B762C1',
		borderRadius: 50,
		padding: 26,
		marginTop: 16,
		borderWidth: 2,
		borderColor: '#ccc',
		elevation: 12,
	},
	textButton: {
		fontWeight: 'bold',
		color: '#FFFCDC',
		fontSize: 20,
	},
});

export default BotonInicio;
