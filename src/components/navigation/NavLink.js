import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

function NavLink({ link }) {
	const { text, path, icon: Icon } = link;
	const location = useLocation();
	return (
		<ListItem>
			<LinkComponent
				to={path}
				className={location.pathname.includes(text.toLowerCase()) ? 'active-link' : ''}
			>
				<Icon />
				<p>{text}</p>
			</LinkComponent>
		</ListItem>
	);
}

export default NavLink;

const ListItem = styled.li``;
const LinkComponent = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		font-size: 1.3rem;
	}

	svg {
		font-size: 2.2rem;
		margin-bottom: 3px;
	}
`;
