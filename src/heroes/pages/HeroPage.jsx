import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react'
import { useParams } from 'react-router-dom'
import { useHeroes } from '../../hooks/useHeroes';
import { Donut } from '../../ui/components/donut/Donut';
import './heropage.scss'

export const HeroPage = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 800], [0, -10]);
  const rotateY = useTransform(x, [0, 800], [0, 10]);

  
  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const handleMouseOut = () => {
    x.set(0);
    y.set(0);
  }

  const {heroId} = useParams();
  const {isLoading,getHeroById} = useHeroes();
  const hero = getHeroById(parseInt(heroId))


  return (
    <motion.div className="hero_page" 
        initial={{opacity:0, y:20}}
        animate={{ opacity: 1, y:0 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.05 }}
    >
      {!isLoading && (
        <>
          <div className="col-1"
          style={{
                display: "flex",
                placeItems: "center",
                placeContent: "center",
                perspective: 600
            }}
            onMouseMove={handleMouse}
            onMouseOut={handleMouseOut}
          >
            <motion.div className="card"
            style={{
                    rotateX: rotateX,
                    rotateY: rotateY
                }}
            >
              <img className="card-img" src={hero.images.lg} alt={hero.name} />
              <div className="card-container">
                <div className="card-body">
                  <h1 className="card-title">{hero.name}</h1>
                  <p className="card-text">{hero.biography.fullName}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-2">
            <h1 className="card-title">{hero.name}</h1>
            <p className="card-text">{hero.biography.fullName}</p>
            <div className="publisher">
              
              <table className="table-container" width="100%" role="table">
                <tbody>
                  <tr className="flex-table row" role="rowgroup">
                    <td className="flex-row first" role="cell">
                      <b>First appearance</b>
                    </td>
                    <td className="flex-row" role="cell">
                      {hero.biography.firstAppearance}
                    </td>
                  </tr>

                  <tr className="flex-table row" role="rowgroup">
                    <td className="flex-row first" role="cell">
                      <b>Publisher</b>
                    </td>
                    <td className="flex-row" role="cell">
                      {hero.biography.publisher}
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
            <div className="appearance">
              <span>{hero.appearance.gender}</span>
              <span>{hero.appearance.race}</span>
              <span>{hero.appearance.height[1]}</span>
              <span>{hero.appearance.weight[1]}</span>
            </div>
            <div className="powerstats">
              <b>Power stats</b>
              <Donut series={Object.values(hero.powerstats)} />
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}


/*
   <div className='row mt-5'>
      <div className='col-4 animate__animated animate__fadeInLeft'>
        <img src={`/assets/heroes/${heroId}.jpg`} alt={hero.superhero} className='img-thumbnail'/>
      </div>
      <div className='col-8'>
        <h3>
          {hero.superhero}
        </h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego:</b>
            {hero.alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher:</b>
            {hero.publisher}
          </li>
          <li className='list-group-item'>
            <b>First appearance:</b>
            {hero.first_appearance}
          </li>
        </ul>
        <p>{ hero.characters}</p>
        <button
          className='btn btn-outline-primary'
          onClick={onNavigateBack}
        >
          Back...
        </button>
      </div>
    </div>
    */