import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AboutPage from './pages/AboutPage';
import TestimonyPage from './pages/TestimonyPage';
import FAQPage from './pages/FAQPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'home/:id', element: <DetailPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'testimony', element: <TestimonyPage /> },
      { path: 'faq', element: <FAQPage /> },
    ],
  },
]);