import React from "react";

import styles from "./Card.module.scss";

function Card({
  id,
  imageUrl,
  title,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  plus = true,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, title, imageUrl, price };

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={isFavorite ? "/img/liked-heart.svg" : "/img/unliked.svg"}
          alt="Heart"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} грн</b>
        </div>
        {plus && (
          <img
            className={styles.plus}
            onClick={onClickPlus}
            src={isAdded ? "img/btn-checked.svg" : "img/btn-plus.svg"}
            alt="Plus"
          />
        )}
      </div>
    </div>
  );
}

export default Card;
