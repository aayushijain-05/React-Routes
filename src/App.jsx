import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import {Contact} from './components/Pages/Contact';
import { About } from './components/Pages/About';
import { Consignee } from './components/Pages/Consignee';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path:'about',
    element:<About/>
  },
  {
    path:'consignee',
    element:<Consignee/>
  },
  
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}