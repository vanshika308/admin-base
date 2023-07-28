import './Worth.css';
const Worth =(props)=>{
   return(<div className='container'>
      <h2> Total Value Worth of products</h2>
      <h3>{props.amount}</h3>
   </div>)
}

export default Worth;