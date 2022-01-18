import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import BotonInicio from '../../src/components/atoms/botonInicio';
import Header from '../../src/components/molecules/header/Header';
import Main from '../../src/components/molecules/main/main';

const PaginaInicio = ({ onStartGame }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<Main />
			<BotonInicio onStartGame={() => onStartGame()} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#D6E5FA',
	},
});
export default PaginaInicio;
