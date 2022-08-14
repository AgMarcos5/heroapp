import React from 'react'
import { Navbar } from '../../ui/components/NavBar'
import { Routes, Route, Navigate } from 'react-router-dom'
import { SearchPage } from '../pages/SearchPage'
import { HeroPage } from '../pages/HeroPage'
import { HeroesProvider } from '../context/HeroesProvider'
import { HeroByPublisherPage } from '../pages/HeroByPublisherPage'

export const HeroesRoutes = () => {
  return (    
   <HeroesProvider>
        <Navbar/>
        <div className='container'>
        <Routes>
            <Route path='/:publisher' element={<HeroByPublisherPage/>}/>
            <Route path='search' element={<SearchPage/>}/>
            <Route path='hero/:heroId' element={<HeroPage/>}/>
            <Route path='/' element={<Navigate to='/marvel'/>} />
        </Routes>
        </div>
   </HeroesProvider>
  )
}
