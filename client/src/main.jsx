import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import Mainpage from '../src/pages/mainpage/Mainpage.jsx'
import Contact from '../src/pages/contact/Contact.jsx'
import Services from '../src/pages/services/Services.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='error-display'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Mainpage />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/services',
        element: <Services />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
