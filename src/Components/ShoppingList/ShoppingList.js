import React, {useState} from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm';


function ShoppingItem({ id, itemName, quantity, deleteItem, updateItem }) {

    const [isEdit, setEdit] = useState(false);

    function handleDelete(event) {
        event.preventDefault();
        deleteItem(id);
    }

    function handleEdit(event) {
        event.preventDefault();
        setEdit((oldEditBoolean) => !oldEditBoolean);
    }

    function handleUpdate(itemName, quantity) {
        updateItem(id, itemName, quantity);
        setEdit(false);
    }

    const ReadOnlyJsx = (
        <span>
            {itemName} ({ quantity })
        </span>
    );

    const EditJsx = (
        <ShoppingForm 
            className="form-edit"
            submitItem= {handleUpdate}
            submitButtonText="UPDATE"
            defaultItemName={itemName}
            defaultQuantity={quantity} />
    );

    return (
        <li>
            {isEdit ? EditJsx : ReadOnlyJsx}
            <div className='shopping-list-buttons'>
                <button className='cancel-edit-button' onClick={handleEdit}>{isEdit ? "CANCEL" : "EDIT"}</button>
                <button className='delete-button' onClick= {handleDelete} hidden={isEdit}>DELETE</button>
            </div>
        </li>
    );
}

export default function ShoppingList({ items, deleteItem, updateItem }) {

    const ItemsJSX = items.map((item) => (
        <ShoppingItem 
            key={item.id} 
            id= {item.id}
            itemName= {item.item}
            quantity= {item.quantity}
            deleteItem= {deleteItem}
            updateItem= {updateItem} />
    ));

  return (
    <ul>
        {ItemsJSX}
    </ul>
  );
}