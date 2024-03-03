import { combineReducers } from '@reduxjs/toolkit'
import { catalogsReducer } from './catalog-reducer/catalogsSlice'

export const rootReducer = combineReducers({
  catalogs: catalogsReducer
})

export type RootState = ReturnType<typeof rootReducer>
