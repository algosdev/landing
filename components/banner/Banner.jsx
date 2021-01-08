import React from 'react'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from '../svg'
import style from './banner.module.scss'
function Banner() {
  return (
    <div className={style.wrapper}>
      <div className={style.inner}>
        <div className={style.slider}>
          <img src='/images/banner_bg1.jpg' alt='Banner' />
          <div className={style.main}>
            <div className={style.caption_img}>
              <img src='/images/banner_img1.jpg' alt='Banner image' />
            </div>
            <div className={style.count}>01</div>
            <div className={style.content}>
              <div className={style.location}>Hangzhou, China</div>
              <div className={style.title}>2100 Club</div>
              <div className={style.desc}>The world’s first blockchain bar</div>
              <a className={`${style.btn} btn`}>
                View Project <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
        <div className={style.control}>
          <button>
            <ArrowLeftIcon />
          </button>
          <button>
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
