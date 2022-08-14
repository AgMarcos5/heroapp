import React from 'react'
import { Link } from 'react-router-dom'

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
            <div className='row no-glutters'>
                <div className='col-4'>
                    <img className='card-img' src={images.sm} alt={name} />
                </div>
                <div className='col-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{name}</h5>
                        <p className='card-text'>{biography.fullName}</p>
                        <p>{JSON.stringify(powerstats)}</p>
                        <p className='card-text'>
                            <small className='text-muted'>
                                {biography.firstAppearance}
                            </small>
                        </p>

                        <Link to={`/hero/${id}`}>
                            More info
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
