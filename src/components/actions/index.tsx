import { useAppDispatch, useAppSelector } from "../../redux/store"
import DropDown from "../select"
import { SortByPrice, changeByPrice, selectCatalog, changeSearchName, changeSearchCount, reset } from "../../redux/filter-reducer/filter-slice"
import { useMemo } from 'react'
import RadioGroup from "../radio"
import './style.scss'
import Search from "antd/es/input/Search"
import { Button } from "antd"
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

  const isDisabled = useMemo(() => !(activeCatalog || byPrice || searchCount || searchName), [activeCatalog, byPrice, searchCount, searchName])

  return (
    <div className="wrapper-actions">
      <DropDown value={activeCatalog} options={[...data, { value: '', label: 'Все каталоги' }]} onChange={(val) => dispatch(selectCatalog(val))} />
      <Search placeholder="Название или модель" onSearch={(val => dispatch(changeSearchName(val)))} enterButton />
      <Search placeholder="Введите количество" type="number" onSearch={(val => dispatch(changeSearchCount(val.replace(/[^0-9]/g, ''))))} enterButton />
      <RadioGroup options={dataForRadioGroup} value={byPrice} onChange={(val) => dispatch(changeByPrice(val.target.value))} />
      <Button type="primary" disabled={isDisabled} onClick={() => dispatch(reset())}>Сброс</Button>
    </div>
  )
}

export default Actions