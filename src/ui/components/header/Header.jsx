import React, { useLayoutEffect, useState, useRef } from 'react'



import { motion, useScroll, useTransform } from "framer-motion"

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

  
  const ref = useRef(null);
  const { scrollY,scrollYProgress } = useScroll();

  const scaleHero = useTransform(scrollY, [0,1800], [1,1.3]);
  const translateHero = useTransform(scrollY,[0,1800],[0,125]);
  
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

  const variants = {
    hidden: { 
      y: -100,
      opacity: 0.6 ,
      scale: 0.9,
    },
    visible: { 
      y: 0,
      opacity: 1 , 
      scale:1,     
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      }
    },
  }

  return (
    <>
      
    <header ref={ref}>
      <motion.h1
        initial={{opacity:0, y:20}}
        animate={{ opacity: 1, y:0 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.1 }}
      >
        {info.publisher}
      </motion.h1>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={variants}
        style={{scale:scaleHero, translateY:translateHero}} className='headerImg'> 
        <img src={info.img} alt="header"/>
      </motion.div>

      <motion.div className='headerInfo'
        initial={{opacity:0, y:20}}
        animate={{ opacity: 1, y:0 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.1}}
      >
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
      </motion.div>      
    </header>
    <span ></span>
    </>
  )
}
