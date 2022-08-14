
import React from 'react'

const sortPowerStats = ["intelligence","strength","speed","durability","power","combat"]

export const SortHeroes = ({active, onChange}) => {
    return(
        <>
        <div className="sort_container">
            <div className="sort_text">Sort by:</div>
            {sortPowerStats.map(option => 
                <div key={option} className={`sort_option ${option === active ? 'active' : ''}`} onClick={() => onChange(option)}>
                    <span>{option}</span> 
                </div>
            )}
        </div>
        </>
    )
}
