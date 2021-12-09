import React from 'react';
import styled, { css } from 'styled-components';
import stylesConfig from './../../style/stylesConfig';

function Button({ type, text, handleClick }) {
	return type === 'filled' ? (
		<FilledButton onClick={handleClick}>{text}</FilledButton>
	) : (
		<OutlinedButton onClick={handleClick}>{text}</OutlinedButton>
	);
}

export default Button;
const commonStyles = css`
	border-radius: 5px;
	padding: 1rem 2rem;
	font-size: 1.6rem;
	cursor: pointer;
	transition: transform 0.3s;

	&:hover {
		transform: scale(1.1) translateY(-1px);
	}
`;
const FilledButton = styled.button`
	border: none;
	background-color: ${stylesConfig.colorPrimary};
	color: #fff;
	${commonStyles}
`;
const OutlinedButton = styled.button`
	border: 2px solid ${stylesConfig.colorPrimary};
	color: ${stylesConfig.colorPrimary};
	${commonStyles}
`;
