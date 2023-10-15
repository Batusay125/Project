import React from 'react'
import './top.css'

import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdNotifications } from 'react-icons/md'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsQuestionDiamondFill } from 'react-icons/bs'

import img from '../../Asset/bored.png'
import video from '../../Asset/video.mp4'
import pic from '../../Asset/photo.png'


const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Eloperedea</h1>

        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard' />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdNotifications className="icon" />
          <div className="adminImage">
            <img src={img} alt="adminImage" />
          </div>
        </div>

      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>rehomo your rabbit</h1>
          <p>this helps you easily list your rabbit in rehoming site</p>

          <div className="buttons flex">
            <button className='btn'>Explore more</button>
            <button className='btn transparent'>most choice rabbit</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">

            <div className="textDiv">
              <h1>my stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small> 10 Requests</small>
                </span>
                <span>
                  This month <br /> <small> 100 Requests</small>
                </span>
              </div>

              <span className="flex link">
                Go to my order <BsArrowRightShort className="icon" />
              </span>
            </div>
            
            <div className="imgDiv">
              <img src={pic} alt="Image Name" />
            </div>

          </div>

          <div className="sideBarCard">
              <BsQuestionDiamondFill className="icon" />
              <div className="cardContent">

                <h3>Help center</h3>
                <button className='btn'>Go to Help Center</button>
              </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Top