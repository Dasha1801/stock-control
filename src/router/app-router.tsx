import React from 'react'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import BasePage from '../pages/base-page'
const allPaths = {
  root: {
    path: '/',
    name: 'Главная',
  },
  catalog: {
    path: 'catalog',
    name: 'Каталог',
  },
  catalogId: {
    path: ':catalogId',
    name: 'ID каталога',
  },
}

const routes: RouteObject = {
  path: allPaths.root.path,
  element: <BasePage />,
  children: [
    {
      index: true,
      element: <div></div>
    },
    {
      path: `${allPaths.catalog.path}/${allPaths.catalogId.path}`,
      element: <div></div>
    },
    {
      path: '*',
      element: <Navigate to={allPaths.root.path} replace />
    },
  ]
}

export const AppRouter = React.memo(() =>
  useRoutes([routes])
)
