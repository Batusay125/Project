import React, {useState} from "react"
import './login.css'
import { Link,  useNavigate } from 'react-router-dom'
import Axios from 'axios'

// assets of motherfucker

import video from './LoginAsset/video.mp4'
import rabbit from './LoginAsset/rabbit.png'
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdOutlineAlternateEmail} from 'react-icons/md'

const Register = () => {

   
    //holds the input
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const navigateTo = useNavigate()

    //onclick mf
    const createUser = (e)=>{

        e.preventDefault()

        Axios.post('http://localhost:3002/register', {

            Email: email,
            UserName: userName,
            Password: password

        }).then(()=>{
            //register page to login page
            navigateTo('/')

            //clear the fields
            setEmail('')
            setUserName('')
        })
    }


    return(
        <div className='registerPage flex'>
        <div className="container flex">

             <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
                <h2 className='title'>Rehoming Process for rabbit</h2>
                <p>Adopt rabbit now!!</p>
            </div>

            <div className="footerDiv flex">
                <span className="text">Have an account</span>
                <Link to={'/'}>
                <button className='btn'>Login</button>
                </Link>
            </div>
    </div> 

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={rabbit} alt="Logo Image" />
                    <h3>Let Us Know Who the Fuck You Are!</h3>
                </div>

                <form action="" className='form grid'>
                    

                    <div className="inputDiv">
                        <label htmlFor="email">Email</label>
                        <div className="input flex">
                            <MdOutlineAlternateEmail className='icon'/>
                            <input type="email" id='email' placeholder='Enter Email' onChange={(event) => {
                                setEmail(event.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                            <FaUserShield className='icon'/>
                            <input type="text" id='username' placeholder='Enter Name' onChange={(event) => {
                                setUserName(event.target.value)
                            }}/>
                        </div>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                            <BsFillShieldLockFill className='icon'/>
                            <input type="password" id='password' placeholder='Enter Password' onChange={(event) => {
                                setPassword(event.target.value)
                            }}/>
                        </div>
                    </div>

                    <button type='submit' className='btn flex' onClick={createUser}>
                        <span> 
                            Register 
                            </span>
                        <AiOutlineSwapRight className='icon'/>
                    </button>

                    <span className="forgetPassword">
                        Forgat your password? <a href="">Click</a>
                    </span>

                </form>
            </div>

        </div>
        </div>
    )
}

export default Register