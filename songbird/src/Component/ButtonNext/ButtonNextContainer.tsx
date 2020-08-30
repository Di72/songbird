import React, { FC } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../Redax/animsData';
import { getdefaultanimName } from '../../Selectors/selectors';
import { AppStateType } from '../../Redax/store';
import { ButtonNext } from './ButtonNext';

export type PropsTypeButtonNext = {
	defaultanimName: string;
	nextRound: () => void;
};

const ButtonNextContainer: FC<PropsTypeButtonNext> = ({ defaultanimName, nextRound }) => {
	return <ButtonNext defaultanimName={defaultanimName} nextRound={nextRound} />;
};
let mapStateToProps = (state: AppStateType) => {
	return {
		defaultanimName: getdefaultanimName(state)
	};
};

export default connect(mapStateToProps, { nextRound: actions.nextRoundAC })(ButtonNextContainer);
