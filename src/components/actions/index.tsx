import { useAppDispatch, useAppSelector } from "../../redux/store"
import DropDown from "../select"
import { selectCatalog } from "../../redux/filter-reducer/filter-slice"

const Actions = () => {
  const { data: { catalogs }, filter: { activeCatalog } } = useAppSelector((store) => store)
  const dispatch = useAppDispatch()
  const data = catalogs.map((el) => {
    return {
      value: el.id,
      label: el.name
    }
  })

  return (
    <div className="wrapper-actions">
      <DropDown value={activeCatalog} data={data} onChange={(val) => dispatch(selectCatalog(val))} />
    </div>
  )
}

export default Actions