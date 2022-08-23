import React from 'react'
import { Link } from 'react-router-dom'
import './herocard.scss'

export const HeroCard = ({
    id,
    name,
    biography,
    powerstats,
    images,
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`

  return (
    <div className='col animate__animated animate__fadeIn'>
        <div className='card'>
                    <img className='card-img' src={images.md} alt={name} />
                <div className='card-container'>
                    <div className='card-body'>
                        <h5 className='card-title'>{name}</h5>
                        <p className='card-text'>{biography.fullName}</p>

                        <Link to={`/hero/${id}`}>
                        <div className='info-button'>
                            <p>More info</p>
                            <span >
                            </span>
                        </div>
                        
                        </Link>

                    </div>
                </div>
        </div>
    </div>
  )
}
