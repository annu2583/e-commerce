import React from 'react'
import Btn from '../../common/btn';

function Banner() {


    const data = "hello"
    return (
        <>

            <div className='hero_section'>
                <div className='container'>
                    <div className='banner_section'>
                        <div className='hero_left'>
                            <div className='hero_info'>
                                <h2 className='hero_title'>Fresh Arrivals Online</h2>
                                <p className='content'>Discover Our Newest Collection Today.</p>
                            </div>
                    <Btn/>
                        </div>
                        <div className='hero_image'>
                            <div className='banner_bg'>
                            <img className='burst' src='./images/Burst.png'/>
                            </div>
                            <img className='ellipse' src='./images/Ellipse.png' />
                            <img className='heroic_img' src='./images/Hero_img.png' />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}


export default Banner;