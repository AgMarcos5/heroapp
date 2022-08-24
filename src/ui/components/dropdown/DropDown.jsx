import React, { useEffect, useRef, useState } from "react";
import "./dropdown.scss";

import arrow from '../../../assets/img/arrow.png'

export const DropDown = ({ text, options, onChange }) => {

  const [selectedItem, setSelectedItem] = useState(text)
  const [show, setShow] = useState(false)
 
  const handleClickItem = (value) => {
    setSelectedItem(value)
    onChange(value)
    setShow(!show)
  }

  const ref = useRef()
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [show])


  return (
    <div ref={ref} className="select" >
      <div className="select-field"
        onClick={() => setShow(!show)}
      >
        <input
          type="text"
          placeholder={selectedItem}
          className="select-box"
          readOnly
        />
        <button>
          <img src={arrow} alt="arrow" 
              className={`${show ? "rotate" : ""}`}/>
        </button>
      </div>
      <div  className={`select-list ${show ? "show" : ""}`}>
        {
          options?.map( opt => (
            <div className="select-item" key={opt} onClick={() => handleClickItem(opt)}>
                  {opt}
            </div>
          ))
        }
      </div>
    </div>
  );
};
