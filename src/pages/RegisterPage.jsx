import { Link } from 'react-router-dom';

const RegisterPage = () => {
	return (
		<div>
			<h1>RegisterPage</h1>
			<Link to="/login">Login Page</Link>
			{/* Must use a tag to create links to external sites */}
		</div>
	);
};
export default RegisterPage;
