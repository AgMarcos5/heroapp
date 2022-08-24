import React, { memo, useState} from 'react'
import { useHeroes } from '../../../hooks/useHeroes'
import { NavLink, useNavigate} from 'react-router-dom';
import './publishers.scss'

import marvelImg from '../../../assets/img/marvel.png'
import dcImg from '../../../assets/img/dc.png'

import marvelImgHover from '../../../assets/img/marvel_hover.png'
import dcImgHover from '../../../assets/img/dc_hover.png'

import { DropDown } from '../../../ui/components/dropdown/DropDown';

export const Publishers = memo(() => {

    const [hover,setHover] = useState('')
    const {getPublishers} = useHeroes()

    const publishers = getPublishers()

    
    const navigate = useNavigate();

    const handleChangePublisher = (publisher) => {
      navigate(`/${publisher}`)
    }

  return (
    <>
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

      <DropDown options={publishers} onChange={handleChangePublisher} text="Select publisher"/>

    </>
  )
})
