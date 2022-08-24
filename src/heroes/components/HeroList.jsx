import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useHeroes } from '../../hooks/useHeroes'
import { Pagination } from '../../ui/components/pagination/Pagination'
import { HeroCard } from './heroCard/HeroCard'
import { Publishers } from './publishers/Publishers'
import { SortHeroes } from './sort/SortHeroes'

import './herolist.scss'

const sortPowerStats = ["intelligence","strength","speed","durability","power","combat"]


export const HeroList = ({publisher}) => {

  const {getHeroesByPublishers} = useHeroes()
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

  
  return (
    <>
    <div className='publishersNav'>
      <div className="navOptions">
        <Publishers/>
      </div>
      <div className="navOptions">
        <SortHeroes active={sort} onChange={setSort}/>
        <Pagination page={counter} decrement={decrement} increment={increment} lastPage={lastPage}/>
      </div>
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
