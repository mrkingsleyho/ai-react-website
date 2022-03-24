import React from 'react'
import { FaDatabase, FaAsterisk, FaAccusoft, } from 'react-icons/fa'
import './HeroStyles.css'
import ai from '../assest/ai.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                    <div className='col-1'>
                        <h1>Artifical Intelligence for</h1>
                        <h1><span className='primary-color'>startups</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
                            Architecto iure fuga deleniti sit! Cum doloribus, nesciunt
                            laboriosam eos praesentium veritatis!
                        </p>
                        <div className='used-by'>
                            <p>USED BY</p>
                            <div className='icons'>
                                <i><FaDatabase /> Staxx</i>
                                <i><FaAsterisk /> Star AI</i>
                                <i><FaAccusoft /> Accusoft</i>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <img src={ai} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
