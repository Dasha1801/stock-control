import { combineReducers } from '@reduxjs/toolkit'
import { dataReducer } from './data-reducer/dataSlice'

export const rootReducer = combineReducers({
  data: dataReducer
})

export type RootState = ReturnType<typeof rootReducer>
