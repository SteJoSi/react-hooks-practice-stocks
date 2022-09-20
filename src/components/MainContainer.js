import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sortStocks, setSortStocks] = useState([])
  const [filterBy, setFilterBy] = useState("Tech")
  // console.log("State", stocks)

  //grabs the stocks from db.json
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data))
    // console.log('stocks', stocks))
  }, []);

  // const buyStock = (stock) => {
  //   if(!portfolio.includes(stock)) {
  //     const updatedStocks = [...portfolio, stock]
  //     setPortfolio(updatedStocks)
  //   } else {
  //     alert('ERROR!')
  //   }
  // }

  function handleBuyStock(stockToAdd) {
    const buyStock = portfolio.find(
      (stock) => stock.id === stockToAdd.id
    );
    if(!buyStock) {
      setPortfolio([...portfolio, stockToAdd])
    }
  }

  function handleRemoveStock(removedStock) {
    setPortfolio((portfolio) =>  
      portfolio.filter((stock) => stock.id !== removedStock.id));
}


  //sort Stocks alphabetically
  const sortStocksBy = [...stocks].sort((stock1, stock2) => {
    if(sortStocks === "Alphabetically") {
      return stock1['name'].localeCompare(stock2['name']);
    } else {
      return stock1['price'] - stock2['price']
    }
  })
  
  const filteredStocks = sortStocksBy.filter((stock) => stock['type'] === filterBy)

  return (
    <div>
      <SearchBar
        sortStocks={sortStocks}
        onChangeSort={setSortStocks}
        filterBy={filterBy}
        onChangeFilter={setFilterBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
          stocks={filteredStocks} 
          onAddStock={handleBuyStock}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            stocks={portfolio} 
            onRemoveStock={handleRemoveStock}
            />  
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
