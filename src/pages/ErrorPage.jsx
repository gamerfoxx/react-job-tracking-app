import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();
	console.log(error);
	return (
		<div>
			<h1>ErrorPage</h1>
			<p>
				<b>{error.status}</b> {error.data}
			</p>
			<Link to="/">Home</Link>
		</div>
	);
};
export default ErrorPage;
