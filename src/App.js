import React,{useState, useEffect } from 'react';
import ProductList from './components/ProductList/ProductList';
import InputForm from './components/NewProduct/InputForm';
import './App.css';
import Worth from './components/Worth/Worth';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products'));
    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);
  const addProductHandler = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
    localStorage.setItem('products', JSON.stringify([...products, product]));
  };
  const deleteItemHandler = (itemId) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== itemId));
  const updatedProducts = products.filter((product) => product.id !== itemId);
  localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const totalPrice = () => {
    let total = 0;
    for (const product of products) {
      let productPrice = parseFloat(product.price);
      total += productPrice;
    }

    return total.toFixed(2); 
  };

  
  return (
    <div>
      <InputForm onAddProduct={addProductHandler}></InputForm>
      <ProductList items={products} deleteItem={deleteItemHandler}></ProductList>
      <Worth amount={totalPrice()}></Worth>
    </div>
  );
}

export default App;

