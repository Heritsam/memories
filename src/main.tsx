import '@/lib/i18n';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@/components/theme-provider';
import AskPage from '@/pages/ask-page';
import ErrorPage from '@/pages/error-page';
import Root from '@/pages/root';
import { store } from '@/stores/store';

import HistoryPage from './pages/history-page';
import LandingPage from './pages/landing-page';
import SurveyPage from './pages/survey-page';

const router = createBrowserRouter([
  {
    path: '/landing',
    element: <LandingPage />,
  },
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
        element: <HistoryPage />,
      },
      {
        path: '/survey',
        element: <SurveyPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
