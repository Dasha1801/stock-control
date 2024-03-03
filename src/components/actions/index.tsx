import { useAppDispatch, useAppSelector } from "../../redux/store"
import DropDown from "../select"
import { SortByPrice, changeByPrice, selectCatalog } from "../../redux/filter-reducer/filter-slice"
import { useMemo } from 'react'
import RadioGroup from "../radio"
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
  const { data: { catalogs }, filter: { activeCatalog, byPrice } } = useAppSelector((store) => store)
  const dispatch = useAppDispatch()
  const data = useMemo(() => catalogs.map((el) => {
    return {
      value: el.key,
      label: el.name
    }
  })
    , [catalogs])

  return (
    <div className="wrapper-actions">
      <DropDown value={activeCatalog} options={[...data, {value: '', label: 'Все каталоги'}]} onChange={(val) => dispatch(selectCatalog(val))} />
      <RadioGroup options={dataForRadioGroup} value={byPrice} onChange={(val) => dispatch(changeByPrice(val.target.value))} />
    </div>
  )
}

export default Actions