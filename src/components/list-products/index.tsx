import { Table } from "antd"
import { useAppSelector } from "../../redux/store"


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
  const { nomenclatures } = useAppSelector((store) => store.data)
  return (
    <div className="wrapper-table">
      <Table dataSource={nomenclatures} columns={columns} />
    </div>)
}

export default ListCatalogs