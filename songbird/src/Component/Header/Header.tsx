import React, { FC } from 'react';
import style from './Header.module.css';
import { MapStatePropsHeaderType } from './HeaderContainer';
const Logo = require('../../assets/img/logo.png');

export const Header: FC<MapStatePropsHeaderType> = ({ score }) => {
	return (
		<div className={style.Header}>
			<img src={Logo} alt="" />
			<span>Score: {score}</span>
		</div>
	);
};
