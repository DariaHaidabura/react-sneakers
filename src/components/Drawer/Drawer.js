import React from "react";

import styles from "./Drawer.module.scss";

function Drawer({ onClose, onRemove, items = [], opened }) {
  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30 ">
          Корзина
          <img
            onClick={onClose}
            className="cu-p"
            src="/img/remove.svg"
            alt="Canceled"
          />
        </h2>
        <div className="d-flex flex-column flex">
          <img
            className="mb-20"
            width="120px"
            src="/img/empty-cart.jpg"
            alt="Empty"
          />
          <h2>Корзина пустая</h2>
          <p class="opacity-6">
            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
          </p>
          <button className="greenButton">
            Вернуться назад
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}0</p>
                <b>{obj.price} грн.</b>
              </div>
              <img className="removeBtn" src="img/remove.svg" alt="Remove" />
            </div>
          ))}
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
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
