import React, {useState} from 'react';



export default function ShoppingForm({ submitItem, submitButtonText= "ADD", defaultItemName= "", defaultQuantity= "", className="form-add" }) {

  const [item, setItem] = useState(defaultItemName);
  const [num, setNum] = useState(defaultQuantity);


  function handleSubmit(event) {
    event.preventDefault();
    submitItem(item, num);
    setItem("");
    setNum("");
  }

  function handleItemChange(event) {
    setItem(event.target.value);
  }

  function handleQuantityChange(event) {
    setNum(event.target.value);
  }

  return (

    <form action="#" method="POST" className= {className} onSubmit={handleSubmit}>
      <div className='form-row'>
        <label htmlFor="item">ITEM NAME </label>
        <input className='item-name'
          type="text" 
          id= "item" 
          value= {item}
          pattern=".*[^ ].*"
          onChange={handleItemChange} 
          required />
      </div>

      <div className='form-row'>
        <label htmlFor="quantity"> + QUANTITY </label>
        <input className='quantity'
          type="number" 
          id="quantity" 
          value= {num}
          onChange={handleQuantityChange}
          required />
      </div>

      <button className='submit-button' type="submit">{submitButtonText}</button>
    </form>
  );
}