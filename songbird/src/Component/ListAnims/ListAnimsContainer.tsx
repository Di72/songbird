import React, { FC } from 'react';
import { actions } from '../../Redax/animsData';
import { connect } from 'react-redux';
import ListAnims from './ListAnims';
import { getProflanims, getanimsData, getMainanim } from '../../Selectors/selectors';
import { animsDataType, MainanimType } from '../../types/types';
import { AppStateType } from '../../Redax/store';

type MapDispatchPropsType = {
	animWin: (id: any) => void;
	animLose: (id: any) => void;
};
type MapStatePropsType = {
	proflanims: animsDataType;
	animsData: Array<animsDataType>;
	mainanim: MainanimType;
};

export type PropsTypeListanims = MapDispatchPropsType & MapStatePropsType;

const ListanimsContainer: FC<PropsTypeListanims> = ({ proflanims, animsData, mainanim, animWin, animLose }) => {
	return (
		<ListAnims
			proflanims={proflanims}
			animsData={animsData}
			mainanim={mainanim}
			animWin={animWin}
			animLose={animLose}
		/>
	);
};

const mapStateToProps = (state: AppStateType) => {
	return {
		proflanims: getProflanims(state),
		animsData: getanimsData(state),
		mainanim: getMainanim(state)
	};
};

export default connect(mapStateToProps, {
	animWin: actions.anim_WINCreator,
	animLose: actions.anim_LOSECreator
})(ListanimsContainer);
