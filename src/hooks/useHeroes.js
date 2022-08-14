import { useContext } from "react"
import { HeroesContext } from "../heroes/context/HeroesContext"

export const useHeroes = () => {
    const {
        state : {heroes, isLoading},
        actions : {getHeroById, getHeroByName,  getHeroesByPublishers, getPublishers,} 
    } = useContext(HeroesContext)

    return {heroes, isLoading, getHeroById, getHeroByName, getHeroesByPublishers, getPublishers}
}