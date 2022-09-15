import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { motion} from "framer-motion"

import queryString from 'query-string'
import { HeroCard } from "../components/heroCard/HeroCard";
import { useHeroes } from "../../hooks/useHeroes";

import groot1 from '../../assets/img/groot1.webp'
import groot2 from '../../assets/img/groot2.webp'

import './searchpage.scss'

export const SearchPage = () => {
  const {getHeroByName} = useHeroes()
  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse( location.search)

  const heroes = useMemo(() => getHeroByName(q), [q])

  const {searchText,onInputChange} = useForm({
    searchText: q
  })


  const onSearchSubmit = (e) => {
    e.preventDefault();
    if(searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`)
  }

  return (
    <div className="search_page">
        <div className="search-container">
          <form
            onSubmit={onSearchSubmit}
          >
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button> Search</button>
          </form>
        </div>

        <div className="results">
        

          <div 
            className="alert alert-primary"
            style={{display: q === '' ? '' : 'none'}}
          >
          
          <motion.div 
            initial={{y: 10,opacity: .6}}
            animate={{y: 0,opacity: 1}}
          >
            <p>Search a hero</p>
            <img src={groot1} alt="groot"/>
            
          </motion.div>
          </div>

          


          {
            !heroes?.length && q!== '' && (
              <motion.div 
                initial={{y: 10,opacity: .6}}
                animate={{y: 0,opacity: 1}}
              >
              <div className="alert alert-danger">
                <p>No hero with <b>{q}</b></p>
                <img src={groot2} alt="groot"/>
              </div>
              </motion.div>
            )
          }
        
          {
            heroes?.map(
              hero => <HeroCard key={hero.id} {...hero}/>
            )
          }

        </div>
        
    </div>
  );
};
