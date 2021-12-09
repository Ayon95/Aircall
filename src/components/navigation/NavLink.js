import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import stylesConfig from '../../style/stylesConfig';

function NavLink({ link }) {
	const { text, path, icon: Icon } = link;
	const location = useLocation();
	return (
		<li>
			<LinkComponent
				to={path}
				className={location.pathname.includes(text.toLowerCase()) ? 'active-link' : ''}
			>
				<Icon />
				<p>{text}</p>
			</LinkComponent>
		</li>
	);
}

export default NavLink;

const LinkComponent = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: color 0.3s, transform 0.3s;

	&:hover {
		color: ${stylesConfig.colorPrimary};
		transform: scale(1.1);
	}

	p {
		font-size: 1.3rem;
	}

	svg {
		font-size: 2.2rem;
		margin-bottom: 3px;
	}
`;
