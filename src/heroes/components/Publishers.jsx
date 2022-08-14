import React, { memo} from 'react'
import { useHeroes } from '../../hooks/useHeroes'
import { NavLink} from 'react-router-dom';

export const Publishers = memo(() => {
    const {getPublishers} = useHeroes()

    const publishers = getPublishers()
    console.log(publishers)

  return (
    <>
    {
        publishers?.map( publisher => (
            <NavLink className="nav-item " to={`/${publisher}`}
                    >
                        {publisher}
            </NavLink>

        ))
    }
        <hr/>
    </>
  )
})
