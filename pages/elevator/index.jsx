import React, { useEffect, useState } from 'react'
import styles from '../../styles/Elevator.module.scss'
import AboutProduct from '../../components/AboutProduct'
import Video from '../parking/components/video/Video'
import GetConsult from '../../components/GetConsult'
import axios from 'axios'
import CatalogElevators from './components/CatalogElevators'
import Image from 'next/image'

const Elevator = () => {

  let arr = [
    {
      image: "images/parking/video.png",
      desc: "Идеальная парковка с минимальными усилиями"
    },
    {
      image: "images/parking/video.png",
      desc: "Идеальная парковка с минимальными усилиями"
    },
    {
      image: "images/parking/video.png",
      desc: "Идеальная парковка с минимальными усилиями"
    },
    {
      image: "images/parking/video.png",
      desc: "Идеальная парковка с минимальными усилиями"
    },
    {
      image: "images/parking/video.png",
      desc: "Идеальная парковка с минимальными усилиями"
    },
    {
      image: "images/parking/video.png",
      desc: "Идеальная парковка с минимальными усилиями"
    },
    {
      image: "images/parking/video.png",
      desc: "Идеальная парковка с минимальными усилиями"
    }
  ]
  
  return (
    <div className={styles.Elevator}>
      <div className={styles.Elevator_wrapper}>
        <div className={styles.Elevator_wrapper__top}>
          <div className={styles.left}>
            <div className={styles.left__info}>
              <h1>SKY Elevators.</h1>
              <i>Новый уровень с инновационными лифтами</i>
            </div>
            <div className={styles.left__overlay}>
              <img src="/images/elevators/main_left.png" alt="" />
              <p>SKY Elevators - высококачественные лифты для вертикальной транспортировки.</p>
            <div className={styles.catalog}><button>Каталог</button> <img src="/images/icons/arrow.png" alt="" /></div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.right__top}>
              <h3>Изготавливаем пассажирские, грузовые, специализированные и кухонные лифты.</h3>
              <p>C полным спектром услуг от проектирования до обслуживания.</p>
            </div>
            <div className={styles.right__bottom}>
              <img src="/images/elevators/main_right.png" alt="" />
              <button><a href='#catalog'>Каталог</a></button>
            </div>
          </div>
        </div>
      </div>
      <Video arr={arr}/>
      <section className={styles.skyElevators}>
        <div className={styles.skyElevators__info}>
          <h2>Sky elevators - лифты для будущего.</h2>
          <p>Наши лифты оснащены передовыми технологиями безопасности -  противоударными механизмами и датчиками движения. Мы гарантируем защиту пассажиров на протяжении всей поездки.</p>
        </div>
        <div className={styles.skyElevators__carousel}>
          <div className={styles.skyElevators__carousel_top}>
            <img src="/images/elevators/innovation1.png" alt="" />
            <img src="/images/elevators/innovation2.png" alt="" />
            <img src="/images/elevators/innovation3.png" alt="" />
            <img src="/images/elevators/innovation1.png" alt="" />
            <img src="/images/elevators/innovation2.png" alt="" />
            <img src="/images/elevators/innovation3.png" alt="" />
            <img src="/images/elevators/innovation1.png" alt="" />
          </div>
          <div className={styles.skyElevators__carousel_bottom}>
            <img src="/images/elevators/innovation3.png" alt="" />
            <img src="/images/elevators/innovation2.png" alt="" />
            <img src="/images/elevators/innovation1.png" alt="" />
            <img src="/images/elevators/innovation3.png" alt="" />
            <img src="/images/elevators/innovation2.png" alt="" />
            <img src="/images/elevators/innovation1.png" alt="" />
            <img src="/images/elevators/innovation3.png" alt="" />
          </div>
        </div>
      </section>
      <section className={styles.whyElevators}>
        <h2>Почему выбирают нас ?</h2>
        <div  className={styles.whyElevators__wrapper}>
          <div className={styles.whyElevators__wrapper_security}>
            <div className={styles.info}>
            <h3>Максимальная безопасность:</h3>
            <p>Лифты SKY Industrial Group с передовыми системами безопасности. Надежная защита пассажиров на каждом этапе поездки.</p>
            </div>
            <img src="/images/elevators/why_top1.png" alt="" />
          </div>
          <div className={styles.whyElevators__wrapper_hope}>
            <div className={styles.info}>
              <h3>Надежность, на которую можно положиться:</h3>
              <p>Лифты SKY Industrial Group соответствуют высоким международным стандартам качества, обеспечивая бесперебойную работу на протяжении многих лет.</p>
            </div>  
            <img src="/images/elevators/why_top2.png" alt="" />
          </div>
          <div className={styles.whyElevators__wrapper_solution}>
            <div className={styles.info}>
              <h3>Решения по вашим мерам</h3>
              <p>SKY Industrial Group создает индивидуальные лифты, полностью соответствующие вашим потребностям. Доверьтесь нам и получите лифт, превосходящий ваши ожидания.</p>
            </div>
            <img src="/images/elevators/why_top3.png" alt="" />
          </div>
          <div className={styles.whyElevators__wrapper_comfort}>
            <div className={styles.info}>
              <h3>Комфорт:</h3>
              <p>Лифты SKY Industrial Group совмещают плавное движение и стильный дизайн для приятной атмосферы.</p>
            </div>
            <img src="/images/elevators/why_bottom1.png" alt="" />
          </div>
          <div className={styles.whyElevators__wrapper_video}>
            <img src="/images/elevators/why_bottom2.png" alt="" />
          </div>
        </div>
      </section>
      <CatalogElevators />
      <AboutProduct />
    </div>
  )
}

export default Elevator