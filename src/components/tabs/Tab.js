import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import stylesConfig from '../../style/stylesConfig';
import NotificationBadge from '../generic/NotificationBadge';

function Tab({ tab, archivedCallsCount }) {
	const location = useLocation();
	return (
		<ListItem>
			{archivedCallsCount > 0 && <NotificationBadge content={archivedCallsCount} />}
			<LinkComponent to={tab.path} $isActive={location.pathname === `${tab.basePath}/${tab.path}`}>
				{tab.text}
			</LinkComponent>
		</ListItem>
	);
}

export default Tab;

const ListItem = styled.li`
	position: relative;
`;

const LinkComponent = styled(NavLink)`
	padding-bottom: 1rem;
	position: relative;
	color: ${props => props.$isActive && stylesConfig.colorPrimary};
	font-weight: ${props => props.$isActive && 'bold'};

	&::before {
		content: '';
		position: absolute;
		top: 2.8rem;
		width: 100%;
		height: 4px;
		border-radius: 1rem;
		background-color: ${stylesConfig.colorPrimary};
		transform: ${props => (props.$isActive ? 'scaleX(1)' : 'scaleX(0)')};
		transition: transform 0.3s;
		transform-origin: left;
	}

	&:hover {
		color: ${stylesConfig.colorPrimary};
	}

	&:hover::before {
		transform: scaleX(1);
	}
`;
