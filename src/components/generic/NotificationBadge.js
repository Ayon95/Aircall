import React from 'react';
import styled from 'styled-components';

function NotificationBadge({ content }) {
	return <Badge>{content}</Badge>;
}

export default NotificationBadge;

const Badge = styled.span`
	position: absolute;
	top: -2rem;
	right: -1.2rem;
	font-size: 1rem;
	font-weight: bold;
	color: #fff;
	background-color: crimson;
	width: 2.1rem;
	height: 2.1rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
