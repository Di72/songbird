import { AppStateType } from './../Redax/store';

export const getdefaultanimName = (state: AppStateType) => {
	return state.mainanim.name;
};
export const getProflanims = (state: AppStateType) => {
	return state.proflanims;
};
export const getanimsData = (state: AppStateType) => {
	return state.animsData;
};
export const getMainanim = (state: AppStateType) => {
	return state.mainanim;
};
export const getScore = (state: AppStateType) => {
	return state.gameScoreOpen;
};
export const getEnd = (state: AppStateType) => {
	return state.end;
};
export const getNumberRound = (state: AppStateType) => {
	return state.numberRound;
};
export const getProfilePlayer = (state: AppStateType) => {
	return state.profilePlayer;
};
export const getMainPlayer = (state: AppStateType) => {
	return state.mainPlayer;
};
