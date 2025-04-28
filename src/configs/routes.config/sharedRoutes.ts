import React from 'react';
import { RouteObject } from 'react-router-dom';
import AboutPage from '../../views/about/AboutPage';
import FAQPage from '../../views/FAQ/FAQPage';

export const sharedRoutes: RouteObject[] = [
  {
    path: '/about',
    element: React.createElement(AboutPage)   
  },
  {
    path: '/faq',
    element: React.createElement(FAQPage)     
  }
];
