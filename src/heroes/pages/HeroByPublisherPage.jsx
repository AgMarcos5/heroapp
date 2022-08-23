import React from 'react'
import { HeroList } from '../components/HeroList'
import { useParams } from 'react-router-dom'
import { Header } from '../../ui/components/header/Header';

export const HeroByPublisherPage = () => {
    const {publisher} = useParams();
    return (
        <>
          <Header publisher={publisher}/>
          <HeroList publisher={publisher}/>
        </>
    )
}
