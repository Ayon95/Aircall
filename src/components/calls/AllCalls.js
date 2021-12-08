import React from 'react';
import styled from 'styled-components';
import stylesConfig from '../../style/stylesConfig';
import CallDetails from './CallDetails';

function AllCalls({ calls }) {
	return (
		<List>
			{calls.map(call => (
				<CallDetails key={call.id} call={call} />
			))}
		</List>
	);
}

export default AllCalls;

const List = styled.ul`
	padding-right: 1rem;
	overflow-y: scroll;
	height: 53vh;

	/* scrollbar styles that will work on Firefox */
	scrollbar-width: thin;

	/* scrollbar styles that will work on Chrome, Edge, and Safari */
	&::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-track {
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${stylesConfig.colorLightGrey};
		border-radius: 10rem;
	}
`;
