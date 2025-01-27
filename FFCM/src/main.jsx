import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from '@layout/accueil.jsx';
import Documents from '@layout/documents.jsx';
import Actualites from '@layout/actualites.jsx';
import Annonceurs from '@layout/annonceurs.jsx';
import Adherer from '@layout/adherer.jsx';
import Login from '@layout/login.jsx';
import Signup from '@layout/signup.jsx';
import Survey from '@layout/survey.jsx';
import UpdateSurvey from '@layout/updateSurvey.jsx'; 
import Admin from '@layout/admin.jsx'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Accueil />,
      },
      {
        path: '/documents',
        element: <Documents />,
      },
      {
        path: '/actualites',
        element: <Actualites />,
      },
      {
        path: '/annonceurs',
        element: <Annonceurs />,
      },
      {
        path: '/adherer',
        element: <Adherer />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/survey',
        element: <Survey />,
      },
      {
        path: '/update-survey', 
        element: <UpdateSurvey />,
      },
      {
        path: '/admin', 
        element: <Admin />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
