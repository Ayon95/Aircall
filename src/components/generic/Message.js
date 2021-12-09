import React from 'react';
import styled from 'styled-components';
import stylesConfig from '../../style/stylesConfig';

function Message({ type, text }) {
	return <Paragraph $type={type}>{text}</Paragraph>;
}

export default Message;

const Paragraph = styled.p`
	font-size: 2rem;
	color: ${props => (props.$type === 'error' ? 'crimson' : stylesConfig.colorMediumGrey)};
	text-align: center;
`;
