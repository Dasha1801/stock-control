import ListProducts from "../../components/list-products"
import UploadFile from "../../components/upload-file"
import { useAppSelector } from "../../redux/store"

const Main = () => {
  const { catalogs } = useAppSelector((store) => store.data)

  return (
    <>{
      catalogs.length ? <ListProducts /> : <UploadFile />
    }
    </>
  )
}

export default Main