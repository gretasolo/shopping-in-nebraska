import React from 'react';
import './App.css';




let listShoppingCartItems = [
  {
    item: 'Corn',
    image: 'http://bit.ly/2NihbNh',
    description: 'This is your fuel. Your new work, food, life, and passion.',
    price: 1000,
  },
  {
    item: 'Corn-head',
    image: 'http://bit.ly/36IUqtA',
    description: 'Necessary to wear to all Husker football games and to fit in anywhere in Nebraska.',
    price: 2000,
  },
  {
    item: 'Cornhusker Jersey',
    image: 'http://bit.ly/2CfMwJX',
    description: 'Your new uniform.',
    price: 3000,
  },
  {
    item: 'Soybeans',
    image: 'http://bit.ly/36vdE5D',
    description: 'Sister to corn. Your fuel, your side passion.',
    price: 4000,
  },
  {
    item: 'Name-A-Cow',
    image: 'http://bit.ly/34tWeo9',
    description: 'This is your property. Mark your land with some Angus beef.',
    price: 5000,
  }

]



function App() {
  return (
    <div className="App">
      <h1>Your Shopping Cart</h1>
    
      <ShoppingCart />
     
     </div>
    

  );
  function Images(){
  return(
    <div className="photo">
    {/* {postsImage} */}
  </div>
  );
}

 function ShoppingCart() {

  const postsSequence = listShoppingCartItems.map((product) =>
    <Product item={product.item} image={product.image} />
  );

   return(
     <div className="cart">
      {postsSequence}
     </div>
   );
 }

function Product(props) {
  return(
    <div className="product">
    < img className="image" src={props.image}/>
    <p></p>
  </div>
)
  
}


  
}
export default App;