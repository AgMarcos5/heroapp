import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useHeroes } from '../../hooks/useHeroes'
import { Pagination } from '../../ui/components/Pagination'
import { HeroCard } from './HeroCard'
import { Publishers } from './Publishers'
import { SortHeroes } from './SortHeroes'

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
    <Publishers/>
    <div className="products_menu">
        <span><SortHeroes active={sort} onChange={setSort} /></span>
        <span><Pagination page={counter} decrement={decrement} increment={increment} lastPage={lastPage}/></span>
    </div>
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
      
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
