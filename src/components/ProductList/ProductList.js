
import './ProductList.css';
const ProductList=(props)=>{
      
   return(
       <div className='product-list'>
       <h1>Product List</h1>
       <ul>
      {props.items.map((product) => (
        <li key={product.id}>
          {product.price}-({product.name})
          <button onClick={() => props.deleteItem(product.id)}>Delete</button>
        </li>
      ))}
    </ul>
       </div>
   )
}

export default ProductList;