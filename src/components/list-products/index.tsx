import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../redux/store"
import './style.scss'
import { allPaths } from "../../router/app-router"

const heading = ['наименование', 'код', 'каталог', 'описание', 'бренд', 'цена', 'количество']


const ListCatalogs = () => {
  const navigate = useNavigate()
  const { catalogs, nomenclatures } = useAppSelector((store) => store.data)
  console.log(nomenclatures[0])
  return (
    <div className="wrapper-table">
      <table>
        <thead>
          {heading.map((el, idx) => <th key={`item-head-${idx}`}>{el}</th>)}
        </thead>
        <tbody>
          {nomenclatures.map((el) => <tr onClick={() => navigate(`${allPaths.catalog.path}/${el.id}`)} className="active" key={el.id}>
            <td>{el.name}</td>
            <td>{el.id}</td>
            <td>{el.catalog}</td>
            <td>{el.description}</td>
            <td>{el.brand}</td>
            <td>{el.price}</td>
            <td>{el.quantity}</td>
          </tr>)}
        </tbody>
      </table></div>)
}

export default ListCatalogs