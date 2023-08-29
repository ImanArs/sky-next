import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { GrCirclePlay } from "react-icons/gr";
import AboutProduct from '../components/AboutProduct';
import GetConsult from '../components/GetConsult';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {

  const [windowWidth, setWindowWidth] = useState(null)
  
  
  const arr = [1,2,3]
  useEffect(()=> {
    setWindowWidth(window.innerWidth);
  },[windowWidth])

  return (
    <div className={styles.MainPage}>
      <div className={styles.MainPage_wrapper}>
        <h1>SKY Industrial Group. <i>Поднимайтесь с нами!</i></h1>
        <div className={styles.MainPage_wrapper__infoBlock}>
          <div className={styles.MainPage_wrapper__infoBlock__left}>
            <div className={styles.left_overlay}>
              <img src="/images/main_left.png" alt="sss" />
              <div className={styles.left_overlay__text}>
                <i>Посмотрите видео о нас</i>
                <span><GrCirclePlay fontSize={30} color={'white'}/></span>
              </div>
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h3>500</h3>
                <p>оборудования в год</p>
              </div>
              <div className={styles.card}>
                <h3>20 000</h3>
                <p>м<sup>2</sup> площадь производства </p>
              </div>
            </div>
          </div>
          <div className={styles.MainPage_wrapper__infoBlock__right}>
            <div className={styles.right_overlay}>
              <div className={styles.right_overlay__top}>
                <img src="/images/sky.png" alt="" />
                <p>Многоотрасливой завод SKY</p>
              </div>
              {
                windowWidth < 500 ?
                <img className={styles.rightImg} src="/images/mob_main_right.png" alt="" />
                :
                <img className={styles.rightImg} src="/images/main_right.png" alt="" />
                
              }
              <div className={styles.right_overlay__text}>
                <a href='#aboutFabric'><button><i>Подробнее</i><img src="/images/arrow.png" alt="" /></button></a>
                <div className={styles.madeIn}>
                  <img src="/images/made-in.png" alt="" />
                  <strong>Made In Kyrgyzstan</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <section className={styles.partners}>
          <h2>Наши партнеры</h2>
          <div className={styles.partners_info}>
            <img src="/images/icons/partners/adidas.png" alt="" />
            <img src="/images/icons/partners/NB.png" alt="" />
            <img src="/images/icons/partners/puma.png" alt="" />
            <img src="/images/icons/partners/361.png" alt="" />
            <img src="/images/icons/partners/nike.png" alt="" />
            <img src="/images/icons/partners/lining.png" alt="" />
            <img src="/images/icons/partners/levis.png" alt="" />

            <img src="/images/icons/partners/nike.png" alt="" />
            <img src="/images/icons/partners/lining.png" alt="" />
            <img src="/images/icons/partners/NB.png" alt="" />
            <img src="/images/icons/partners/levis.png" alt="" />
            <img src="/images/icons/partners/361.png" alt="" />
            <img src="/images/icons/partners/puma.png" alt="" />
            <img src="/images/icons/partners/adidas.png" alt="" />
          </div>
        </section> */}
        <section className={styles.revolution}>
          <div className={styles.revolution_info}>
            <h2>Производственная революция </h2>
            <p>
                Мы - первый лифтостроительный завод в Кыргызстане -  SKY Elevators заключили инвестиционное соглашение с одним из крупнейших заводов Южной Кореи SAEHAN.
                Южнокорейская сторона внедряет инновационные технологии, а также современные методы управления и производства, включая обучение сотрудников завода.
            </p>
          </div>
          <img src="/images/revolution.png" alt="" />
        </section>
        <section className={styles.highStandart}>
          <img src="/images/highStandart.png" alt="" />
          <div className={styles.highStandart_info}>
            <h2>Высокие стандарты качества и полный спектр услуг в лифтовой индустрии </h2>
            <p>
              SKY Industrial Group - это компания, специализирующаяся на производстве и поставке, монтаже и обслуживании лифтового оборудования, а также решений для вертикальной транспортировки. Мы можем изготовить любой лифт для жилых и общественных зданий, в том числе и специализированные подъемники.  
            </p>
          </div>
        </section>
        <section className={styles.aboutFabric} id='aboutFabric'>
          <h2>О заводе</h2>
          <div className={styles.aboutFabric_wrapper}>
            <div className={styles.aboutFabric_wrapper__left}>
              <p>
                SKY Industrial Group – это завод нового поколения, который создает лифты по самым передовым международным стандартам качества. Здесь используются инновационные технологии для создания уникальных и надежных лифтов, которые соответствуют самым высоким требованиям безопасности.
              </p>
              <img src="/images/about-bg.png" alt="" />
            </div>
            <div className={styles.aboutFabric_wrapper__right}>
              <div>
                <img src="/images/icons/icon1.png" alt="" />
                <p>Отдел инновационных технологий</p>
              </div>
              <div>
                <img src="/images/icons/icon2.png" alt="" />
                <p>Свыше 500 единиц оборудования в год</p>
              </div>
              <div>
                <img src="/images/icons/icon3.png" alt="" />
                <p>2 года полной гарантии, гарантийное и пост-гарантийное обслуживание</p>
              </div>
              <div>
                <img src="/images/icons/icon4.png" alt="" />
                <p>20 000 м2 производственной площади</p>
              </div>
              <div>
                <p>Производственные лаборатории, осуществляющие тестирование узлов и элементов оборудования </p>
              </div>
              <div>
                <p>Тестовую башню {'«SKY»'} У нас вы можете не только увидеть нашу продукцию, но и прикоснуться к ней, ощутить ее качество и функциональность.</p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className={styles.technology}>
          <div className={styles.technology_left}>
            <h2>Передовые технологии с совместными усилиями <span>лучших специалистов</span></h2>
            <img src="/images/tech_left.png" alt="" />
          </div>
          <div className={styles.technology_right}>
            <div>
              <h3 className={styles.right_h3}>Стандарт качества и   безопасности</h3>
              <p>Завод создан с применением передовых технологий из Южной Кореи и участием лучших специалистов из нескольких стран. Завод предлагает лифты, соответствующие высоким международным стандартам качества и безопасности, прошедшие строгие проверки. </p>
            </div>
            <div>
              <h3>Технология</h3>
              <p>Он оснащен современным оборудованием, что позволяет повысить эффективность производства, а постоянное совершенствование производственных процессов и методов улучшает качество продукции.</p>
            </div>
            <div>
              <h3>Центр инноваций</h3>
              <p>Завод является центром передовых технологий в производстве лифтов, который готов установить новый стандарт качества и стать лидером на рынке.</p>
              <img src="/images/tech_right.png" alt="" />
            </div>
          </div>
        </section> */}
        <AboutProduct />
        <GetConsult />
        <section className={styles.news}>
          <h2>Новости</h2>
          <div className={styles.news_wrapper}>
            { 
              arr.map((item,index) => (
                <Link href={`/news/1`} key={index}>
                  <div className={styles.news_wrapper__card}>
                    <span>01</span>
                    <img src="/images/news1.png" alt="" />
                    <div className={styles.news_wrapper__card_info}>
                      <h3>Производство лифтов в КР в первом квартале 2023 года выросло на 4,6</h3>
                      <p>Продукция не уступает по качеству импортным аналогам, но стоит значительно дешевле, сообщается на официальном сайте Мэра Москвы. Инженеры АО «Мослифт» начали выпускать комплектующие</p>
                      <div className={styles.date}><span>22.06.23</span> <img src="/images/icons/arrow.png" alt="" /></div>
                    </div>
                  </div>
                </Link>
              ))
            }
            <button><Link href='/news'>Читайте больше новостей</Link></button>
          </div>
        </section>
      </div>
    </div>
  )
}
