import React from 'react'

const Item = ({img, title, cost}) => {
  return (
    <>
        <div className="card" style="width: 18rem;">
            <img src={img} className="card-img-top" alt="images cards" />
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