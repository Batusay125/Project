import React from 'react'
import './listing.css'

import { Link } from "react-router-dom";
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'

import img from '../../../Dashboard Coponents/Asset/pic.png'
import img1 from '../../../Dashboard Coponents/Asset/img2.png'
import img2 from '../../../Dashboard Coponents/Asset/img3.png'
import img3 from '../../../Dashboard Coponents/Asset/pota.png'
import img4 from '../../../Dashboard Coponents/Asset/tatang.png'
import user1 from '../../../Dashboard Coponents/Asset/user1.png'
import user2 from '../../../Dashboard Coponents/Asset/user2.png'
import user3 from '../../../Dashboard Coponents/Asset/user3.png'


const Listing = () => {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>my listings</h1>
        <button className='btn flex'>
          <Link to="/rabbitlist">
          See All <BsArrowRightShort className="icon"/>
          </Link>
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon"/>
          <img src={img} alt="Image Name"/>
          <h3>Brush Rabbit</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon"/>
          <img src={img1} alt="Image Name"/>
          <h3>Brush Rabbit</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon"/>
          <img src={img2} alt="Image Name"/>
          <h3>Brush Rabbit</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon"/>
          <img src={img3} alt="Image Name"/>
          <h3>Brush Rabbit</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Buyers</h3>
            <button className='btn flex'>
              see all<BsArrowRightShort className='icon'/>
            </button>
          </div>
          
          <div className="card flex">
            <div className="users">
              <img src={img4} alt="User Image" />
              <img src={user1} alt="User Image" />
              <img src={user2} alt="User Image" />
              <img src={user3} alt="User Image" />
              
            </div>
            <div className="cardText">
              <span>
                15 rabbit transfer <br />
                <small>
                  21 Buyers <span className="date"> 10 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>featured Buyers</h3>
            <button className='btn flex'>
              see all<BsArrowRightShort className='icon'/>
            </button>
          </div>
          
          <div className="card flex">
            <div className="users">
              <img src={img4} alt="User Image" />
              <img src={user2} alt="User Image" />
              <img src={user3} alt="User Image" />
              <img src={user1} alt="User Image" />
              
            </div>
            <div className="cardText">
              <span>
                15 rabbit transfer <br />
                <small>
                  21 Buyers <span className="date"> 31 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing