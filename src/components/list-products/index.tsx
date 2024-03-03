
import { useEffect, useState } from "react"
import { SortByPrice } from "../../redux/filter-reducer/filter-slice"
import { useAppSelector } from "../../redux/store"
import { Table } from "antd"


const columns = [
  {
    title: 'Наименование',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Код',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Каталог',
    dataIndex: 'catalog',
    key: 'catalog',
  },
  {
    title: 'Описание',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Бренд',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Количество',
    dataIndex: 'price',
    key: 'quantity',
  },
]


const ListCatalogs = () => {
  const { data: { nomenclatures, catalogs }, filter: { activeCatalog, byPrice } } = useAppSelector((store) => store);
  const [dataForRender, setDataForRender] = useState(nomenclatures);

  useEffect(() => {
    let filteredData = nomenclatures;

    if (activeCatalog) {
      const allCatalogskeys = catalogs.filter((el) => el.key === activeCatalog || el.root === activeCatalog).map(el => el.key);
      filteredData = filteredData.filter(el => allCatalogskeys.includes(el.catalog));
    }

    if (byPrice) {
      filteredData = [...filteredData].sort((a, b) => {
        if (byPrice === SortByPrice.expansive) {
          return b.price - a.price;
        } else { 
          return a.price - b.price;
        }
      });
    }

    setDataForRender(filteredData);
  }, [nomenclatures, catalogs, activeCatalog, byPrice]); 

  return (
    <div className="wrapper-table">
      <Table dataSource={dataForRender} columns={columns} />
    </div>)
}

export default ListCatalogs