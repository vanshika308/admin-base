import React,{useState} from 'react';
import './InputForm.css';

const InputForm=(props)=>{


   const[enteredProductId,setEnteredProductId]=useState('');
   const[enteredPrice,setEnteredPrice]=useState('');
   const[enteredProduct,setEnteredProduct]=useState('');
   

   const idChangeHandler=(event)=>{
    setEnteredProductId(event.target.value);
   }
   const priceChangeHandler=(event)=>{
    setEnteredPrice(event.target.value);
    }
    const productChangeHandler=(event)=>{
        setEnteredProduct(event.target.value)
    }
    const SubmitHandler=(event)=>{
       event.preventDefault();
       const product={
          id: enteredProductId,
          name : enteredProduct ,
          price  : parseFloat(enteredPrice)
       }
       console.log('Submitted Product:', product);
       props.onAddProduct(product);

       setEnteredProductId('');
       setEnteredProduct('');
       setEnteredPrice('');
    }
    return(
        <form onSubmit={SubmitHandler} className='form'>
        <div className='new_product-control'>
            <label>Product ID</label>
            <input type="text"
              onChange={idChangeHandler}
             value={enteredProductId}/>
        </div>
        <div className='new_product-control'>
            <label>Selling Price</label>
            <input type="number" 
             onChange={priceChangeHandler}
            value={enteredPrice}/>
        </div>
        <div className='new_product-control'>
           <label>Product Name</label>
           <input type="text"
            onChange={productChangeHandler}
            value={enteredProduct}/>
        </div>
        <button className='add'>Add product</button>
        </form>
    );
};


export default InputForm;