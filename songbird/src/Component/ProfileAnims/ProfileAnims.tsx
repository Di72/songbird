import React, { useRef, useEffect, FC } from 'react';
import style from './ProfileAnims.module.css';
import AudioPlayer from 'react-h5-audio-player';
import { PropsTypeProfileanims } from './ProfileAnimsContainer';

export const ProfileAnims: FC<PropsTypeProfileanims> = ({ mainPlayer, proflanims, playerPlay }) => {
	const myAudio = useRef<any>(null);

	const handlePause = () => {
		if (myAudio.current !== null) {
			myAudio.current.audio.current.pause();
		}
	};

	useEffect(
		() => {
			mainPlayer && handlePause();
		},
		[ mainPlayer ]
	);

	return (
		<div className={style.prof}>
			{proflanims.id === undefined ? (
				<div className={style.defaultProf}>Прослушайте плеер. Выберите опенинг из списка.</div>
			) : (
				<div>
					<div className={style.animInfo}>
						<img src={proflanims.image} alt="" />
						<div className={style.animInfoText}>
							<h1 className={style.animName}>{proflanims.name}</h1>
							<h1 className={style.animSpecies}>{proflanims.species}</h1>
						</div>
					</div>
					<AudioPlayer
						ref={myAudio}
						onPlay={() => playerPlay()}
						showJumpControls={false}
						autoPlayAfterSrcChange={false}
						src={proflanims.audio}
					/>

					<div className={style.animBio}>{proflanims.description}</div>
				</div>
			)}
		</div>
	);
};
