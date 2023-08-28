import React, { useEffect, useState } from 'react'
import styles from '../../../styles/Elevator.module.scss'
import axios from 'axios'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-headless-accordion'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import Link from 'next/link';


const CatalogElevators = () => {
  const [category, setCategory] = useState('passenger')
  const [elevators, setElevators] = useState({data:null })
  const [elevator, setElevator] = useState(null)
  const [windowWidth, setWindowWidth] = useState(null)

  const getElevators = async () => {
    try {
      const resp = await axios.get('https://64662253228bd07b355c9c1c.mockapi.io/sky');
      setElevators(prevState => ({...prevState, data:resp.data}))
      setElevator(resp.data[0]);
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=> {
    setWindowWidth(window.innerWidth);
  },[windowWidth])
  const getSlides = () => {
    if (windowWidth <= 425) {
      console.log(1);
      return 1
    } else if ( innerWidth > 425 && windowWidth < 1024 ){
      return 2
    } else {
      return 4
    }
  }

  useEffect(() => {
    getElevators()
  },[])
  console.log(windowWidth);
  const filteredElevators = elevators.data?.filter(item => item.category == category)

  return (
      <section className={styles.catalogElevator} id='catalog'>
        <h2>Каталог продукта</h2>
        <div className={styles.filter}>
          <button onClick={() => setCategory('passenger')} className={category == 'passenger' ? 'clicked' : ''}>Пассажирские</button>
          <button onClick={() => setCategory('premium')} className={category == 'passenger' ? 'clicked' : ''}>Premium</button>
        </div>
        <section className={styles.filteredList}>
          <Swiper
            slidesPerView={getSlides()}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[ Pagination]}
            className={styles.mySwiper}
          >
          {
            filteredElevators?.map((item,index) => (
              <SwiperSlide className={styles.swipreSlide} key={index}>
                <Link href={`#elevator`}>
              <article className={styles.card} onClick={() => setElevator(item)}>
                <img src={item.image} alt="" />
                <div className={styles.card_details}>
                  <h3>{item.name}</h3>
                  <span>от 4 до 10 человек</span>
                </div>
              </article>   
                </Link>
              </SwiperSlide> 
            ))
          }
          </Swiper>
        </section>
        <div className='cardElevator' id='elevator'>
          <div className='left'>
            <h2>{elevator?.name}</h2>
            <p>{elevator?.subtitle}</p>
            <Accordion>
              <AccordionItem className="accordion_item">
                <AccordionHeader className='accordion_item_title'><h3>Потолок</h3><img src="/images/parking/accordion/plus.png" alt="s" /></AccordionHeader>
                <AccordionBody className='accordion_item_content'><p>{elevator?.ceiling}</p></AccordionBody>
              </AccordionItem>
              <AccordionItem className="accordion_item">
                <AccordionHeader className='accordion_item_title'><h3>Задняя стенка</h3><img src="/images/parking/accordion/plus.png" alt="s" /></AccordionHeader>
                <AccordionBody className='accordion_item_content'><p>{elevator?.backWall}</p></AccordionBody>
              </AccordionItem>
              <AccordionItem className="accordion_item">
                <AccordionHeader className='accordion_item_title'><h3>Боковая стенка</h3><img src="/images/parking/accordion/plus.png" alt="s" /></AccordionHeader>
                <AccordionBody className='accordion_item_content'><p>{elevator?.sideWall}</p></AccordionBody>
              </AccordionItem>
              <AccordionItem className="accordion_item">
                <AccordionHeader className='accordion_item_title'><h3>Дверь</h3><img src="/images/parking/accordion/plus.png" alt="s" /></AccordionHeader>
                <AccordionBody className='accordion_item_content'><p>{elevator?.door}</p></AccordionBody>
              </AccordionItem>
              <AccordionItem className="accordion_item">
                <AccordionHeader className='accordion_item_title'><h3>Поручни</h3><img src="/images/parking/accordion/plus.png" alt="s" /></AccordionHeader>
                <AccordionBody className='accordion_item_content'><p>{elevator?.handrails}</p></AccordionBody>
              </AccordionItem>
              <AccordionItem className="accordion_item">
                <AccordionHeader className='accordion_item_title'><h3>Пол</h3><img src="/images/parking/accordion/plus.png" alt="s" /></AccordionHeader>
                <AccordionBody className='accordion_item_content'><p>{elevator?.floor}</p></AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="right">
            <img src={elevator?.image} alt="" />
          </div>
        </div>
      </section>
  )
}

export default CatalogElevators