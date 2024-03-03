import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IFilter {
  activeCatalog: string
}

const FilterInitState: IFilter = {
  activeCatalog: ''
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: FilterInitState,
  reducers: {
    selectCatalog: (state, { payload }: PayloadAction<string>) => {
      state.activeCatalog = payload
    },
  },
})

export const { selectCatalog } = filterSlice.actions
export const { reducer: filterReducer } = filterSlice
