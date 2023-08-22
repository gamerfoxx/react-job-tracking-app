import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';
//router used imported from npm i react-router-dom

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
	},
	{
		path: '/about',
		element: (
			<div>
				<h1>About</h1>
			</div>
		),
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
