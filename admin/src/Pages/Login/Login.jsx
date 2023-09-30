import React, {useEffect, useState} from 'react'
import './Login.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

// assets of motherfucker

import video from '../LoginAsset/video.mp4'
import logo from '../LoginAsset/logo.png'
import rabbit from '../LoginAsset/rabbit.png'
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'



const Login = () => {

    const [loginUserName, setLoginUserName] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const navigateTo = useNavigate()

    const [loginStatus, setLoginStatus] = useState('')
    const [statusHolder, setstatusHolder] = useState('message')

    const loginUser = (e)=>{

        e.preventDefault();

        Axios.post('http://localhost:3002/login', {

            LoginUserName: loginUserName,
            LoginPassowrd: loginPassword

        }).then((response)=>{
            console.log()

            if(response.data.message || loginUserName == '' || loginPassword == ''){
                navigateTo('/')// navigate to login page
                setLoginStatus('Credential Dont Exist ')
            }
            else{
                navigateTo('/dashboard') // if the credebntial match in db
            }
        })
    }

    useEffect(()=>{
        if(loginStatus !== '') {
            setstatusHolder('showMessage')//show vessage
            setTimeout(()=>{
                setstatusHolder('message')//hide mofo message
            }, 4000);
        }
    }, [loginStatus])


    const onSubmit = ()=>{
        setLoginUserName('')
        setLoginPassword('')
    }

    return(
        <div className='loginPage flex'>
        <div className="container flex">

             <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
                <h2 className='title'>Rehoming Process for rabbit</h2>
                <p>Adopt rabbit now!!</p>
            </div>

            <div className="footerDiv flex">
                <span className="text">Don't have account</span>
                <Link to={'/register'}>
                <button className='btn'> Sign Up</button>
                </Link>
            </div>
    </div> 

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={rabbit} alt="Logo Image" />
                    <h3>Welcome!!</h3>
                </div>

                <form className='form grid' onSubmit={onSubmit}>
                    <span className={statusHolder}>{loginStatus}</span>

                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                            <FaUserShield className='icon'/>
                            <input type="text" id='username' placeholder='Enter Name' onChange={(event) => {
                                setLoginUserName(event.target.value)
                            }}/>
                        </div>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                            <BsFillShieldLockFill className='icon'/>
                            <input type="password" id='password' placeholder='Enter Password' onChange={(event) => {
                                setLoginPassword(event.target.value)
                            }}/>
                        </div>
                    </div>

                    <button type='submit' className='btn flex' onClick={loginUser}>
                        <span> 
                            Login 
                            </span>
                        <AiOutlineSwapRight className='icon'/>
                    </button>

                    <span className="forgetPassword">
                        Forgat your password? <a href="">Click</a>

                    </span>

                </form>

                <div className="rehomeSite">
                    <button className='btn2'>User Site</button>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Login