import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onAddStock}) {
 console.log('stocks', stocks)

  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
         {stocks.map(stock => (<Stock key={stock.id} stock={stock} onStockClick={onAddStock}/>))}
    </div>
  );
}

export default StockContainer;
