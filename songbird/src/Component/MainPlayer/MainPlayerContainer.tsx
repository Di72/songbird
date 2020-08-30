import React, { FC } from 'react';
import { actions } from '../../Redax/animsData';
import { AppStateType } from '../../Redax/store';
import { getMainanim, getProfilePlayer } from '../../Selectors/selectors';
import { MainanimType } from '../../types/types';
import { MainPlayer } from './MainPlayer';
import { connect } from 'react-redux';

export type PropsMainPlayerType = {
	mainanim: MainanimType;
	profilePlayer: boolean;
	playerPlay: () => void;
};

const MainPlayerContainer: FC<PropsMainPlayerType> = ({ mainanim, profilePlayer, playerPlay }) => {
	return <MainPlayer mainanim={mainanim} profilePlayer={profilePlayer} playerPlay={playerPlay} />;
};

const mapStateToProps = (state: AppStateType) => {
	return {
		mainanim: getMainanim(state),
		profilePlayer: getProfilePlayer(state)
	};
};

export default connect(mapStateToProps, { playerPlay: actions.mainPlayerPlay })(MainPlayerContainer);
