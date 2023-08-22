import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
	return (
		<div>
			<nav>Navbar</nav>
			<Outlet />
			{/* Outlet used to dynamically display child pages through navigation */}
		</div>
	);
};
export default HomeLayout;
