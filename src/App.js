import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/navigation/Navbar';
import GlobalStyles from './style/GlobalStyles';
import Header from './components/Header';
import Calls from './components/calls/Calls';
import stylesConfig from './style/stylesConfig';
import Contacts from './components/contacts/Contacts';
import Keypad from './components/keypad/Keypad';
import Voicemail from './components/voicemail/Voicemail';
import NotFound from './components/NotFound';

function App() {
	return (
		<Router>
			<GlobalStyles />
			<div className="App">
				<Container>
					<Header />
					<MainContent>
						<Routes>
							{/* for redirecting from '/' to '/calls/all' page which is basically the home page */}
							<Route path="/" element={<Navigate replace to="/calls/all" />} />
							<Route path="/calls/*" element={<Calls />} />
							<Route path="/contacts" element={<Contacts />} />
							<Route path="/keypad" element={<Keypad />} />
							<Route path="/voicemail" element={<Voicemail />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
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
