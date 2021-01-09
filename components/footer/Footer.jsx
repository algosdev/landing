import React from 'react'
import style from './footer.module.scss'
import {
  YMaps,
  Map,
  FullscreenControl,
  SearchControl,
  GeolocationControl,
  ZoomControl,
} from 'react-yandex-maps'
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../svg'

function Footer() {
  return (
    <div className={style.wrapper}>
      <div className={style.inner}>
        <div className={style.content}>
          <div className={style.column}>
            <div className={style.title}>Contacts</div>
            <div className={style.details}>
              <a href=''>929 Plymouth Ave. New York, NY 10011</a>
              <a href=''>1-300-123-1234</a>
              <a href=''>example@example.com</a>
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
            <div className={style.copyright}>
              © 2021 cityscape. All rights reserved.
            </div>
          </div>
          <div className={style.column}>
            <div className={style.leading}>
              Sign up to our newsletter and be the first to know about the
              latest news, special offers, events, and discounts.
            </div>
            <form>
              <div className={style.input_container}>
                <input type='email' placeholder='E-mail' />
              </div>
              <div className={style.btn_container}>
                <button type='submit' className='btn'>
                  Subscribe
                </button>
              </div>
            </form>
            <div className={style.mobile_copyright}>
              © 2021 cityscape. All rights reserved.
            </div>
          </div>
        </div>
        <div className={style.map_container}>
          <YMaps
            query={{
              lang: 'en_RU',
            }}
            apikey=''
          >
            <Map
              defaultState={{ center: [41.29, 69.2], zoom: 10 }}
              className={style.map}
              width='100%'
              height='100%'
            >
              <FullscreenControl />
              <GeolocationControl options={{ float: 'left' }} />
              <ZoomControl options={{ float: 'right' }} />
              <SearchControl options={{ float: 'left' }} />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  )
}

export default Footer
