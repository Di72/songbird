import React, { FC } from 'react';
import './EndGame.css';
import { PropsTypeEndGame } from './EndGameContainer';

export const EndGame: FC<PropsTypeEndGame> = ({ endGame, score }) => {
	return (
		<div className="reborn">
			<h1>Поздравляем!</h1>
			{score === 30 ? (<>
				<h2>Вы прошли викторину и набрали МАКСИМАЛЬНОЕ количество баллов, {score} из 30 возможных</h2>
				<img src="https://github.com/Di72/img/blob/master/image/63d0b791c8bb9c473e822b380d153c8d.gif?raw=true" alt=""/>
				</>
			) : (
				<h2>Вы прошли викторину и набрали {score} из 30 возможных баллов</h2>
			)}
			<button onClick={() => endGame()}>Попробовать ещё раз!</button>
		</div>
	);
};
