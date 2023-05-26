import { useState, useEffect } from 'react';
import axios from 'axios';

import Products from "./components/Products"


function App() {

    const [dataProducts, setDataProducts] = useState([]);

    const getDataProducts = async () => {
      try {
        const products = await axios.get('https://fakestoreapi.com/products?limit=5');
        setDataProducts(products.data);
        
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(()=> {
      getDataProducts();
    }, [])

  return (
    <>
        <h1>My Products</h1>
          <div className='flex flex-wrap grid-rows-3 gap-8'>
              {dataProducts.map((product)=> {
                return (
                    <div key={product.id}>
                      <Products dataProducts={product}/>
                    </div>
                )
              })}
          </div>

    </>
  )
}

export default App
