import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

import FooterPrincipal from '../components/molecules/footer/footerPrincipal';
import Header from '../../src/components/molecules/header/Header';
import Opciones from '../components/molecules/main/Opciones';

const PaginaPrincipal = ({ onStartGame }) => {
	const [userOption, setUserOption] = useState('');
	const [machineOption, setMachineOption] = useState('');
	const [winner, setWinner] = useState('');
	const generateOptionMachine = () => {
		const options = ['piedra', 'papel', 'tijera'];
		const randomOption = Math.floor(Math.random() * options.length);
		return setMachineOption(options[randomOption]);
	};
	useEffect(() => {
		if (userOption !== '') {
			checkWins();
		}
	}, [userOption]);
	const executeOptions = (option) => {
		setUserOption(option);
		generateOptionMachine();
	};
	const resetGame = () => {
		setUserOption('');
		setMachineOption('');
		setWinner('');
	};
	const exitGame = () => {
		resetGame();
		onStartGame();
	};
	const checkWins = () => {
		let message = '';
		if (userOption === machineOption) {
			message = 'Empate';
		}
		if (userOption === 'piedra' && machineOption === 'papel') {
			message = 'La computadora gana';
		}
		if (userOption === 'piedra' && machineOption === 'tijera') {
			message = 'El usuario gana';
		}
		if (userOption === 'papel' && machineOption === 'piedra') {
			message = 'El usuario gana';
		}
		if (userOption === 'papel' && machineOption === 'tijera') {
			message = 'La computadora gana';
		}
		if (userOption === 'tijera' && machineOption === 'papel') {
			message = 'El usuario gana';
		}
		if (userOption === 'tijera' && machineOption === 'piedra') {
			message = 'La computadora gana';
		}

		setWinner(message);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<Opciones
				setOptions={executeOptions}
				option={userOption}
				machineOption={machineOption}
			/>
			<FooterPrincipal
				exitGame={exitGame}
				resetGame={resetGame}
				winner={winner}
			/>
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
export default PaginaPrincipal;
