import React from 'react';
import styled from 'styled-components';
import stylesConfig from '../../style/stylesConfig';
import Tab from './Tab';

function Tabs({ tabs, archivedCallsCount }) {
	return (
		<Container>
			<ul>
				{tabs.map(tab => {
					if (tab.text.toLowerCase().includes('archived')) {
						return <Tab key={tab.text} tab={tab} archivedCallsCount={archivedCallsCount} />;
					}
					return <Tab key={tab.text} tab={tab} />;
				})}
			</ul>
		</Container>
	);
}

export default Tabs;

const Container = styled.nav`
	ul {
		margin-bottom: ${stylesConfig.baseMargin};
		display: flex;
		justify-content: space-between;
	}
`;
