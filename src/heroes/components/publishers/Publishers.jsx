import React, { memo} from 'react'
import { useHeroes } from '../../../hooks/useHeroes'
import { NavLink, useNavigate} from 'react-router-dom';
import './publishers.scss'

import marvelImg from '../../../assets/img/marvel.png'
import dcImg from '../../../assets/img/dc.png'
import { DropDown } from '../../../ui/components/dropdown/DropDown';

export const Publishers = memo(() => {
    const {getPublishers} = useHeroes()

    const publishers = getPublishers()

    
    const navigate = useNavigate();

    const handleChangePublisher = (publisher) => {
      navigate(`/${publisher}`, {
        replace: true
      })
    }

  return (
    <>
      <NavLink className="nav-item" to="/marvel">
        <img src={marvelImg} alt="marvel comics"/>
      </NavLink>
      <NavLink className="nav-item" to="/dc">
        <img src={dcImg} alt="dc comics"/>
      </NavLink>

      <DropDown options={publishers} onChange={handleChangePublisher}/>

    </>
  )
})
