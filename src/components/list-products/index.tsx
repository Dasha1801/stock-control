
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
    dataIndex: 'quantity',
    key: 'quantity',
  },
]


const ListCatalogs = () => {
  const { data: { nomenclatures, catalogs }, filter: { activeCatalog, byPrice, searchCount, searchName } } = useAppSelector((store) => store);
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

    if (searchName) {
      filteredData =
        filteredData.filter(
          (el) =>
            el.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1
        )
    }

    if (searchCount) {
      filteredData =
        filteredData.filter(
          (el) =>
            el.quantity < Number(searchCount)
        )
    }
    setDataForRender(filteredData);
  }, [nomenclatures, catalogs, activeCatalog, byPrice, searchCount, searchName]);

  return (
    <div className="wrapper-table">
      <Table dataSource={dataForRender} columns={columns} />
    </div>)
}

export default ListCatalogs