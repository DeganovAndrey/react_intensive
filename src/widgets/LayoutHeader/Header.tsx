import { useState } from "react";
import Button from "../../shared/ui/Button/Button";
import Modal from "../../shared/ui/Modal/Modal";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <div>
      <h2>Список постов</h2>
      <Button onClick={() => setIsOpenModal(true)}>О проекте</Button>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />

      <hr />
    </div>
  );
};

export default Header;
