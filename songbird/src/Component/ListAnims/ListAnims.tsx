/* eslint-disable react/style-prop-object */
import React, { useState, useEffect, FC } from 'react';
import useSound from 'use-sound';
import { Div } from '../../assets/Div';
import './ListAnims.css';
import { animsDataType, MainanimType } from '../../types/types';
const LoseSound = require('../../assets/audio/3c546e64f6e8e27.mp3');
const WinSound = require('../../assets/audio/vylet-2.mp3');

type MapDispatchPropsType = {
	animWin: (id: any) => typeof id;
	animLose: (id: any) => typeof id;
};
type MapStatePropsType = {
	proflanims: animsDataType;
	animsData: Array<animsDataType>;
	mainanim: MainanimType;
};

export type PropsTypeListanims = MapDispatchPropsType & MapStatePropsType;

const ListAnims: FC<PropsTypeListanims> = ({ proflanims, animsData, mainanim, animWin, animLose }) => {
	const [ colorWin, setColorWin ] = useState(false);
	const [ colorLose, setColorLose ] = useState([]);
	const [ playLose ] = useSound(LoseSound);
	const [ playWin ] = useSound(WinSound);

	useEffect(
		() => {
			if (proflanims.id === undefined) {
				setColorLose([]);
				setColorWin(false);
			}
		},
		[ proflanims ]
	);

	const LoseOnClick = (a: any) => {
		playLose();
		setColorLose(a);
	};
	const WinOnClick = () => {
		playWin();
		setColorWin(true);
	};

	return (
		<Div>
			<ul>
				{Object.values(animsData).map(
					(p) =>
						mainanim.audio === p.audio ? (
							<button
								className={p.id === 1 ? 'buttonTop' : p.id === 6 ? 'buttonBottom' : 'buttonDefault'}
								key={p.id}
								onClick={() => {
									animWin(p.id) && mainanim.name !== '******' ? setColorWin(true) : WinOnClick();
								}}
							>
								<span className={!colorWin ? 'buttonRound' : 'buttonRoundWin'} />
								{p.name}
							</button>
						) : (
							<button
								className={p.id === 1 ? 'buttonTop' : p.id === 6 ? 'buttonBottom' : 'buttonDefault'}
								key={p.id}
								onClick={
									mainanim.name === '******' ? (
										() => {
											animLose(p.id) && LoseOnClick([ ...colorLose, p.id ]);
										}
									) : (
										() => animLose(p.id)
									)
								}
							>
								<span
									className={!colorLose.some((id) => id === p.id) ? 'buttonRound' : 'buttonRoundLose'}
								/>
								{p.name}
							</button>
						)
				)}
			</ul>
		</Div>
	);
};

export default ListAnims;
