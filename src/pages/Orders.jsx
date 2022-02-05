import React from "react";

function Orders({ params }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <img className="clear c-up" src="/img/remove.svg" alt="Clear" />
          <input />
        </div>
      </div>
      <div className="d-flex flex-wrap">Тут будут мои заказы</div>
    </div>
  );
}

export default Orders;
