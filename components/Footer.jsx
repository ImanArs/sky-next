import React, { useState } from 'react'
import styles from '../styles/Footer.module.scss'
const Footer = () => {
  const [question,setQuestion] = useState(null)

  const handleQuestion = (e) => {
    e.preventDefault();
    console.log(question);
  }
  const change = (key, e) => {
    setQuestion({...question, [key]: e.target.value})
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_wrapper__form}>
          <h3>Остались вопросы ?</h3>
          <form action="" onSubmit={e => handleQuestion(e)}>
            <input type="text" placeholder='Имя' required onChange={e => change( 'name', e )} />
            <input type="text" placeholder='Номер' required onChange={e => change( 'phone', e )} />
            <input type="text" placeholder='Вопрос' required onChange={e => change( 'question', e )} />
            <div className={styles.form_checkbox}>
              <input type="checkbox" name="" id="checkbox" required onChange={e => change( 'checkbox', e )} />
              <label htmlFor="checkbox">Даю согласие на обработку <span>Персональных данных</span></label>
            </div>
            <button type='submit'>Оставить заявку</button>
          </form>
        </div>
        <div className={styles.footer_wrapper__info}>
          <div className={styles.footer_wrapper__info_left}>
            <div>
              <h3>Контакты</h3>
              <ul>
                <li>
                  <a href="">+996 755 18 88 97 - Экспорт</a>
                </li>
                <li>
                  <a href="">+996 990 11 22 12 - Коммерческий директор</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Адрес</h3>
              <ul>
                <li>Завод : Кыргызстан, село Ленинское ул. Алма-Атинская, 254а/5</li>
                <li>Офис: Кыргызстан Бишкек ул. Курманжан Датка 144</li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_wrapper__info_right}>
            <div>
              <h3>Соцсети</h3>
              <ul>
                <li><a href="">Telegram</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">Pinterest</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer