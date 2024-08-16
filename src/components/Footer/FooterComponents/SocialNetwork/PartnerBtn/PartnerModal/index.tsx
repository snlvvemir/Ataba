// components/Modal.tsx
import React, {useState} from 'react';
import style from './style.module.scss';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

interface PartnerFormProps {
    onClose: () => void;
  }

  const PartnerForm: React.FC<PartnerFormProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      middleName: '',
      country: '',
      phone: '',
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error('Ошибка при отправке данных');
        }
  
        // Обработка успешной отправки данных
        console.log('Данные успешно отправлены');
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };
    


        const [PhoneNumber, setPhoneNumber] = useState('');
      const [valid, setValid] = useState(true);

      const handChange = (value: string) => {
        setPhoneNumber(value);
        setValid(validDateForNumber(value));
    };

      const validDateForNumber = (phoneNumber: string) => {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(phoneNumber);
      }


    return (
      <div className={style.modal} onClick={onClose}>
        <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={style.close} onClick={onClose}>&times;</span>
        <h2 className={style.MainText}>Стать партнером</h2>
        <div className={style.line}></div>
        <form onSubmit={handleSubmit}>
        <label className={style.name}>
            <span className={style.userName}>Имя</span>
            <input className={style.input} 
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder='Романов'/>
        </label>
        <label className={style.name}>
            <span className={style.userName}>Фамилия</span>
            <input className={style.input} 
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder='Романов'/>
            </label>
        <label className={style.name}>
            <span className={style.userName}>Отчество</span>
            <input className={style.input} 
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                placeholder='Романов'/>
            </label>
            <label className={style.name}>
            <span className={style.userName}>Страна</span>
            <select className={style.input} name="country" value={formData.country} onChange={handleChange}>
                <option className={style.option} value="">Выбрать</option>
                <option className={style.option} value="KG">Кыргызстан</option>
                <option className={style.option} value="KZ">Казахстан</option>
                <option className={style.option} value="RUS">Россия</option>
                <option className={style.option} value="UZ">Узбекистан</option>
                {/* <!-- Добавьте другие опции стран --> */}
            </select>
            </label>
            <label className={style.name}>
            <span className={style.userName}>Телефон</span>
            <PhoneInput 
                searchPlaceholder='777-333-111'
                country={'kg'} 
                value={formData.phone}
                onChange={handChange}
                placeholder='777-333-111'
                inputStyle={{
                  width: '440px',
                  height: '40px',
                }}/>
            </label>
            <div className={style.submitBtn}>
            <button className={style.btn} type="submit">Сохранить</button>
            </div>
        </form>
        </div>
    </div>
    );
  };
  
  export default PartnerForm;


