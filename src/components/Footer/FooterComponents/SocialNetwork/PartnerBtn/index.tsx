'use client'


import React, {useState} from 'react'
import style from  './style.module.scss'
import PartnerForm from './PartnerModal/index'

const PartnerBtn: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className={style.Btn} onClick={handleOpenModal}>Открыть окно</button>
      {showModal && <PartnerForm onClose={handleCloseModal} />}
    </div>
  );
};

export default PartnerBtn;