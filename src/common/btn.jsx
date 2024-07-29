import React from 'react'

const Btn = (props) => {
    console.log(props.btnicon)
    return (
        <>
            <button className='coll_btn'>View Collection
                <img src='./images/btn_vector.png' />
            </button>
     
        </>
    )
}

export default Btn