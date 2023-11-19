import React, {useState} from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm';


function ShoppingItem({ id, itemName, quantity, deleteItem, updateItem, submitButtonText }) {

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

    function handleLink(event) {
        window.open(`https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=${itemName}`, '_blank');
    }

    const ReadOnlyJsx = (
        <span>
            {itemName} ({ quantity })
        </span>
    );

    const EditJsx = (
        <ShoppingForm 
            className="form-edit"
            submitButtonText='UPDATE'
            submitItem= {handleUpdate}
            defaultItemName={itemName}
            defaultQuantity={quantity} 
        />
    );

    return (
        <li className='shopping-item'>
            {isEdit ? EditJsx : ReadOnlyJsx}
            <div className='shopping-list-buttons'>
                <button className='buy-button' onClick={handleLink} hidden={isEdit}>BUY</button>
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
    <ul className='shopping-list'>
        {ItemsJSX}
    </ul>
  );
}