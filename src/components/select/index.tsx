import { Select } from 'antd';

interface IPropsDropDown {
  data: { value: string, label: string }[]
  onChange: (arg: string) => void
  value: string
}

const DropDown = ({ data, onChange, value }: IPropsDropDown) => {
  return (
    <Select
      defaultValue="Все каталоги"
      style={{ width: 240, height: 40 }}
      onChange={onChange}
      options={data}
      value={value}
    />
  )
}

export default DropDown