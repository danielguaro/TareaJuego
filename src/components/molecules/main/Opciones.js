import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import React from 'react';

const { height, width } = Dimensions.get('window');

const piedra = require('../../../../assets/imgs/rock.png');
const papel = require('../../../../assets/imgs/paper.png');
const tijera = require('../../../../assets/imgs/scissor.png');

const Opciones = ({ setOptions, option, machineOption }) => {
	const seletImgMachine = () => {
		if (machineOption === 'piedra') {
			return piedra;
		}
		if (machineOption === 'papel') {
			return papel;
		}
		if (machineOption === 'tijera') {
			return tijera;
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}> Escoge una opción</Text>
			<View style={styles.options}>
				<View style={styles.components}>
					<TouchableOpacity
						onPress={() => setOptions('piedra')}
						style={[
							{
								backgroundColor: option === 'piedra' ? '#ccc' : '#072227',
							},
							styles.contenedorRecipiente,
						]}
					>
						<Image source={piedra} style={styles.piedra} />
						<Text
							style={[
								styles.description,
								{ color: option === 'piedra' ? '#212121' : '#F7F6F2' },
							]}
						>
							Piedra
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.components}>
					<TouchableOpacity
						onPress={() => setOptions('papel')}
						style={[
							{
								backgroundColor: option === 'papel' ? '#ccc' : '#072227',
							},
							styles.contenedorRecipiente,
						]}
					>
						<Image source={papel} style={styles.papel} />
						<Text
							style={[
								styles.description,
								{ color: option === 'papel' ? '#212121' : '#F7F6F2' },
							]}
						>
							Papel
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.components}>
					<TouchableOpacity
						onPress={() => setOptions('tijera')}
						style={[
							{
								backgroundColor: option === 'tijera' ? '#ccc' : '#072227',
							},
							styles.contenedorRecipiente,
						]}
					>
						<Image source={tijera} style={styles.tijera} />
						<Text
							style={[
								styles.description,
								{ color: option === 'tijera' ? '#212121' : '#F7F6F2' },
							]}
						>
							Tijera
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.componentCPU}>
				<Text style={styles.descriptionMachine}>Computadora: </Text>
				<Image source={seletImgMachine()} style={styles.resultadoMachine} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: width * 0.98,
		height: height * 0.52,
		backgroundColor: '#072227',
		marginBottom: 5,
		// justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: '#1C2833',
		borderRadius: 10,
	},
	options: {
		flexDirection: 'row',
		marginTop: 30,
		height: height * 0.2,
	},
	components: {
		padding: '2%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	piedra: {
		width: width * 0.29,
		height: height * 0.15,
	},
	papel: {
		width: width * 0.27,
		height: height * 0.15,
	},
	tijera: {
		width: width * 0.27,
		height: height * 0.15,
	},
	description: {
		paddingTop: 12,
		paddingLeft: 35,
		fontSize: 16,
		fontWeight: 'bold',
		color: '#F7F6F2',
	},
	title: {
		fontSize: 24,
		color: '#F7F6F2',
		fontWeight: 'bold',
	},
	componentCPU: {
		flexDirection: 'row',
		width: width * 0.8,
		marginTop: '10%',
		padding: '2%',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	descriptionMachine: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#F7F6F2',
	},
	resultadoMachine: {
		width: width * 0.31,
		height: height * 0.16,
	},
	contenedorRecipiente: {
		borderRadius: 20,
	},
});

export default Opciones;
