import React from 'react';
import styled from 'styled-components';
import Button from '../generic/Button';
import PageTitle from '../generic/PageTitle';

function Voicemail() {
	return (
		<div>
			<PageTitle text="Voicemail" />
			<Section>
				<Button
					type="outlined"
					text="Call voicemail"
					handleClick={() => console.log('button clicked!')}
				/>
			</Section>
		</div>
	);
}

export default Voicemail;

const Section = styled.section`
	height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
