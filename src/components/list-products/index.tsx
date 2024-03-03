import { Table } from "antd"
import { useAppSelector } from "../../redux/store"
import { useMemo } from "react"


const columns = [
  {
    title: 'наименование',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'код',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'каталог',
    dataIndex: 'catalog',
    key: 'catalog',
  },
  {
    title: 'описание',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'бренд',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'цена',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'количество',
    dataIndex: 'price',
    key: 'quantity',
  },
]


const ListCatalogs = () => {
  const { data: { nomenclatures, catalogs }, filter: { activeCatalog } } = useAppSelector((store) => store)

  const nomenclaturesForRender = useMemo(() => {
    if (!activeCatalog) {
      return nomenclatures
    }

    const allCatalogs = catalogs.filter((el) => {
      if (el.id === activeCatalog || el.root === activeCatalog) {
        return el
      }
    }).map((el) => el.id)

    console.log(allCatalogs)

    return nomenclatures.filter((el) => allCatalogs.includes(el.catalog))


  }, [activeCatalog, catalogs, nomenclatures])

  console.log(nomenclaturesForRender)

  return (
    <div className="wrapper-table">
      <Table dataSource={nomenclaturesForRender} columns={columns} />
    </div>)
}

export default ListCatalogs