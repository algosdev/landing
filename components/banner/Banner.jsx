import next from 'next'
import { useState, useEffect, useRef } from 'react'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from '../svg'
import Slider from 'react-slick'
import style from './banner.module.scss'
import { motion, useAnimation } from 'framer-motion'
const bannerData = [
  {
    location: 'Hangzhou, China',
    count: '01',
    title: '2100 Club',
    desc: 'The world’s first blockchain bar',
    caption_img: '/images/banner_img1.jpg',
    img: '/images/banner_bg1.jpg',
  },
  {
    location: 'Milan, Italy',
    count: '02',
    title: 'Villa Echo',
    desc: 'Large 3-bedroom holiday villa',
    caption_img: '/images/banner_img2.jpg',
    img: '/images/banner_bg2.jpg',
  },
  {
    location: 'Cleveland, United States',
    count: '03',
    title: 'Museum',
    desc: 'Rock and Roll Hall of Fame',
    caption_img: '/images/banner_img3.jpg',
    img: '/images/banner_bg3.jpg',
  },
]
const animationVariants = {
  text: {
    visible: { y: 0, opacity: 1 },
    initial: { y: -40, opacity: 0 },
    exit: { opacity: 0, duration: 0 },
  },
  image: {
    visible: { opacity: 1 },
    initial: { opacity: 0 },
  },
}

function Banner() {
  const animation = useAnimation()
  const slider = useRef(null)
  const slider_caption = useRef(null)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex, newIndex) => setActiveSlideIndex(newIndex),
  }
  const nextSlide = () => {
    if (activeSlideIndex + 1 === bannerData.length) {
      setActiveSlideIndex(0)
    } else {
      setActiveSlideIndex(activeSlideIndex + 1)
    }
    sequence()
  }
  const prevSlide = () => {
    if (activeSlideIndex === 0) {
      setActiveSlideIndex(bannerData.length - 1)
    } else {
      setActiveSlideIndex(activeSlideIndex - 1)
    }
    sequence()
  }
  async function sequence() {
    await animation.set('initial')
    return await animation.start('visible')
  }

  useEffect(() => {
    if (slider.current && slider_caption.current) {
      slider.current.slickGoTo(activeSlideIndex)
      slider_caption.current.slickGoTo(activeSlideIndex)
      sequence()
    }
  }, [activeSlideIndex])
  const firstRender = useRef(true)
  useEffect(() => {
    if (firstRender.current) {
      sequence()
      firstRender.current = false
    }
    // const timer = setInterval(nextSlide, 4000)
    // return () => clearInterval(timer)
  }, [])
  return (
    <div className='nav_container' id='section1'>
      <div className={style.wrapper}>
        <div className={style.inner}>
          <div className={style.slider}>
            <Slider ref={slider} {...settings}>
              {bannerData.map((slide, index) => (
                <div className={style.slide} key={index}>
                  <img
                    src={slide.img}
                    alt={bannerData[activeSlideIndex].title}
                  />
                </div>
              ))}
            </Slider>
            <div className={style.caption_img}>
              <Slider ref={slider_caption} {...settings}>
                {bannerData.map((slide, index) => (
                  <img key={index} src={slide.caption_img} alt={slide.title} />
                ))}
              </Slider>
            </div>
            <div className={style.count}>
              {bannerData[activeSlideIndex].count}
            </div>
            <div className={style.content}>
              <motion.div
                variants={{ ...animationVariants.text }}
                animate={animation}
                initial={'initial'}
                transition={{ type: 'tween', delay: 0.5 }}
                exit={'exit'}
                className={style.location}
              >
                {bannerData[activeSlideIndex].location}
              </motion.div>
              <motion.div
                variants={{ ...animationVariants.text }}
                animate={animation}
                initial={'initial'}
                transition={{ type: 'tween', delay: 0.6 }}
                exit={'exit'}
                className={style.title}
              >
                {bannerData[activeSlideIndex].title}
              </motion.div>
              <motion.div
                variants={{ ...animationVariants.text }}
                animate={animation}
                initial={'initial'}
                transition={{ type: 'tween', delay: 0.7 }}
                exit={'exit'}
                className={style.desc}
              >
                {bannerData[activeSlideIndex].desc}
              </motion.div>
              <motion.div
                variants={{ ...animationVariants.text }}
                animate={animation}
                initial={'initial'}
                transition={{ type: 'tween', delay: 0.8 }}
                exit={'exit'}
              >
                <motion.a href='#section4' className={`${style.btn} btn`}>
                  View Project <ArrowRightIcon />
                </motion.a>
              </motion.div>
            </div>
          </div>
          <div className={style.control}>
            <button onClick={() => prevSlide()}>
              <ArrowLeftIcon />
            </button>
            <button onClick={() => nextSlide()}>
              <ArrowRightIcon />
            </button>
          </div>
          <div className={style.follow}>
            <div className={style.txt}>
              <div>FOLLOW US</div> <div className={style.line}></div>
            </div>
            <div className={style.socials}>
              <a href=''>
                <FacebookIcon />
              </a>
              <a href=''>
                <InstagramIcon />
              </a>
              <a href=''>
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
