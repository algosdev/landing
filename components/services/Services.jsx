import React from 'react'
import { BuildingIcon, BrickIcon, PencilIcon, BuildPencilIcon } from '../svg'
import style from './services.module.scss'
function Services() {
  return (
    <div className={style.wrapper}>
      <div className='container'>
        <div className={style.section_name}>OUR SERVICES</div>
        <div className={style.title}>Construction Solutions</div>
        <div className={style.inner}>
          <div className={style.left}>
            <div className={style.img}>
              <img src='/images/services.jpg' alt='Services' />
            </div>
          </div>
          <div className={style.right}>
            <div className={style.leading}>
              The first thing we do is meeting with our clients and talk through
              their goals on a future project. During this meeting, feel free to
              communicate your ideas and ask lots of questions. This stage is
              highly decisive as you can evaluate the work of your potential
              architect by browsing their portfolio.
            </div>
            <div className={style.bottom}>
              We focus on the problem, the question and the solution. And we
              always think ahead.
            </div>
          </div>
        </div>
        <div className={style.grid}>
          <div className={style.item}>
            <BrickIcon />
            <div className={style.title}>Construction Services</div>
            <div className={style.leading}>
              Our customers love the pace/quality tempo that we show during each
              of the principal construction processes! We're comfortable with
              any idea of our clients.
            </div>
          </div>
          <div className={style.item}>
            <BuildingIcon />
            <div className={style.title}>Construction Management</div>
            <div className={style.leading}>
              Our customers love the pace/quality tempo that we show during each
              of the principal construction processes! We're comfortable with
              any idea of our clients.
            </div>
          </div>
          <div className={style.item}>
            <BuildPencilIcon />
            <div className={style.title}>Design-Build</div>
            <div className={style.leading}>
              Our customers love the pace/quality tempo that we show during each
              of the principal construction processes! We're comfortable with
              any idea of our clients.
            </div>
          </div>
          <div className={style.item}>
            <PencilIcon />
            <div className={style.title}>General Contracting</div>
            <div className={style.leading}>
              Our customers love the pace/quality tempo that we show during each
              of the principal construction processes! We're comfortable with
              any idea of our clients.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
