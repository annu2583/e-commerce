import React from 'react'

function Features() {
    let data = [
        {
            img: "./images/icon.png",
            h5: ' Free Shipping',
            p: 'Upgrade your style today and get FREE hipping on all orders! Do not miss out.',
        },


        {
            img: './images/batch.png',
            h5: 'Satisfaction Guarantee',
            p: 'Shop confidently with our Satisfaction Guarantee: Love it or get a refund.',
        },
        {
            img: './images/secure.png',
            h5: 'Secure Payment',
            p: 'Your security is our priority. Your payments are secure with us.',
        },
    ]


    return (
        <>
            <div className='container'>
                <div className='features_section'>
                    {data?.map((index, item) => {
                        return (  

                            <div className='cards'>
                                <img src={index.img} />
                                <div className='info'>
                                    <h5 className='title_section'> {index.h5}</h5>
                                    <p className='font_section'>{index.p}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

        </>
    )
}

export default Features;