import { Button, Modal } from "antd"
import { IPropsModalCatalog } from "./ModalNewCatalog"
import './style.scss'

export const ModalSaveData = ({ isModalOpen, handleCancel }: IPropsModalCatalog) => {
  return (
    <Modal title="Данные не сохранены" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <div className="actions buttons">
          <Button
            className="btn-submit"
            htmlType="submit"
          >
            Сохранить
          </Button>
          <Button
            className="btn-submit"
            htmlType="submit"
          >
            Закрыть
          </Button>
        </div>
    </Modal>
  )
}