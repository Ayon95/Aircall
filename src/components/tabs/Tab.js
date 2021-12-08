import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import stylesConfig from '../../style/stylesConfig';

function Tab({ tab }) {
	const location = useLocation();
	return (
		<li>
			<LinkComponent
				to={tab.path}
				// className={tab.path === location.hash ? 'active-tab' : ''}
				$isActive={tab.path === location.hash}
			>
				{tab.text}
			</LinkComponent>
		</li>
	);
}

export default Tab;

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
