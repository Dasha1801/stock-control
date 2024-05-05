import { Button } from "antd"
import Search from "antd/es/input/Search"
import { useMemo, useState } from 'react'
import { SortByPrice, changeByPrice, changeSearchCount, changeSearchName, reset, selectCatalog } from "../../redux/filter-reducer/filter-slice"
import { useAppDispatch, useAppSelector } from "../../redux/store"
import RadioGroup from "../radio"
import DropDown from "../select"
import './style.scss'
const dataForRadioGroup = [
  {
    value: SortByPrice.cheap,
    label: 'Дешевые'
  },
  {
    value: SortByPrice.expansive,
    label: 'Дорогие'
  },
]


const Actions = () => {
  const { data: { catalogs }, filter: { activeCatalog, byPrice, searchCount, searchName } } = useAppSelector((store) => store)
  const dispatch = useAppDispatch()
  const data = useMemo(() => catalogs.map((el) => {
    return {
      value: el.key,
      label: el.name
    }
  })
    , [catalogs])

  const [state, setState] = useState({ count: searchCount, name: searchName })

  const isDisabled = useMemo(() => !(activeCatalog || byPrice || searchCount || searchName), [activeCatalog, byPrice, searchCount, searchName])

  const resetFilters = () => {
    setState({ count: '', name: '' })
    dispatch(reset())
  }

  return (
    <div className="wrapper-actions">
      <DropDown value={activeCatalog} options={[...data, { value: '', label: 'Все каталоги' }]} onChange={(val) => dispatch(selectCatalog(val))} />
      <Search placeholder="Название или модель" value={state.name} onChange={(e) => setState((prev) => ({ ...prev, name: e.target.value }))} onSearch={() => dispatch(changeSearchName(state.name))} enterButton />
      <Search placeholder="Введите количество" type="number" value={state.count} onChange={(e) => setState((prev) => ({ ...prev, count: e.target.value.replace(/[^0-9]/g, '') }))} onSearch={() => dispatch(changeSearchCount(state.count))} enterButton />
      <RadioGroup options={dataForRadioGroup} value={byPrice} onChange={(val) => dispatch(changeByPrice(val.target.value))} />
      <Button type="primary" disabled={isDisabled} onClick={resetFilters}>Сброс</Button>
    </div>
  )
}

export default Actions