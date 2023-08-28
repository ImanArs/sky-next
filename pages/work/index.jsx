import React from 'react'
import Vacancy from './components/vacancy/Vacancy'
import FormResume from './components/formResume/FormResume'
import styles from '../../styles/Work.module.scss'

const Work = () => {
  return (
    <div className='content'>
      <div className={styles.work}>
        <div className={styles.work_top}>
          <img src="/images/work/main.png" alt="" />
          <h1>Стань частью SKY Industrial Group </h1>
        </div>
        <div className={styles.work_bottom}>
          <div className={styles.work_bottom_card}>
            <img src="/images/icons/icon1.png" alt="" />
            <p>Продукты, облегчающие жизнь миллионам людей</p>
          </div>
          <div className={styles.work_bottom_card}>
            <img src="/images/icons/icon2.png" alt="" />
            <p>Уверенные и решительные люди с общими целями</p>
          </div>
          <div className={styles.work_bottom_card}>
            <img src="/images/icons/icon3.png" alt="" />
            <p>Осознанно подход к технологиям и процессам, чтобы достигать конечных результатов.</p>
          </div>
        </div>
      </div>
      <Vacancy />
      <FormResume />
      {/* <div className={styles.tips}>
        <h2>Посоветуй классного специалиста и получи до 50 000 тысяч сом</h2>
        <div className={styles.tips_wrapper}>
          <div className={styles.tips_wrapper_card}>
            <span>1</span>
            <div>
              <h4>Заполни форму регистрации </h4>
              <p>Внеси контакты : свои и кандидата </p>
            </div>
          </div>
          <div className={styles.tips_wrapper_card}>
            <span>2</span>
            <div>
              <h4>Собеседуем кандидата  </h4>
              <p>1.Если до этого его не было в нашей базе</p>
              <p>2.Если до этого мы не контактировали с ним 1 год</p>
            </div>
          </div>
          <div className={styles.tips_wrapper_card}>
            <span>3</span>
            <div>

              <h4>Получи от 50 тысяч сом</h4>
              <p>Когда кандидат пройдет испытательный срок.</p>
              <p>Сумма вознагрождения зависит от позиции и уровня кандидата .</p>
            </div>
          </div>
        </div>
        <div>
          <button>Посоветовать специалиста </button>
        </div>
      </div> */}
    </div>
  )
}

export default Work