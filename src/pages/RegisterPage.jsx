import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo } from '../components';

const RegisterPage = () => {
	return (
		<Wrapper>
			<form className="form">
				<Logo />
				<div className="form-row">
					<h4> Register</h4>
					<label
						htmlFor="userName"
						className="form-label">
						Name
					</label>
					<input
						type="text"
						id="userName"
						name="userName"
						className="form-input"
						defaultValue="Joey"
						required
					/>
				</div>
				<button
					type="submit"
					className="btn btn-block">
					Submit
				</button>
				<p>
					Already a user?{' '}
					<Link
						to="/login"
						className="member-btn">
						Login
					</Link>
					{/* Must use a tag to create links to external sites */}
				</p>
			</form>
		</Wrapper>
	);
};
export default RegisterPage;
