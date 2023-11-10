import './App.css'; 
import React, {useState, useEffect} from 'react';

import ShoppingForm from './Components/ShoppingForm/ShoppingForm';
import ShoppingList from './Components/ShoppingList/ShoppingList';


function App() { 

  const [shoppingList, setShoppingList] = useState([]);

  function loadData() {
    fetch("https://z3jm6m-8080.csb.app/api/list")
      .then((x) => x.json())
      .then((response) => setShoppingList(response));
  }

  useEffect(loadData, []);

  function addItem(item, quantity) {
    fetch("https://z3jm6m-8080.csb.app/api/list/new", {
      method: "POST",
      body: JSON.stringify({ item, quantity, }),
      headers: {"Content-Type": "application/json; charset=utf-8",}, 
      mode: "cors",
    })
      .then((x) => x.json())
      .then(loadData);
  }

  function deleteItem(id) {
    fetch(`https://z3jm6m-8080.csb.app/api/list/${id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json; charset=utf-8",}, 
      mode: "cors",
    })
      .then((x) => x.json())
      .then(loadData);
  }

  function updateItem(id, itemName, quantity) {
    fetch(`https://z3jm6m-8080.csb.app/api/list/${id}`, {
      method: "PUT",
      body: JSON.stringify({ item: itemName, quantity, }),
      headers: {"Content-Type": "application/json; charset=utf-8",}, 
      mode: "cors",
    })
      .then((x) => x.json())
      .then(loadData);
  }

  return ( 
    <div className="App"> 
      <header className="App-header"> 
        <h1>Shopping List</h1>
      </header> 
      <main>
        <ShoppingForm submitItem= { addItem } />
        <ShoppingList items = { shoppingList } deleteItem= { deleteItem } updateItem= { updateItem } />
      </main> 
      <footer className="App-footer">thanks for shopping!</footer>
    </div> 
  ); 
} 
 

export default App; 
