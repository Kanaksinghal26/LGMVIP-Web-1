import React from 'react'
import './ToDoList.css'

const ToDoList = (props) => {

    // returning each item of list through props.
    
    return (
        <>
            <div className="todo_style">
                <i className="fa fa-times" aria-hidden="true" onClick={() => {
                    props.onSelect(props.id)}}/>
                <li> {props.text} </li>
            </div>
        </>
    )
}

export default ToDoList
