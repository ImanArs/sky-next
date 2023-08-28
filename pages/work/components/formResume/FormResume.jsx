import React, { useState } from 'react'
import styles from './FormResume.module.scss'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const FormResume = () => {
  const [userResume, setUserResume] = useState({
    name: null,
    phone: null,
    email: null,
    prof: null,
    comment: null
  });

  const handleResume = (e) => {
    e.preventDefault();
    const filledFields = Object.keys(userResume).filter(key => userResume[key] !== null);
    if (filledFields.length === Object.keys(userResume).length) {
      console.log(userResume);
      toast.success("Заявка на консультацию успешно отправлена!");
    } else {
      toast.error("Заполните все поля формы для консультации!");
    }
  };
  
  const change = (key, e) => {
    setUserResume({...userResume, [key]: e.target.value})
  }

  return (
    <div className={styles.formResume}>
      <div className={styles.formResume_form}>
        <form onSubmit={e => handleResume(e)}>
          <input type="text" placeholder='Имя Фамилия' onChange={(e) => change('name',e)} required />
          <input type="number" placeholder='Телефон ' onChange={(e) => change('phone',e)} required/>
          <input type="email" placeholder='E-maill' onChange={(e) => change('email',e)} required/>
          <input type="text" placeholder='Название профессии' onChange={(e) => change('prof',e)} required/>
          <textarea cols="30" rows="10" placeholder='Комментарий (необязательно)' onChange={(e) => change('comment',e)} required></textarea>
          <div className={styles.buttons}>
            <button>Отправить резюме </button>
            <button type='submit'>Откликнуться</button>
          </div>
        </form>
        <p>Нажимая {"Откликнуться"} ты соглашаешься с Обработкой персональных данных</p>
      </div>
      <div className={styles.formResume_text}>
        <h2>Не видишь свою вакансию?</h2>
        <p>Оставь свои данные и резюме, и мы свяжемся с тобой, когда найдем что-то подходящее под твое резюме</p>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default FormResume