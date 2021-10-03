
import './App.css';
import Products from './Products';
import AppContext from './AppContext';
import { useState } from 'react';
import Cart from './Cart';

function App() {

  const [cartData,setCartData]=useState([]);

  const addProduct = (productId) => {
    setCartData(data=>{
      return [
        ...data,
        productId
      ]
    })
  }

  const removeProduct = (productId) => {
    const items = [...cartData];
    items.splice(items.indexOf(productId),1);
    setCartData(items);
  }

  return (
    <div className="App">

<AppContext.Provider value={{cartData,addProduct,removeProduct}}>
      <div style={{ width: '49%', float: 'left' }}>
        <Products />
      </div>
      <div style={{ width: '49%', float: 'right' }}>
        <Cart />
      </div>
      </AppContext.Provider>



    </div>
  );
}

export default App;
