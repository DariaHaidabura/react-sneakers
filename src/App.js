import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import useCart from "./hooks/useCart"
import AppContext from './context';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    axios
      .get("http://localhost:3004/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("http://localhost:3004/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("http://localhost:3004/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`http://localhost:3004/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('http://localhost:3004/cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
      console.error(error);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`http://localhost:3004/cart/${id}`);
    setCartItems((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `http://localhost:3004/favorites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "http://localhost:3004/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch {
      alert("Не удалось добавить в Избранное.");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const toggleOpened = () => {
    setCartOpened(!cartOpened)
  }

  return (
    <AppContext.Provider
    value={{
      items,
      cartItems,
      favorites,
      onAddToFavorite,
      onAddToCart,
      setCartOpened,
      setCartItems,
    }}>
    <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemoveItem={onRemoveItem}
          opened={cartOpened}
          toggleOpened={toggleOpened}
        />

      <Header onClickCart={() => setCartOpened(true)}/>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route
          path="/favorites"
          exact
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        />
      <Route path="/orders" exact element={<Orders items={items} />} />
      </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
