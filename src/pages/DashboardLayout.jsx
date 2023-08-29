import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, Navbar, SmallSidebar } from '../components/menus';
import { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

const DashboardLayout = () => {
	const user = { name: 'joey' };

	const [showSidebar, setShowSidebar] = useState(true);
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	function toggleDarkTheme() {
		setIsDarkTheme(!isDarkTheme);
	}

	function toggleSidebar() {
		console.log(!showSidebar);
		setShowSidebar(!showSidebar);
	}

	async function logoutUser() {
		console.log('logout');
	}
	return (
		<DashboardContext.Provider
			value={{
				user,
				showSidebar,
				isDarkTheme,
				toggleSidebar,
				toggleDarkTheme,
				logoutUser,
			}}>
			<Wrapper>
				<main className="dashboard">
					<SmallSidebar />
					<BigSidebar />
					<div>
						<Navbar />
						<div className="dashboard-page">
							<Outlet />
						</div>
					</div>
				</main>
			</Wrapper>
		</DashboardContext.Provider>
	);
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
