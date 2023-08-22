import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
	HomeLayout,
	LandingPage,
	RegisterPage,
	LoginPage,
	DashboardLayout,
	ErrorPage,
} from './pages';
//router used imported from npm i react-router-dom

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		children: [
			{
				path: '/register',
				element: <RegisterPage />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/dashboard',
				element: <DashboardLayout />,
			},
		],
	},
	{
		path: '/landing',
		element: <LandingPage />,
	},

	{
		path: '/error',
		element: <ErrorPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
