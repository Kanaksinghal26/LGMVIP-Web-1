import React from 'react'
import './List.css'
import ToDoList from '../ToDoList/ToDoList'

const Box = () => {

    const [inputList, setInputList] = React.useState("");

    const [Items, setItems] = React.useState([]); // Array of All To-dos

    //function to read value from user

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    // function to add item in list

    const listofItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("")
    };

    // function to delete item from the list
    
    const deleteItems = (id) => {
        // e.preventDefault();
        console.log("del");
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <>
            <div className="list">

                <h1>To Do List</h1>

                <div className='additem'>
                    <input type="text" placeholder='Add Item' onChange={itemEvent} value={inputList} />
                    <button onClick={listofItems}>+</button>
                </div>

                <ol>
                    {Items.map((itemval, index) => {
                        return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems} />;
                    })}
                </ol>

            </div>
        </>
    )
}

export default Box
