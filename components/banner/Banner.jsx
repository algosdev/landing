import next from 'next'
import { useState, useEffect } from 'react'
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
    exit: { opacity: 0 },
  },
  image: {
    visible: { opacity: 1 },
    iniital: { opacity: 0 },
    exit: { opacity: 0 },
  },
}
const settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
}
function Banner() {
  const animation = useAnimation()
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const nextSlide = () => {
    if (activeSlideIndex + 1 === bannerData.length) {
      setActiveSlideIndex(0)
    } else {
      setActiveSlideIndex(activeSlideIndex + 1)
    }
  }
  const prevSlide = () => {
    if (activeSlideIndex === 0) {
      setActiveSlideIndex(bannerData.length - 1)
    } else {
      setActiveSlideIndex(activeSlideIndex - 1)
    }
  }
  async function sequence() {
    await animation.start('exit')
    await animation.start('initial')
    return await animation.start('visible')
  }
  useEffect(() => {
    sequence()
  }, [activeSlideIndex])
  console.log(activeSlideIndex)
  return (
    <div className={style.wrapper}>
      <div className={style.inner}>
        <div className={style.slider}>
          <img
            // variants={{ ...animationVariants.image }}
            // animate={animation}
            // initial={'initial'}
            // transition={{ type: 'tween' }}
            // exit={'exit'}
            src={bannerData[activeSlideIndex].img}
            alt={bannerData[activeSlideIndex].title}
          />
          <div className={style.caption_img}>
            <img
              // variants={{ ...animationVariants.image }}
              // animate={animation}
              // initial={'initial'}
              // transition={{ type: 'tween' }}
              // exit={'exit'}
              src={bannerData[activeSlideIndex].caption_img}
              alt={bannerData[activeSlideIndex].title}
            />
          </div>
          <div className={style.count}>
            {bannerData[activeSlideIndex].count}
          </div>
          <div className={style.content}>
            <motion.div
              variants={{ ...animationVariants.text }}
              animate={animation}
              initial={'initial'}
              transition={{ type: 'tween' }}
              exit={'exit'}
              className={style.location}
            >
              {bannerData[activeSlideIndex].location}
            </motion.div>
            <motion.div
              variants={{ ...animationVariants.text }}
              animate={animation}
              initial={'initial'}
              transition={{ type: 'tween' }}
              exit={'exit'}
              className={style.title}
            >
              {bannerData[activeSlideIndex].title}
            </motion.div>
            <motion.div
              variants={{ ...animationVariants.text }}
              animate={animation}
              initial={'initial'}
              transition={{ type: 'tween' }}
              exit={'exit'}
              className={style.desc}
            >
              {bannerData[activeSlideIndex].desc}
            </motion.div>
            <motion.div
              variants={{ ...animationVariants.text }}
              animate={animation}
              initial={'initial'}
              transition={{ type: 'tween' }}
              exit={'exit'}
            >
              <motion.a className={`${style.btn} btn`}>
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
  )
}

export default Banner
