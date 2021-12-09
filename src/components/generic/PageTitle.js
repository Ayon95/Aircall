import React from 'react';
import styled from 'styled-components';
import stylesConfig from './../../style/stylesConfig';

function PageTitle({ text }) {
	return <Title>{text}</Title>;
}

export default PageTitle;

const Title = styled.h2`
	text-align: center;
	color: ${stylesConfig.colorPrimary};
	margin-bottom: 1rem;
`;
