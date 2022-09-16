import React from 'react'
import './Item.css'

const Item = ({img, title, cost}) => {
  return (
    <>
        <div className="card">
            <img src={img} className="card-img-top img-item" alt="images cards" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${cost}</p>
                <a href="#" className="btn btn-primary">+ Detalles</a>
            </div>
        </div>
    </>
  )
}

export default Item