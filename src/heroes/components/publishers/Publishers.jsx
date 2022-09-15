import React, { memo, useState} from 'react'
import { useHeroes } from '../../../hooks/useHeroes'
import { NavLink, useNavigate} from 'react-router-dom';
import './publishers.scss'

import marvelImg from '../../../assets/img/marvel.webp'
import dcImg from '../../../assets/img/dc.webp'

import marvelImgHover from '../../../assets/img/marvel_hover.webp'
import dcImgHover from '../../../assets/img/dc_hover.webp'

import { DropDown } from '../../../ui/components/dropdown/DropDown';

export const Publishers = memo(({publishers, onChange}) => {

    const [hover,setHover] = useState('')
    
    //const {getPublishers} = useHeroes()

    //const publishers = getPublishers()

    

  return (
    <div className='publishers-container'>
      <NavLink className="nav-item" to="/marvel">
        <img onMouseOver={()=>setHover('marvel')} onMouseOut={()=>setHover('')} alt="marvel comics" 
          src={hover === 'marvel' ? marvelImgHover : marvelImg } 
        />
      </NavLink>
      <NavLink className="nav-item" to="/dc">
        <img onMouseOver={()=>setHover('dc')} onMouseOut={()=>setHover('')} alt="dc comics"
          src={hover === 'dc' ? dcImgHover : dcImg } 
        />
      </NavLink>


    </div>
  )
})
