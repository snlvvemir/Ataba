import React, { useState, useRef } from 'react';
import style from './style.module.scss'

interface OTPInputProps {
  length: number;
  onChange: (otp: string) => void;
}

const  OTPInput: React.FC<OTPInputProps> = ({ length, onChange }) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (/^[0-9]?$/.test(value)) {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);
      onChange(newValues.join(''));

      if (value && index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className={style.otp_input_container}>
      {values.map((value, index) => (
        <input
          key={index}
          ref={(el) => { inputsRef.current[index] = el; }} // Функция ref не должна ничего возвращать
          type="text"
          value={value}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          maxLength={1}
          className={style.otp_input}
        />
      ))}
    </div>
  );
};

export default OTPInput;
