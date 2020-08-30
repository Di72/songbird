import React, { FC } from 'react';
import './EndGame.css';
import { connect } from 'react-redux';
import { actions } from '../../Redax/animsData';
import { EndGame } from './EndGame';
import { getScore } from '../../Selectors/selectors';
import { AppStateType } from '../../Redax/store';

export type PropsTypeEndGame = {
	endGame: () => void;
	score: number;
};

const EndGameContainer: FC<PropsTypeEndGame> = ({ endGame, score }) => {
	return <EndGame endGame={endGame} score={score} />;
};
const mapStateTopProps = (state: AppStateType) => {
	return { score: getScore(state) };
};

export default connect(mapStateTopProps, { endGame: actions.endGameAC })(EndGameContainer);
