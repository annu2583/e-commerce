import React from 'react'

const Sidebar = () => {
    let links = [
        {
            name: "Home"
        },
        {
            name: "Categories",
            img : './images/vector.png'
        },
        {
            name: "About"
        },
        {
            name: "Contact"
        }

    ]
    return (
        <div className='side_bar'>
            <img src='./images/cross.png'/>
            <ul>
            {links?.map((item,index)=>{
                                return(
                                    <li className='nav_menu'>
                                    <a className='link' href='#'>{item.name}</a>
                                    <img src={item.img}/>
                                </li>
                                )
                            })} 
          
                     
            </ul>
        </div>
    )
}

export default Sidebar
    