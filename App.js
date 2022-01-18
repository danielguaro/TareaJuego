import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import PaginaInicio from './src/screens/inicio';
import PaginaPrincipal from './src/screens/paginaPrincipal';

const App = () => {
	const [startGame, setStartGame] = useState(false);

	const handlerStartGame = () => {
		setStartGame(
			!startGame
		); /* Recordar que el !, hace negación (si tiene un estado true, lo pasa a false*/
	};

	if (startGame) {
		return <PaginaPrincipal onStartGame={handlerStartGame} />;
	} else {
		return <PaginaInicio onStartGame={handlerStartGame} />;
	}
};

export default App;
