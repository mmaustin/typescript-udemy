
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Cart, Error, About, Checkout, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from './pages';
import { ErrorElement } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />
      },
      {
        path: 'cart',
        element: <Cart />,
        errorElement: <ErrorElement />
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorElement />
      },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <ErrorElement />
      },
      {
        path: 'orders',
        element: <Orders />,
        errorElement: <ErrorElement />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />
  },
]);

const App = () => {
  

  return (
    <RouterProvider router={router} />
  )
};
export default App;