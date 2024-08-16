import React, {useState} from 'react'
import styles from './style.module.scss'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

interface ModalProps {
    show: boolean;
    onClose: () => void;
  }
  

const   ModalNumber: React.FC<ModalProps> = ({show, onClose}) => {
    if (!show) {
        return null;
      }

      const [PhoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);

  const handleChange = (value: string) => {
    setPhoneNumber(value);
    setValid(validDateForNumber(value));
};

  const validDateForNumber = (phoneNumber: string) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  }
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Забыли пароль?</h2>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>
        <div className={styles.line}></div>
        <div className={styles.modalBody}>
          <label htmlFor="phone">Телефон</label>
          <div className={styles.phoneInput}>
          <PhoneInput
          placeholder='777-333-111'
              country={'kg'} 
              value={PhoneNumber}
              onChange={handleChange}
              inputStyle={{
                width: '100%',
                height: '48px',
                fontWeight: '400',
                borderRadius: '5px',
              }}    
              inputProps={{
                required: true,
              }}/>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.submitButton} >Отправить</button>
        </div>
      </div>
    </div>
  )
}

export default ModalNumber
