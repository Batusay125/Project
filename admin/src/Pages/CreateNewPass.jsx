import React from 'react'


import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdOutlineAlternateEmail} from 'react-icons/md'

const CreateNewPass = () => {
    return(
        <div className='registerPage flex'>
        <div className="container flex">

        
            <div className="formDiv flex">
                <div className="headerDiv">
                    <h3>Create New Password</h3>
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
                        <label htmlFor="username">Password</label>
                        <div className="input flex">
                            <FaUserShield className='icon'/>
                            <input type="text" id='password' placeholder='Enter Password' onChange={(event) => {
                                setUserName(event.target.value)
                            }}/>
                        </div>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="password">Confirm Password</label>
                        <div className="input flex">
                            <BsFillShieldLockFill className='icon'/>
                            <input type="password" id='password' placeholder='Enter Password' onChange={(event) => {
                                setPassword(event.target.value)
                            }}/>
                        </div>
                    </div>

                    <button type='submit' className='btn flex'>
                        <span> 
                            Change 
                            </span>
                        <AiOutlineSwapRight className='icon'/>
                    </button>

                </form>
            </div>

        </div>
        </div>
    )
}

export default CreateNewPass