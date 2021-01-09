import React from 'react'
import style from './team.module.scss'
import Fade from 'react-reveal/Fade'
const teamData = [
  {
    img: '/images/member1.jpg',
    fullname: 'Steven Hodges',
    position: 'FOUNDER / ARCHITECT',
  },
  {
    img: '/images/member2.jpg',
    fullname: 'Anna Miller',
    position: 'LEAD INTERIOR DESIGNER',
  },
  {
    img: '/images/member3.jpg',
    fullname: 'Emma Collins',
    position: 'ENGINEER',
  },
  {
    img: '/images/member4.jpg',
    fullname: 'Phillip Bennett',
    position: 'BUILDING CONTRACTOR',
  },
]

function OurTeam() {
  return (
    <div className={style.wrapper}>
      <div className='container'>
        <div className={style.inner}>
          <Fade left={true}>
            <div className={style.header}>
              <div className={style.section_name}>OUR TEAM</div>
              <div className={style.title}>Meet our team members</div>
            </div>
          </Fade>
          {teamData.map((member, index) => (
            <Fade left={index % 2 === 1} right={index % 2 === 0} key={index}>
              <div className={style.member} key={index}>
                <img src={member.img} alt={member.fullname} />
                <div className={style.details}>
                  <div className={style.fullname}>{member.fullname}</div>
                  <div className={style.position}>{member.position}</div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTeam
