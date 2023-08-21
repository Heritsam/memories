import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import '@/config/i18n';

import './index.css';

import Root from './pages/root';
import ErrorPage from './pages/error-page';
import AskPage from './pages/ask-page';
import { ThemeProvider } from './components/theme-provider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <AskPage />,
      },
      {
        path: '/history',
        element: <div>History</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
