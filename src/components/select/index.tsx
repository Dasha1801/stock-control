import { Select } from 'antd';

interface IPropsDropDown {
  data: { value: string, label: string }[]
  onChange: (arg: string) => void
}

const DropDown = ({ data, onChange }: IPropsDropDown) => {
  return (
    <Select
      defaultValue="Все каталоги"
      style={{ width: 240, height: 40 }}
      onChange={onChange}
      options={data}
    />
  )
}

export default DropDown