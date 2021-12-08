import React from 'react';
import { BsFillTelephoneFill, BsPersonCircle } from 'react-icons/bs';
import { FaVoicemail } from 'react-icons/fa';
import { IoIosKeypad } from 'react-icons/io';
import styled from 'styled-components';
import stylesConfig from '../../style/stylesConfig';
import NavLink from './NavLink';

const links = [
	{
		text: 'Calls',
		icon: BsFillTelephoneFill,
		path: '/calls',
	},

	{
		text: 'Contacts',
		icon: BsPersonCircle,
		path: '/contacts',
	},

	{
		text: 'Keypad',
		icon: IoIosKeypad,
		path: '/keypad',
	},

	{
		text: 'Voicemail',
		icon: FaVoicemail,
		path: '/voicemail',
	},
];

function Navbar() {
	return (
		<Nav>
			<Links>
				{links.map(link => (
					<NavLink key={link.text} link={link} />
				))}
			</Links>
		</Nav>
	);
}

export default Navbar;

const Nav = styled.nav`
	padding: ${stylesConfig.basePadding};
	background-color: ${stylesConfig.colorLightGrey};
`;

const Links = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-between;
`;
