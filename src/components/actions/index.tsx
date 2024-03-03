import { useState } from "react"
import { useAppSelector } from "../../redux/store"
import DropDown from "../select"

const Actions = () => {
  const [activeCatalog, setActiveCatalog] = useState('')
  const { catalogs } = useAppSelector((store) => store.data)

  const data = catalogs.map((el) => {
    return {
      value: el.id,
      label: el.name
    }
  })

  console.log(activeCatalog)

  return (
    <div className="wrapper-actions">
      <DropDown data={data} onChange={setActiveCatalog}/>
    </div>
  )
}

export default Actions