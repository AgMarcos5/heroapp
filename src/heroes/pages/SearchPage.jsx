import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

import queryString from 'query-string'
import { HeroCard } from "../components/heroCard/HeroCard";
import { useHeroes } from "../../hooks/useHeroes";

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
      <h1>Search</h1>
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
            Search a hero
          </div>

          {
            !heroes?.length && q!== '' && (
              <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
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
