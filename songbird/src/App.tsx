import React, { FC } from 'react';
import Header from './Component/Header/HeaderContainer';
import ButtonNext from './Component/ButtonNext/ButtonNextContainer';
import Navbar from './Component/Navbar/NavbarContainer';
import ProfileAnims from './Component/ProfileAnims/ProfileAnimsContainer';
import MainPlayer from './Component/MainPlayer/MainPlayerContainer';
import ListAnims from './Component/ListAnims/ListAnimsContainer';
import AppWrapper from './assets/App';
import EndGame from './Component/EndGame/EndGameContainer';
import { connect } from 'react-redux';
import { AppStateType } from './Redax/store';
import { getEnd } from './Selectors/selectors';
import './assets/fonts/fonts.css'

type MapStatePropsType = {
	end?: boolean
}

const App: FC<MapStatePropsType>=({end})=>{
	return (
		<AppWrapper>
		{end? <> <Header /> <EndGame /> </> : 
		<><Header /> <MainPlayer /> <Navbar /> <ListAnims /> <ProfileAnims /> <ButtonNext /> </>}
		</AppWrapper>
	);
}
const mapStateToProps = (state: AppStateType)=>{
	return { end: getEnd(state)}
}

export default connect(mapStateToProps, null)(App)
