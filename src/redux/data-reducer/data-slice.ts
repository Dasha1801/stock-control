import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Catalog {
  key: string;
  name: string;
  root: string;
}

interface Nomenclature {
  key: string,
  catalog: string,
  name: string,
  description: string,
  price: number,
  quantity: number,
  brand: string
}

export interface DataJson {
  catalogs: Catalog[];
  nomenclatures: Nomenclature[]
}

const DataInitState: DataJson = {
  catalogs: [],
  nomenclatures: []
}

export const dataSlice = createSlice({
  name: 'data',
  initialState: DataInitState,
  reducers: {
    uploadData: (state, { payload }: PayloadAction<DataJson>) => {
      console.log(payload)
      state.catalogs = payload.catalogs
      state.nomenclatures = payload.nomenclatures
    },
  },
})

export const { uploadData } = dataSlice.actions
export const { reducer: dataReducer } = dataSlice
