import { connect } from 'react-redux';
import React, { FC } from 'react';
import { getScore } from '../../Selectors/selectors';
import { AppStateType } from '../../Redax/store';
import { Header } from './Header';

export type MapStatePropsHeaderType = {
	score?: number;
};

const HeaderContainer: FC<MapStatePropsHeaderType> = ({ score }) => {
	return <Header score={score} />;
};

let mapStateToProps = (state: AppStateType) => {
	return {
		score: getScore(state)
	};
};

export default connect(mapStateToProps, null)(HeaderContainer);
