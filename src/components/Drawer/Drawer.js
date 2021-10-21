import React from 'react';

function Drawer() {
  return(
    <div style={{display:'none'}} className="overlay">
    <div className="drawer" >
          <h2 className="d-flex justify-between mb-30 ">
            Корзина
          <img className="cu-p" src="/img/remove.svg" alt= "Canceled" /></h2>
          
            <div className="items">
            <div className="cartItem d-flex aline-center">
            <img 
              className="mr-20"
              idth={70}
              height={70}
              src="/img/sneackers/1.jpg"
              alt="Img"
            />
            <div style={{ backgroundImage: 'url(/img/sneackers/1.svg)'}} className="cartItemImg">

            </div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>6000 грн.</b>
            </div>
            <img className="removeBtn" src="/img/remove.svg" alt= "Canceled" />
          </div>
        </div>

            <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>12000 грн.</b>
              </li>
              <li>
                <span>Налог 20%:</span>
                <div></div>
                <b>2200 грн.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ
               <img src="/img/arrow.svg" alt="Arrow"/>
            </button>
            </div>
           </div> 
            </div>
  )
}

export default Drawer;