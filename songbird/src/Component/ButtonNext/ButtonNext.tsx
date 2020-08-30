import React, { FC } from 'react';import { Button } from '../../assets/Button';
import styled from 'styled-components';
import { PropsTypeButtonNext } from './ButtonNextContainer';

const GreenButton = styled(Button)`
background: #32b2fb;
border: 2px solid #32b2fb;
`

export const ButtonNext: FC<PropsTypeButtonNext> = ({defaultanimName, nextRound}) => {
	return <>
			{defaultanimName !== '******' ? (
				<GreenButton onClick={()=> nextRound()}>Next Level</GreenButton>
			) : (
				<Button>Next Level</Button>
			)}
		</>
};
