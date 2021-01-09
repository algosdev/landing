import React from 'react'
import { ArrowRightIcon } from '../svg'
import style from './contact.module.scss'
function ContactForm() {
  return (
    <div className={style.wrapper}>
      <div className={style.inner}>
        <div className={style.section_name}>CONTACT OUR TEAM</div>
        <div className={style.title}>Get in Touch</div>
        <div className={style.desc}>
          Looking forward to building your own residential or commercial
          property? Feel free to contact us using the form below to discuss
          additional details of your project with our managers so that our team
          could get started with your project right away.
        </div>
        <form>
          <div className={style.input_container}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='Type your name here' />
          </div>
          <div className={style.input_container}>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' placeholder='Type your email here' />
          </div>
          <div className={style.input_container}>
            <label htmlFor='message'>Message</label>
            <textarea
              type='text'
              id='message'
              rows='4'
              placeholder='Type your message here'
            ></textarea>
          </div>
          <div className={style.btn_container}>
            <button type='submit' className='btn'>
              Send <ArrowRightIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
