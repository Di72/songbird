import React, { FC } from 'react';
import style from './Navbar.module.css';
import { MapStatePropsNavbarType } from './NavbarContainer';

export const Navbar: FC<MapStatePropsNavbarType> = ({ numberRound }) => {
	return (
		<ul className={style.nav}>
			<li className={numberRound === 1 ? style.iconCurrent : style.iconDefault}>
				<a href="/#">Adventures</a>{' '}
			</li>
			<li className={numberRound === 2 ? style.iconCurrent : style.iconDefault}>
				<a href="/#">Shonen</a>{' '}
			</li>
			<li className={numberRound === 3 ? style.iconCurrent : style.iconDefault}>
				<a href="/#">Comedy</a>{' '}
			</li>
			<li className={numberRound === 4 ? style.iconCurrent : style.iconDefault}>
				<a href="/#">Romance</a>{' '}
			</li>
			<li className={numberRound === 5 ? style.iconCurrent : style.iconDefault}>
				<a href="/#">Horror</a>{' '}
			</li>
			<li className={numberRound === 6 ? style.iconCurrent : style.iconDefault}>
				<a href="/#">Ecchi</a>{' '}
			</li>
		</ul>
	);
};
