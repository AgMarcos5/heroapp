import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useHeroes } from '../../hooks/useHeroes'
import { Pagination } from '../../ui/components/pagination/Pagination'
import { HeroCard } from './heroCard/HeroCard'
import { Publishers } from './publishers/Publishers'
import { SortHeroes } from './sort/SortHeroes'

import './herolist.scss'
import { useViewport } from '../../hooks/useViewport'
import { useNavigate } from 'react-router-dom'
import { DropDown } from '../../ui/components/dropdown/DropDown'

import filter from '../../assets/img/filter.webp'

const sortPowerStats = ["intelligence","strength","speed","durability","power","combat"]


export const HeroList = ({publisher}) => {

  const {getPublishers, getHeroesByPublishers} = useHeroes()
  
  const publishers = getPublishers()

  const heroes = getHeroesByPublishers(publisher)

  const [sort,setSort] = useState(sortPowerStats[0]);
  const {counter,decrement,increment} = useCounter(1)

  const maxHeroes = 20

  const sortedHeroes = useMemo( () => {
    switch(sort) {
        case sortPowerStats[0] : return heroes?.sort((a,b) => b.powerstats.intelligence - a.powerstats.intelligence);
        case sortPowerStats[1] : return heroes?.sort((a,b) => b.powerstats.strength - a.powerstats.strength);
        case sortPowerStats[2] : return heroes?.sort((a,b) => b.powerstats.speed - a.powerstats.speed);
        case sortPowerStats[3] : return heroes?.sort((a,b) => b.powerstats.durability - a.powerstats.durability);
        case sortPowerStats[4] : return heroes?.sort((a,b) => b.powerstats.power - a.powerstats.power);
        case sortPowerStats[5] : return heroes?.sort((a,b) => b.powerstats.combat - a.powerstats.combat);
        
        default : return heroes;
    }
  },[heroes,sort])

  const lastPage = Math.ceil(sortedHeroes?.length / maxHeroes);

  
  const navigate = useNavigate();

  const handleChangePublisher = (publisher) => {
    navigate(`/${publisher}`)
  }
  
  const {width} = useViewport() 

  const [showFilter,setShowFilter] = useState(false)

  return (
    <>
    <div className='publishersNav'>
    {
      width < 1070 ? 
      (<>
        {/* Mobile navbar */}
        <div className="navOptions">
          <Publishers onChange={handleChangePublisher}/>
          <div style={{display: 'flex'}}>
          <Pagination page={counter} decrement={decrement} increment={increment} lastPage={lastPage}/>
          <button className="filter" onClick={() => setShowFilter(!showFilter)}> 
                <img src={filter} alt="filter"/> 
          </button>
          </div>
        </div>
        <div className={`navOptions ${showFilter ? "" : "hide"}`}>
          <DropDown options={publishers} onChange={handleChangePublisher} text="Select publisher"/>
          <SortHeroes active={sort} onChange={setSort}/>
        </div>
      </>)
      :
      (<>
        <div className="navOptions">
          <Publishers onChange={handleChangePublisher}/>
          <DropDown options={publishers} onChange={handleChangePublisher} text="Select publisher"/>
        </div>
        <div className="navOptions">
          <SortHeroes active={sort} onChange={setSort}/>
          <Pagination page={counter} decrement={decrement} increment={increment} lastPage={lastPage}/>
        </div>
      </>)
    }
      
    </div>


    <div className='heroesContainer'>
        {
            sortedHeroes
            ?.slice( (counter-1)*maxHeroes , (counter-1)*maxHeroes + maxHeroes )
            .map( hero => (
                <HeroCard key={hero.id} {...hero}/>
            ))
        }
    </div>
    </>
  )
}
