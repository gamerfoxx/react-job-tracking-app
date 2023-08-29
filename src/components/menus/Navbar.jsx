import Wrapper from '../../assets/wrappers/Navbar';
import { FaAlignLeft } from 'react-icons/fa';
import { Logo } from '../../components';
import { useDashboardContext } from '../../pages/DashboardLayout';
import LogoutContainer from '../LogoutContainer';

function Navbar() {
	const { toggleSidebar } = useDashboardContext();
	return (
		<Wrapper>
			<div className="nav-center">
				<button
					type="button"
					className="toggle-btn"
					onClick={toggleSidebar}>
					<FaAlignLeft />
				</button>
				<div>
					<Logo />
					<h4 className="logo-text">text</h4>
				</div>
				<div className="btn-container">
					<LogoutContainer />
				</div>
			</div>
		</Wrapper>
	);
}

export default Navbar;
