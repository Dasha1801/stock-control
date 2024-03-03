import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICatalogItem {
  'Каталог': string,
  'Код': string,
  'Код родительского каталога': string,
}

interface ICatalogs {
  catalogs: ICatalogItem[]
}

const CatalogsInitState: ICatalogs = {
  catalogs: []
}

export const catalogsSlice = createSlice({
  name: 'catalogs',
  initialState: CatalogsInitState,
  reducers: {
    downLoadCatalogs: (state, { payload }: PayloadAction<ICatalogItem[]>) => {
      state.catalogs = payload
    },
  },
})

export const { downLoadCatalogs } = catalogsSlice.actions
export const { reducer: catalogsReducer } = catalogsSlice
