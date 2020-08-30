import React, { useRef, useEffect, FC } from 'react';
import style from './MainPlayer.module.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './MainPlayer.scss';
import { PropsMainPlayerType } from './MainPlayerContainer';

export const MainPlayer: FC<PropsMainPlayerType> = ({ mainanim, profilePlayer, playerPlay }) => {
	const myAudio = useRef<any>(null);

	const handlePause = () => {
		if (myAudio.current !== null) {
			myAudio.current.audio.current.pause();
		}
	};

	useEffect(
		() => {
			mainanim.name !== '******' && handlePause();
		},
		[ mainanim.name ]
	);
	useEffect(
		() => {
			profilePlayer && handlePause();
		},
		[ profilePlayer ]
	);

	return (
		<div className={style.mainP}>
			<img src={mainanim.image} alt="" />
			<div className={style.mainInfo}>
				<h1>{mainanim.name}</h1>
				<AudioPlayer
					ref={myAudio}
					onPlay={() => playerPlay()}
					showJumpControls={false}
					autoPlayAfterSrcChange={false}
					src={mainanim.audio}
				/>
			</div>
		</div>
	);
};
