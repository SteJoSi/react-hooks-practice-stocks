import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onRemoveStock }) {
  console.log("portfolio", stocks)

  //   const stockList = stocks.map((stock) => {
  //     <Stock key={stock.id} stock={stock} onStockClick={onRemoveStock} />
  // })

  return (
    <div>
      <h2>My Portfolio</h2>
      {/* //render your portfolio stocks here */}
      {/* {stockList} */}

      {stocks.map((stock) => {
        return <Stock key={stock.id} stock={stock} onStockClick={onRemoveStock} />
      })
      }

      {/* {
          stocks.map(stock => (
            <Stock key={stock.id} stock={stock} buyStock={buyStock} />
          ))
        } */}

    </div>
  );
}

export default PortfolioContainer;
