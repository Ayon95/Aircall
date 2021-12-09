import React from 'react';
import styled from 'styled-components';
import stylesConfig from '../../style/stylesConfig';
import PageTitle from './../generic/PageTitle';

function Contacts() {
	return (
		<ul>
			<PageTitle text="Contacts" />
			<Contact>John Doe</Contact>
			<Contact>Mary Smith</Contact>
			<Contact>Triss Merigold</Contact>
			<Contact>Mason Mount</Contact>
		</ul>
	);
}

export default Contacts;

const Contact = styled.li`
	padding: 1rem;
	border-bottom: 0.5px solid ${stylesConfig.colorLightGrey};
`;
