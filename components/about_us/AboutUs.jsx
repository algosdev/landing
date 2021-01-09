import React from 'react'
import { MeasureIcon, BuildingIcon, ChairIcon } from '../svg'
import style from './about.module.scss'
function AboutUs() {
  return (
    <div className={style.wrapper}>
      <div className={style.inner}>
        <div className={style.left}>
          <div className={style.content}>
            <div className={style.section_name}>ABOUT US</div>
            <div className={style.title}>We Turn Ideas Into Reality</div>
            <div className={style.desc}>
              We apply innovative design solutions to enhance people’s
              residential well-being and to help workplaces succeed & achieve
              more in the comfortable environments!
            </div>
            <div className={style.leading}>
              All our team collaborates with our clients, across all of our 3
              offices, which are located throughout the US. Our mission is to
              implement the outstanding design ideas and solutions for any
              project we’re working on. During that process, we carefully
              combine client’s guidelines, technical possibilities as well as
              the environmental issues. Engineering and interior design
              solutions that we deliver are usually born after a collaborative
              process.
            </div>
            <div className={style.bottom}>
              <div className={style.item}>
                <BuildingIcon />
                <div className={style.circle}></div>
                <p>Architecture</p>
              </div>
              <div className={style.item}>
                <ChairIcon />
                <div className={style.circle}></div>
                <p>Interiors</p>
              </div>
              <div className={style.item}>
                <MeasureIcon />
                <div className={style.circle}></div>
                <p>Planning</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.content}>
            <div className={style.count}>17</div>
            <div className={style.title}>YEARS</div>
            <div className={style.desc}>OF SUCCESSFUL WORK IN THE MARKET</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
