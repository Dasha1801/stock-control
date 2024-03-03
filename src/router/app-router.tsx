import React from 'react'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import BasePage from '../pages/base-page'
import Main from '../pages/main'
export const allPaths = {
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
      element: <Main />
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
