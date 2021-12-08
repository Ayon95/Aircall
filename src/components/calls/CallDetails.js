import React from 'react';
import { BsFillTelephoneInboundFill, BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { MdArchive, MdUnarchive } from 'react-icons/md';
import styled, { css } from 'styled-components';
import stylesConfig from '../../style/stylesConfig';

function CallDetails({ call }) {
	return (
		<ListItem>
			<CallDate>
				{new Date(call.created_at).toLocaleDateString('en-us', {
					month: 'long',
					day: 'numeric',
					year: 'numeric',
				})}
			</CallDate>
			<Direction>
				{call.direction === 'inbound' ? (
					<BsFillTelephoneInboundFill style={{ color: 'crimson' }} />
				) : (
					<BsFillTelephoneOutboundFill style={{ color: 'forestgreen' }} />
				)}
			</Direction>
			<div>
				<Caller>{call.from}</Caller>
				<Callee>
					To <span>{call.to}</span>
				</Callee>
			</div>
			<Time>12:34 PM</Time>
			<ArchiveStatusButton type="button" title={call.isArchived ? 'Unarchive' : 'Archive'}>
				{call.isArchived ? <MdUnarchive /> : <MdArchive />}
			</ArchiveStatusButton>
		</ListItem>
	);
}

export default CallDetails;

const smallLightText = css`
	font-size: 1.1rem;
	color: ${stylesConfig.colorMediumGrey};
`;

const ListItem = styled.li`
	display: grid;
	grid-template-columns: max-content 1fr max-content max-content;
	row-gap: 1rem;
	column-gap: 1.5rem;

	&:not(:last-child) {
		margin-bottom: ${stylesConfig.baseMargin};
	}
`;

const CallDate = styled.p`
	grid-column: 1/-1;
	justify-self: center;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	${smallLightText}
`;

const Direction = styled.div`
	align-self: center;
`;

const Caller = styled.p`
	font-weight: bold;
`;

const Callee = styled.p`
	${smallLightText}

	span {
		font-size: 1.3rem;
		font-weight: bold;
	}
`;

const Time = styled.p`
	${smallLightText}
	align-self: center;
`;

const ArchiveStatusButton = styled.button`
	border: none;
	font-size: 2rem;
	color: ${stylesConfig.colorDarkGrey};
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: color 0.3s;

	&:hover {
		color: ${stylesConfig.colorPrimary};
	}
`;
