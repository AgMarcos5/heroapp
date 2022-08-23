import React, { useEffect, useLayoutEffect, useState } from 'react'

import spidermanImg from "../../../assets/img/spiderman.png"
import batmanImg from "../../../assets/img/batman.png"

import './header.scss'

const data = [
  {
    publisher: "Marvel Comics",
    hero: {
      name: "Spider-Man",
      "powerstats": {
        "intelligence": 90,
        "strength": 55,
        "speed": 67,
        "durability": 75,
        "power": 74,
        "combat": 85
      }
    },
    img: spidermanImg,
  },
  {
    publisher: "DC Comics",
    hero: {
      name: "Batman",
      "powerstats": {
        "intelligence": 81,
        "strength": 40,
        "speed": 29,
        "durability": 55,
        "power": 63,
        "combat": 90
      }
    },
    img: batmanImg,
  }
]


export const Header = ({publisher}) => {

  const [index,setIndex] = useState(0)

  const [info,setInfo] = useState(data[0])
  
  useLayoutEffect( () => {
    if(publisher.toLowerCase().includes("dc"))
    {
      setIndex(1)
      setInfo(data[1])
    }
    else if(publisher.toLowerCase().includes("marvel"))
    {
      setIndex(0)
      setInfo(data[0])
    }
    else {
      setIndex(Math.floor(Math.random()*2))      
      setInfo(data[Math.floor(Math.random()*2)])
    }
  }, [publisher])

  return (
    <header>
      <h1>{info.publisher}</h1>
      <div className='headerImg'>
        <img src={info.img} alt="header"/>
      </div>
      <div className='headerInfo'>
        <h2>
          {info.hero.name}
        </h2>
        <ul>
          <li>Intelligence: {info.hero.powerstats.intelligence}</li>
          <li>Strength: {info.hero.powerstats.strength}</li>
          <li>Speed: {info.hero.powerstats.speed}</li>
          <li>Durability: {info.hero.powerstats.durability}</li>
          <li>Power: {info.hero.powerstats.power}</li>
          <li>Combat: {info.hero.powerstats.combat}</li>
        </ul>
      </div>      
    </header>
  )
}
