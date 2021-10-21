import React from 'react';

function Card() {
  return(
    <div className="card">
    <div className="favorite">
     <img src="/img/heart.svg" alt="Heart" />
    </div>
    <img width={133} height={112} src ="/img/sneackers/1.jpg" alt="Sneakers"/>
    <h5>Мужские Кроссовки Nike Air Max 270</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>1000 грн</b>
      </div>
      <button className="button">
      <img width={11} height={11} src ="/img/plus.svg" alt="Plus"/>
      </button>
    </div>
     </div>
  )
}

export default Card;