import React from 'react'
import './dropdown.scss'

export const DropDown = ({options, onChange}) => {

    const selectChange = (e) => {
        const val = e.target.value
        onChange(val)
    }

  return (
    <select onChange={selectChange}>
      {
        options?.map( opt => (
          <option key={opt} value={opt}>
                {opt}
          </option>
        ))
      }
    </select>
  )
}
