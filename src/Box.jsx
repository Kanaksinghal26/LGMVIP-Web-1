import React from 'react'
import './Box.css'
import ToDoList from './ToDoList'

const Box = () => {

    const [inputList, setInputList] = React.useState("");

    const [Items, setItems] = React.useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listofItems = () => {
        setItems ((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("")
    };

    const deleteItems = (id) => {
        // e.preventDefault();
        console.log("del");
        setItems ((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !==id;
            });
        });
    }

    return (
        <>
                <div className="box">
               <h1>To Do List</h1>
                    <div className='additem'>
                    <input type="text" placeholder='Add Item'  onChange={itemEvent} value={inputList}/>
                    <button onClick={listofItems}>+</button>
                </div>

                <ol>
                    {Items.map((itemval, index) => {
                        return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems}/>;
                    })}
                </ol>
            </div>
        </>
    )
}

export default Box
