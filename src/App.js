import React from 'react';

import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer/Drawer'

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://6192afdad3ae6d0017da8238.mockapi.io/items')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setItems(json);
      });
    }, []);

    const onAddToCart = (obj) => {
     setCartItems(prev => [...prev, obj]);
    }
  

  return (
    <div className="wrapper clear">
       {cartOpened && <Drawer items={cartItems} onClose = {() => setCartOpened(false)}/>}
      
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40" >
        <h1>Все кроссовки</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Поиск..."/>
        </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((obj => 
            <Card 
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onFavorite={() => console.log(obj)}
            onPlus={(obj) => onAddToCart(obj)} />
            ))}
        
      </div>
      </div>
      </div>
    );
  }

export default App;
