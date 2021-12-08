import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/navigation/Navbar';
import GlobalStyles from './style/GlobalStyles';
import Header from './components/Header';
import Calls from './components/calls/Calls';
import stylesConfig from './style/stylesConfig';

function App() {
	return (
		<Router>
			<GlobalStyles />
			<div className="App">
				<Container>
					<Header />
					<MainContent>
						<Calls />
					</MainContent>
					<Navbar />
				</Container>
			</div>
		</Router>
	);
}

export default App;

const Container = styled.div`
	width: 100%;
	height: 100%;
	max-width: 38rem;
	margin: 0 auto;
	background-color: #fff;
	border-radius: 5px;

	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

const MainContent = styled.main`
	flex-grow: 1;
	padding: ${stylesConfig.basePadding};
`;
