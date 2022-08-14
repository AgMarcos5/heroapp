import React from 'react'
import { HeroList } from '../components/HeroList'
import { useParams } from 'react-router-dom'

export const HeroByPublisherPage = () => {
    const {publisher} = useParams();
    return (
        <>
          <HeroList publisher={publisher}/>
        </>
    )
}
