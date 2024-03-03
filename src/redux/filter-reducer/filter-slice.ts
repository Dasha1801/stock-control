import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum SortByPrice {
  expansive = 'price',
  cheap = '-price',
  default = ''
}

interface IFilter {
  activeCatalog: string
  byPrice: SortByPrice 
}

const FilterInitState: IFilter = {
  activeCatalog: '',
  byPrice: SortByPrice.default
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: FilterInitState,
  reducers: {
    selectCatalog: (state, { payload }: PayloadAction<string>) => {
      state.activeCatalog = payload
    },
    changeByPrice: (state, { payload }: PayloadAction<SortByPrice>) => {
      state.byPrice = payload
    },
  },
})

export const { selectCatalog, changeByPrice } = filterSlice.actions
export const { reducer: filterReducer } = filterSlice
