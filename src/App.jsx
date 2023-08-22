import { RouterProvider, createBrowserRouter } from 'react-router-dom';
//router used imported from npm i react-router-dom

const router = createBrowserRouter([
	{
		path: '/',
		element: <h1>Home</h1>,
	},
	{
		path: '/about',
		element: <h1>About</h1>,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
