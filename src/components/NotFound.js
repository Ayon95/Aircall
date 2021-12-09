import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';
import Button from './generic/Button';
import PageTitle from './generic/PageTitle';

function NotFound() {
	const navigate = useNavigate();
	return (
		<Container>
			<Content>
				<PageTitle text="404 Error" />
				<p>Page not found</p>
				<Button type="filled" text="Go Back" handleClick={() => navigate('/calls/all')} />
			</Content>
		</Container>
	);
}

export default NotFound;

const center = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	height: 50vh;
	${center}
`;
const Content = styled.section`
	${center}
	flex-direction: column;
	p {
		margin-bottom: 2rem;
	}
`;
