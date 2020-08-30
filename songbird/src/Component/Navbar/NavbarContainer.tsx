import React, { FC } from 'react';
import { connect } from 'react-redux';
import { getNumberRound } from '../../Selectors/selectors';
import { AppStateType } from '../../Redax/store';
import { Navbar } from './Navbar';

export type MapStatePropsNavbarType = {
	numberRound?: number;
};

const NavbarContainer: FC<MapStatePropsNavbarType> = ({ numberRound }) => {
	return <Navbar numberRound={numberRound} />;
};

const mapStateToProps = (state: AppStateType) => {
	return { numberRound: getNumberRound(state) };
};

export default connect(mapStateToProps, null)(NavbarContainer);
