/* eslint-disable @typescript-eslint/no-unused-vars */


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Cart, Error, About, Checkout, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/cart',
    element: <Cart />
  },
]);

const App = () => {
  

  return (
    <RouterProvider router={router} />
  )
};
export default App;