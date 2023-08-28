import React, { useState } from 'react'
import styles from '../styles/Form.module.scss'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const GetConsult = () => {

  const [ consultInfo, setConsultInfo ] = useState({name: '', phone: ''})

  const handleConsult = (e) => {
    e.preventDefault();
    if (consultInfo.name !== '' && consultInfo.phone !== '') {
      console.log(consultInfo);
      toast.success("Заявка на консультацию успешно отправлена!");
    } else {
      toast.error("заполните все поля формы для консультации!");
    }
  }
  const change = (key, e) => {
    setConsultInfo({...consultInfo, [key]: e.target.value})
  }

  return (
    <div className={styles.form}>
          <div className={styles.form_wrapper}>
            <div className={styles.form_wrapper__info}>
              <h3>Получить консультацию от специалиста по подбору лифта</h3>
              <p>Оставьте свой номер телефона, и наш эксперт свяжется с вами в ближайшее время!</p>
            </div>

            <div className={styles.form_wrapper__form}>
              <form action="" onSubmit={(e) => handleConsult(e)}>
                <div>
                  <input type="text" name="" id="" placeholder='Имя' onChange={(e) => change('name', e)} />
                </div>
                <div>
                  <input type="number" name="" id="" placeholder='+996 555 555 555' onChange={(e) => change('phone', e)} />
                </div>
                <button type='submit'>Получить предложение</button>
              </form>
              <div className={styles.form_wrapper__form_icons}>
                <img src="/images/icons/whatsapp.png" alt="" />
                <img src="/images/icons/Telegram.png" alt="" />
                <img src="/images/icons/viber.png" alt="" />
              </div>
            </div>
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

          {/* Same as */}
          {/* <ToastContainer /> */}
    </div>
  )
}

export default GetConsult