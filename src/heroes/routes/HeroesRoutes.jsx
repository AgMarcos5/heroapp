import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { SearchPage } from '../pages/SearchPage'
import { HeroPage } from '../pages/HeroPage'
import { HeroesProvider } from '../context/HeroesProvider'
import { HeroByPublisherPage } from '../pages/HeroByPublisherPage'
import { Navbar } from '../../ui/components/navbar/NavBar'


export const HeroesRoutes = () => {
  return (    
   <HeroesProvider>
        <div className='container'>
        <Navbar/>
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
