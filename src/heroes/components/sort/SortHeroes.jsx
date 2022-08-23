
import React from 'react'
import { DropDown } from '../../../ui/components/dropdown/DropDown'
import './sortheroes.scss'

const sortPowerStats = ["intelligence","strength","speed","durability","power","combat"]

export const SortHeroes = ({active, onChange}) => {
    return(
        <>
        <div className="sort_container">
            <div className="sort_text">Sort by:</div>
            <DropDown options={sortPowerStats} onChange={onChange}/>
        </div>
        </>
    )
}
