import { useState, useEffect } from 'react'
import style from './header.module.scss'
import { PhoneIcon } from '../svg'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import Scrollspy from 'react-scrollspy'
const navListData = ['HOME', 'ABOUT', 'OUR SERVICES', 'PROJECTS', 'CONTACT US']
function NavBar() {
  const [isOnTop, setIsOnTop] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const animation = useAnimation()
  useEffect(() => {
    if (window) {
      setIsOnTop(window.scrollY <= 0 ? true : false),
        window.addEventListener('scroll', () =>
          setIsOnTop(window.scrollY <= 0 ? true : false)
        )
    }
    return () => {
      window.removeEventListener('scroll', () => {})
    }
  })
  useEffect(() => {
    if (isOpen) {
      animation.start('open')
      //   document.body.style.overflowY = 'hidden'
    } else {
      animation.start('stable')
      //   document.body.style.overflowY = 'scroll'
    }
  }, [isOpen])

  return (
    <div className={`${style.wrapper} ${isOnTop ? style.transparent : ''}`}>
      <div className='container navbar'>
        <div className={style.inner}>
          <div className={style.hamburger_cont}>
            <div
              className={style.line_container}
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                className={style.line}
                variants={{
                  open: {
                    opacity: 1,
                    rotate: 45,
                    y: 8,
                  },
                  stable: {
                    opacity: 1,
                    rotate: 0,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.3,
                  type: 'twin',
                }}
                animate={animation}
                initial={'stable'}
              ></motion.div>
              <motion.div
                className={style.line}
                variants={{
                  open: {
                    opacity: 0,
                    x: -30,
                  },
                  stable: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                transition={{
                  duration: 0.3,
                  type: 'twin',
                }}
                animate={animation}
                initial={'stable'}
              ></motion.div>
              <motion.div
                className={style.line}
                variants={{
                  open: {
                    opacity: 1,
                    rotate: -45,
                    y: -8,
                  },
                  stable: {
                    opacity: 1,
                    rotate: 0,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.3,
                  type: 'twin',
                }}
                animate={animation}
                initial={'stable'}
              ></motion.div>
            </div>
          </div>

          <div className={style.logo}>
            <img src='/images/logo.png' alt='Logo' />
          </div>
          {/* <ul className={style.navlist}> */}
          <Scrollspy
            className={style.navlist}
            items={['section1', 'section2', 'section3', 'section4', 'section5']}
            currentClassName={style.active}
          >
            {navListData.map((item, index) => (
              <li key={index}>
                <a href={`#section${index + 1}`}>{item}</a>
              </li>
            ))}
          </Scrollspy>
          {/* </ul> */}
          <div className={style.phoneNum}>
            <PhoneIcon /> <span>{'+1-300-123-1234'}</span>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: -300 }}
              exit={{ x: -300 }}
              transition={{ type: 'tween' }}
              className={style.mobile_menu}
            >
              <Scrollspy
                items={[
                  'section1',
                  'section2',
                  'section3',
                  'section4',
                  'section5',
                ]}
                currentClassName={style.active}
              >
                {navListData.map((item, index) => (
                  <li
                    className={false ? style.active : ''}
                    key={index}
                    onClick={() => setIsOpen(false)}
                  >
                    <a href={`#section${index + 1}`}>{item}</a>
                  </li>
                ))}
              </Scrollspy>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default NavBar
