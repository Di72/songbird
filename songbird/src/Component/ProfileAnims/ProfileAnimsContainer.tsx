import React, { FC } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../Redax/animsData';
import { ProfileAnims } from './ProfileAnims';
import { AppStateType } from '../../Redax/store';
import { getMainPlayer, getProflanims } from '../../Selectors/selectors';
import { animsDataType } from '../../types/types';

export type PropsTypeProfileanims = {
	mainPlayer: boolean;
	proflanims: animsDataType;
	playerPlay: () => void;
};

const ProfileAnimsContainer: FC<PropsTypeProfileanims> = ({ mainPlayer, proflanims, playerPlay }) => {
	return <ProfileAnims mainPlayer={mainPlayer} proflanims={proflanims} playerPlay={playerPlay} />;
};
let mapStateToProps = (state: AppStateType) => {
	return {
		proflanims: getProflanims(state),
		mainPlayer: getMainPlayer(state)
	};
};

export default connect(mapStateToProps, { playerPlay: actions.profilePlayerPlay })(ProfileAnimsContainer);
