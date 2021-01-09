import { useState } from 'react'
import style from './carousel.module.scss'
import Slider from 'react-slick'
import Lightbox from 'react-image-lightbox'
import { ZoomInIcon } from '../svg'
const carouselData = [
  {
    type: 'project management',
    location: 'Hangzhou, China',
    img: '/images/carousel1.jpg',
  },
  {
    type: 'Architectural services',
    location: 'Los Angeles, United States',
    img: '/images/carousel2.jpg',
  },
  {
    type: 'Pre-construction',
    location: 'Montreal, Canada',
    img: '/images/carousel3.jpg',
  },
  {
    type: 'Facade engineering',
    location: 'Reggio Emilia, Italy',
    img: '/images/carousel4.jpg',
  },
]
function Carousel() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className={style.wrapper}>
        <Slider {...settings}>
          {carouselData.map((slide, index) => (
            <div className={style.slide} key={index}>
              <div className={style.inner}>
                <img src={slide.img} alt={slide.location} />
                <div className={style.location}>{slide.location}</div>
                <div className={style.type}>{slide.type}</div>
                <button
                  className={style.zoom}
                  onClick={() => setIsLightboxOpen(true)}
                >
                  <ZoomInIcon />
                </button>
              </div>
            </div>
          ))}
        </Slider>
        <div className={style.btn}>
          <a href='' className='btn'>
            View All Projects
          </a>
        </div>
      </div>

      {isLightboxOpen && (
        <Lightbox
          mainSrc={carouselData[photoIndex].img}
          nextSrc={carouselData[(photoIndex + 1) % carouselData.length]}
          prevSrc={
            carouselData[
              (photoIndex + carouselData.length - 1) % carouselData.length
            ]
          }
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + carouselData.length - 1) % carouselData.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex(
              (photoIndex + carouselData.length - 1) % carouselData.length
            )
          }
        />
      )}
    </>
  )
}

export default Carousel
