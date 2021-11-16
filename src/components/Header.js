import React from 'react';

function Header(props) {
  return(
<header className="d-flex justify-between align-center p-40">
       <div className="d-flex align-center">
       <img width={40} height={40} src="/img/logo.png" alt="Logo"/>
         <div>
           <h3 className="text-uppercase">React Sneackers</h3>
            <p  className="opacity-5">Магазин лучших кроссовок</p>
         </div>
       </div>
       <ul className="d-flex">
           <li onClick={props.onClickCart} className="mr-30 cu-p">
           <img width={20} height={20} src="/img/cart.svg" alt="Card" />
           <span>1300 грн.</span>
           </li>
           <li>
          <img width={20} height={20} src="/img/like.png" alt="Like" />
          </li>
           <li>
           <img width={20} height={20} src="/img/user.svg" alt="User"/>
          </li>
         </ul>
     </header>
  )
}

export default Header;